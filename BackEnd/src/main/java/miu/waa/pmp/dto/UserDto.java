package miu.waa.pmp.dto;

import lombok.Data;

@Data
public class UserDto {
    private int id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private AddressDto address;
    private String role;
}

