package edu.miu.waa.propertymangement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@SQLDelete(sql = "UPDATE property SET is_deleted = true WHERE id=?")
@Where(clause = "is_deleted=false")
public class Property extends BaseEntity {
    private String propertyName;
    private String description;
    private String address;
    private String street;
    private String zip;
    private String city;
    private Double squareFeet;

    private Integer numberOfRooms;

    private Integer numberOfBathRooms;

    private BigDecimal rentAmount;

    private boolean rented;

    private LocalDateTime rentedDate;

    private String propertyType;
    private String homeType;

    private boolean isForSale;

    // this is for the list / unlist properties
    private boolean isShowToCustomer;

    @JoinColumn(name="property_id")
    @OneToMany(cascade = CascadeType.ALL)
    private List<PropertyImage> images;

    @OneToMany(mappedBy = "property")
    private List<FavouriteList> favouriteList;

    @JoinColumn(name = "owner_id")
    @ManyToOne
    private User owner;
}
