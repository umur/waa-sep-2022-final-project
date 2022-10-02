package com.property.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator",  sequenceName = "users_id_seq",allocationSize = 1)
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    @Column(columnDefinition="BOOLEAN DEFAULT true")
    private boolean isActive;

    @Enumerated(EnumType.STRING)
    private Role role;

    private LocalDate accountCreatedAt;

    @OneToMany(mappedBy = "landLord")
    private List<Property> properties;

    @OneToMany(mappedBy = "tenant", cascade = CascadeType.ALL)
    private List<PropertyRent> tenantProperties;

    public void addProperty(Property property){
        this.properties.add(property);
    }

    public void addTenantRent(PropertyRent tenantProperty){
        tenantProperty.setTenant(this);
        this.tenantProperties.add(tenantProperty);
    }

}
