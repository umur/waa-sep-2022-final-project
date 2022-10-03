package com.cs545.backend.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@DiscriminatorValue("owner")
@Entity
@Data
@DynamicUpdate
public class Owner extends User {
    @OneToMany(mappedBy = "owner")
    private List<Property> ownedProperties = new ArrayList<>();

    public void setOwnedProperties(List<Property> properties){
        this.ownedProperties = properties;
        for(Property property: properties){
            if(!this.equals(property.getOwner())){
                property.setOwner(this);
            }
        }
    }
    public void addProperty(Property property){
        if(property != null){
            if(!this.ownedProperties.contains(property)){
                this.ownedProperties.add(property);
            }
            if(!this.equals(property.getOwner())){
                property.setUser(this);
            }
        }
    }
}