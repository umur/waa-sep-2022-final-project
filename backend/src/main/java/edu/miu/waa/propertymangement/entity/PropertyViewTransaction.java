package edu.miu.waa.propertymangement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PropertyViewTransaction extends BaseEntity{
    @OneToOne
    private Property property;
}
