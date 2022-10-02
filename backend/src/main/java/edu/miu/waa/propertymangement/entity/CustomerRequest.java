package edu.miu.waa.propertymangement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerRequest extends BaseEntity{
    @OneToOne
    private User customer;

    private String message;

    @OneToOne
    private Property property;
}
