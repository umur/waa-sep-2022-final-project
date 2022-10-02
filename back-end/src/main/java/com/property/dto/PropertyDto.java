package com.property.dto;

import com.property.dto.request.AddressDto;
import com.property.dto.response.PhotoDto;
import lombok.Data;

import java.util.List;

@Data
public class PropertyDto {

    private Long id;

    private String propertyName;

    private String propertyType;

    private Integer noOfBedRoom;

    private Integer noOfBathRoom;

    private Double rentAmount;

    private Double securityDepositAmount;

    private AddressDto address;

    private List<PhotoDto> photos;

}
