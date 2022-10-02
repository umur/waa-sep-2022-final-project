package edu.miu.waa.propertymangement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavouriteList extends BaseEntity{
    @ManyToOne
    private User customer;

    @ManyToOne
    private Property property;
}
