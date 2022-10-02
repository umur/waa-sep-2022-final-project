package com.property.service;

import com.property.dto.PropertyDto;
import com.property.dto.request.Rent;
import com.property.dto.response.DailyCountDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.util.List;

public interface PropertyService extends CrudService<PropertyDto,PropertyDto,Long> {

    PropertyDto save(PropertyDto propertyDto, List<MultipartFile> files);

    List<PropertyDto> findNotRented();

    List<PropertyDto> findLast10lease();

    List<DailyCountDto> findWeeklyRentedCount();

    List<PropertyDto> findLast10Rent();

    ByteArrayOutputStream findImage(Long propertyId, Long imageId);

    void rent(Long propertyId, Rent rent);

    List<PropertyDto> findAllByPropertyTypeContains(String type);

    List<PropertyDto> findAllByNoOfBedRoom(int noOfBedRoom);

    List<PropertyDto> findAllByAddress_StateAndAddress_City(String state, String city);
}
