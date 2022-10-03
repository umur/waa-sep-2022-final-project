package com.cs545.backend.dto.property;

import lombok.Data;

import java.io.Serializable;

@Data
public class PropertyDto implements Serializable {
    private long id;
    private int views;
    private int numberOfRooms;
    private int price;
    private int size;
    private int numberOfBathrooms;
    private int year;
}
