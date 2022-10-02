package com.property.service.impls;

import com.property.domain.*;
import com.property.dto.PropertyDto;
import com.property.dto.request.Rent;
import com.property.dto.response.DailyCountDto;
import com.property.dto.response.PropertyRequestDateDto;
import com.property.exception.custom.PropertyAlreadyRented;
import com.property.exception.custom.ResourceNotFoundException;
import com.property.respository.PropertyRentRepository;
import com.property.respository.PropertyRepository;
import com.property.respository.UserRepository;
import com.property.service.PropertyService;
import com.property.service.S3BucketStorageService;
import com.property.util.RandomAlphabet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.lang.reflect.Type;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;

    private final PropertyRentRepository propertyRentRepository;

    private final S3BucketStorageService s3BucketStorageService;

    private final ModelMapper modelMapper;

    private final UserRepository userRepository;

    @Override
    public PropertyDto save(PropertyDto propertyDto) {
        Property property = modelMapper.map(propertyDto, Property.class);
        property = propertyRepository.save(property);
        return modelMapper.map(property,PropertyDto.class);
    }



    @Override
    public PropertyDto save(PropertyDto propertyDto, List<MultipartFile> files) {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        log.info("Login with user: {}",username);
        var user = userRepository.findByEmail(username);
        Property property = modelMapper.map(propertyDto, Property.class);
        property.setLandLord(user);
        property.setAvailable(Boolean.TRUE);
        property = propertyRepository.save(property);
        return modelMapper.map(property,PropertyDto.class);
    }

    @Override
    public List<PropertyDto> findNotRented() {
        var properties = propertyRepository.findAllByAvailableIsTrue();
        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties,listType);
    }

    @Override
    public List<PropertyDto> findLast10lease() {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        log.info("Login with user: {}",username);
        var user = userRepository.findByEmail(username);
        var properties = propertyRepository.findAllLeaseByLandLordAndDateRange(user.getId());
        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties,listType);
    }

    @Override
    public List<DailyCountDto> findWeeklyRentedCount() {
        Set<PropertyRequestDateDto> properties = propertyRepository.findAllByRentedDateRange(LocalDate.now().minusDays(7), LocalDate.now());
        Map<LocalDate, List<PropertyRequestDateDto>> propertyMap = properties.stream()
                .collect(Collectors.groupingBy(p -> p.getCreatedAt()));

        List<DailyCountDto> weeklyCounts = propertyMap.entrySet()
                                                       .stream()
                                                        .map(entry ->  new DailyCountDto(entry.getKey(),entry.getValue().size())).toList();
        return weeklyCounts;
    }

    @Override
    public List<PropertyDto> findLast10Rent() {
        var properties = propertyRepository.findAllRentedByDateRange(LocalDate.now(), PageRequest.of(0,10));
        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties,listType);
    }

    @Override
    @Transactional(readOnly = true)
    public ByteArrayOutputStream findImage(Long propertyId, Long imageId) {
        Property property = propertyRepository.findById(propertyId).orElseThrow(() -> new ResourceNotFoundException(String.format("Property with id: %s not found",propertyId)));
        Photo photo = property.getPhotos().stream().filter(p -> p.getId().equals(imageId)).findFirst().orElseThrow(() -> new ResourceNotFoundException(String.format("Image with id: %s not found",imageId)));
        return s3BucketStorageService.downloadImage(photo.getKeyName());
    }

    @Override
    public void rent(Long propertyId, Rent rent) {
        Property property = propertyRepository.findById(propertyId).orElseThrow(() -> new ResourceNotFoundException(String.format("Property with id: %s not found",propertyId)));
        Optional<PropertyRent> mayBePropertyRent = propertyRentRepository.findByPropertyIdAndRentEndDateIsAfter(propertyId, LocalDate.now());
        if(mayBePropertyRent.isPresent()){
            throw new PropertyAlreadyRented(String.format("Property with id:%s already rented",propertyId));
        }
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        log.info("Login with user: {}",username);
        var user = userRepository.findByEmail(username);
        PropertyRent propertyRent = new PropertyRent(property,user, rent.getRentEndDate(), rent.getAmount());
        user.addTenantRent(propertyRent);
        userRepository.save(user);
        property.setAvailable(Boolean.FALSE);
        propertyRepository.save(property);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PropertyDto> findAll() {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        log.info("Login with user: {}",username);
        var user = userRepository.findByEmail(username);

        var properties = user.getRole().equals(Role.LANDLORD) ?
                    propertyRepository.findAllByLandLordIdAndDeleteIsFalse(user.getId()):
                    propertyRepository.findAllByDeleteIsFalse();

        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties,listType);
    }

    @Override
    @Transactional(readOnly = true)
    public PropertyDto findById(Long id) {
        var property = propertyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(String.format("Property with id: %s not found",id)));
        return modelMapper.map(property,PropertyDto.class);
    }

    @Override
    public PropertyDto update(PropertyDto propertyDto, Long id) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(String.format("Property with id: %s not found",id)));
        property.setNoOfBedRoom(propertyDto.getNoOfBedRoom());
        property.setNoOfBathRoom(propertyDto.getNoOfBathRoom());
        property.setPropertyType(propertyDto.getPropertyType());
        property.setPropertyName(propertyDto.getPropertyName());
        property.setRentAmount(propertyDto.getRentAmount());
        property.setSecurityDepositAmount(propertyDto.getSecurityDepositAmount());
        Address address = modelMapper.map(propertyDto.getAddress(), Address.class);
        property.setAddress(address);
        property = propertyRepository.save(property);
        return modelMapper.map(property, PropertyDto.class);
    }

    @Override
    public void deleteById(Long id) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(String.format("Property with id: %s not found",id)));
        property.setDelete(Boolean.TRUE);
        propertyRepository.save(property);
    }

    @Override
    public List<PropertyDto> findAllByPropertyTypeContains(String type){
        var properties = propertyRepository.findAllByPropertyTypeContains(type);
        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties,listType);
    }

    @Override
    public List<PropertyDto> findAllByNoOfBedRoom(int noOfBedRoom){
        var properties = propertyRepository.findAllByNoOfBedRoom(noOfBedRoom);
        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties,listType);
    }

    @Override
    public List<PropertyDto> findAllByAddress_StateAndAddress_City(String state, String city){
        List<Property> properties = new ArrayList<Property>();
        if(state != null && city != null) {
             properties = propertyRepository.findAllByAddress_StateAndAddress_City(state, city);
        } else if (city == null){
             properties = propertyRepository.findAllByAddress_State(state);
        } else if (state == null){
             properties = propertyRepository.findAllByAddress_City(city);
        }

        Type listType = new TypeToken<List<PropertyDto>>(){}.getType();
        return modelMapper.map(properties, listType);
    }
}
