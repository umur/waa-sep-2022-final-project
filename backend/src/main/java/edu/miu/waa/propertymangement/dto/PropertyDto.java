package edu.miu.waa.propertymangement.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class PropertyDto {
    private UUID id;
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

    private boolean isRented;

    private LocalDateTime rentedDate;

    private String propertyType;

    private String homeType;

    private boolean isForSale;

    // this is for the list / unlist properties
    private boolean isShowToCustomer;

    private List<PropertyImageDto> images;

    private UserDto owner;


}


