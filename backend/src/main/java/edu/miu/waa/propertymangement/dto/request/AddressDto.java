package edu.miu.waa.propertymangement.dto.request;

import lombok.Data;

@Data
public class AddressDto {
    
    private Long id;

    private String street;

    private String city;

    private String zipcode;

    private String state;
}
