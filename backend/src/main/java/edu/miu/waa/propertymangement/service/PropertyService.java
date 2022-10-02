package edu.miu.waa.propertymangement.service;


import edu.miu.waa.propertymangement.dto.PropertyDto;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import edu.miu.waa.propertymangement.dto.PropertyDto;


import java.util.List;

public interface PropertyService {
    PropertyDto save(PropertyDto propertyDto, List<MultipartFile> files);

    PropertyDto saveProperty(PropertyDto propertyDto);

    public List<PropertyDto> getPropertyWithFilter(String propertyType, Integer numberOfRooms,
                                          String homeType, String location,
                                         Integer rentAmount);
    public List<PropertyDto> getProperty();
    public List<PropertyDto> getLastRentedProperties();

    public PropertyDto getPropertyById(String id);

    public void deleteProperty(String id);
}
