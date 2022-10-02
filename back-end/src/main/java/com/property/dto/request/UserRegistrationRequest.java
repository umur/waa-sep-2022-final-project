package com.property.dto.request;

import com.property.domain.Role;
import lombok.Data;

@Data
public class UserRegistrationRequest {

    private String firstName;

    private String lastName;

    private Role role;

    private String email;

    private String password;
}
