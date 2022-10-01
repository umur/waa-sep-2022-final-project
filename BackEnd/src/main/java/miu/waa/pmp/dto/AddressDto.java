package miu.waa.pmp.dto;

import lombok.Data;

@Data

public class AddressDto {
    private int id;
    private String street;
    private String zip;
    private String city;
    private UserDto user;

}

