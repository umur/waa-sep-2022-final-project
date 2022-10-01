package miu.waa.pmp.dto;

import lombok.Data;

@Data
public class SimplifiedUserDto {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String street;
    private String zip;
    private String city;
}

