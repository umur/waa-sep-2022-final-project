package edu.miu.waa.propertymangement.dto;

import edu.miu.waa.propertymangement.entity.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.OneToMany;
import java.util.Set;

@Getter
@Setter
public class CreateUserRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;
}
