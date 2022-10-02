package edu.miu.waa.propertymangement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "app_user")
@AllArgsConstructor
@NoArgsConstructor
@SQLDelete(sql = "UPDATE users SET is_deleted = true WHERE id=?")
@Where(clause = "is_deleted=false")
public class User extends BaseEntity {

    private String firstName;
    private String lastName;
    private String email;

    private boolean isActive;

//    @JoinTable(name = "app_user_roles")
    @OneToMany
    private Set<Role> roles;
}
