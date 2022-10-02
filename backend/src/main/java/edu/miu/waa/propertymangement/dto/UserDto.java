package edu.miu.waa.propertymangement.dto;

import edu.miu.waa.propertymangement.entity.Role;
import lombok.*;
import net.bytebuddy.asm.Advice;

import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private boolean isActive;
    private Set<RoleDto> roles;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
