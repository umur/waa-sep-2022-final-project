package miu.waa.pmp.dto;

import lombok.Data;

@Data
public class PropertyDto {
    private int id;
    private String name;
    private String description;
    private int rooms;
    private double area;
    private int price;
    private boolean active;
    private boolean rented;
    private CategoryDto category;

}
