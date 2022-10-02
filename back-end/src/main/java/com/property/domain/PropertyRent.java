package com.property.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class PropertyRent {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator", sequenceName = "tenant_property_id_seq", allocationSize = 1)
    private Long id;

    @ManyToOne
    private Property property;

    @ManyToOne
    private User tenant;

    private LocalDate rentEndDate;

    private LocalDate createdAt;

    private Double paidRentAmount;

    public PropertyRent(Property property, User user, LocalDate rentEndDate, Double paidRentAmount) {
        this.property =property;
        this.tenant = user;
        this.rentEndDate = rentEndDate;
        this.paidRentAmount = paidRentAmount;
    }
}