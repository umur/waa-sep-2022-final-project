package edu.miu.waa.propertymangement.service.impl;

import edu.miu.waa.propertymangement.dto.PropertyDto;
import edu.miu.waa.propertymangement.entity.Property;
import edu.miu.waa.propertymangement.entity.User;
import edu.miu.waa.propertymangement.repo.PropertyRepo;
import edu.miu.waa.propertymangement.repo.UserRepo;
import edu.miu.waa.propertymangement.security.SecurityUtil;
import edu.miu.waa.propertymangement.service.PropertyService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;


@Service
@Transactional

@Slf4j
@RequiredArgsConstructor
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepo propertyRepo;

    private final HttpServletRequest request;


    private final UserRepo userRepo;

    private final ModelMapper modelMapper;



    @Override
    public List<PropertyDto> getLastRentedProperties() {
        Iterable<Property> properties = propertyRepo.findAllByRentedOrderByRentedDateDesc(true);
        List<PropertyDto> propertyList=new ArrayList<>();
        for(Property p:properties){
            propertyList.add(modelMapper.map(p,PropertyDto.class));
        }
        return  propertyList;
    }

    @Override
    public PropertyDto getPropertyById(String id) {
        Property property = propertyRepo.findById(UUID.fromString(id)).get();
        return modelMapper.map(property, PropertyDto.class);
    }

    @Override
    public void deleteProperty(String id) {
        propertyRepo.deleteById(UUID.fromString(id));
    }


    @Override
    public PropertyDto save(PropertyDto propertyDto, List<MultipartFile> files) {
//        var username = SecurityContextHolder.getContext().getAuthentication().getName();
//        log.info("Login with user: {}",username);
//        var user = userRepo.findByEmail(username);


        Property property = modelMapper.map(propertyDto, Property.class);
        User user = userRepo.findById(UUID.fromString(SecurityUtil.getKeyCloakAccessToken().getId())).get();
        property.setOwner(user);
//        property.setsetLandLord(user);
        if(files.size() > 0){
        for(MultipartFile file : files){
            try {
                String uploadsDir = "/uploads/";
                String realPathToUploads = request.getServletContext().getRealPath(uploadsDir);
                if (!new File(realPathToUploads).exists()) {
                    new File(realPathToUploads).mkdir();
                }

                log.info("realPathToUploads = {}", realPathToUploads);


                String orgName = file.getOriginalFilename();
                String filePath = realPathToUploads + orgName;
                File dest = new File(filePath);
                file.transferTo(dest);
//                property.setImages();

            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

      }
        property.setShowToCustomer(Boolean.TRUE);
        property = propertyRepo.save(property);
        return modelMapper.map(property,PropertyDto.class);
    }

    @Override
    public PropertyDto saveProperty(PropertyDto propertyDto) {
        log.info("Property Dto " + propertyDto);

        Property property = modelMapper.map(propertyDto, Property.class);

        User user = userRepo.findById(UUID.fromString(SecurityUtil.getKeyCloakAccessToken().getSubject())).get();
        property.setOwner(user);
        log.info("Property " + property);
        property.setShowToCustomer(Boolean.TRUE);
        property = propertyRepo.save(property);
        return modelMapper.map(property,PropertyDto.class);
    }

    @Override
    public List<PropertyDto> getPropertyWithFilter(String propertyType, Integer numberOfRooms, String homeType, String location, Integer rentAmount) {
        Iterable<Property> properties;
        //Checking default values
        if(rentAmount==0 || numberOfRooms==0 || location.isEmpty()){
        properties = propertyRepo.findAll();
        }else{
        properties = propertyRepo.finalAllPropertyWithFilter(propertyType,numberOfRooms,homeType,location, BigDecimal.valueOf(rentAmount));
        }

        List<PropertyDto> propertyList=new ArrayList<>();

        for(Property p:properties){
            propertyList.add(modelMapper.map(p,PropertyDto.class));
        }
        return  propertyList;
    }

    @Override
    public List<PropertyDto> getProperty() {
        List<PropertyDto> propertyList=new ArrayList<>();
        Iterable<Property> properties = propertyRepo.findAll();
        for(Property p:properties){
            propertyList.add(modelMapper.map(p,PropertyDto.class));
        }
        return  propertyList;
    }
}
