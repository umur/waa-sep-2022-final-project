package com.cs545.backend.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "favorite")
@Data
@DynamicUpdate
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @ManyToOne
    private Customer owner;

    @ManyToMany
    private List<Property> properties;

    public void setOwner(Customer customer){
        if(customer != null){
            this.owner = customer;
            customer.addFavorite(this);
        }
    }

    public void addProperty(Property property){
        if(property != null){
            if(!this.properties.contains(property)){
                this.properties.add(property);
            }
        }
    }
}