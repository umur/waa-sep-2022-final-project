package com.property.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator",  sequenceName = "property_id_seq",allocationSize = 1)
    private Long id;

    private String propertyName;

    private String propertyType;

    private Integer noOfBedRoom;

    private Integer noOfBathRoom;

    private Double rentAmount;

    private Double securityDepositAmount;

    @Column(name = "is_available", columnDefinition = "boolean default true")
    private boolean available;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    private boolean delete;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)
    private List<Photo> photos;

    @ManyToOne
    private User landLord;

    @OneToMany(mappedBy = "property")
    private List<PropertyRent> tenantProperties;

    public void addPhoto(Photo photo){
        this.photos.add(photo);
    }

    public void addPhotos(List<Photo> photos){
        photos.forEach(photo -> photo.setProperty(this));
        this.photos = new ArrayList<>();
        this.photos.addAll(photos);
    }



}
