package edu.miu.waa.propertymangement.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Role extends BaseEntity {
    private String role;

    @ManyToOne
    private User user;

}
