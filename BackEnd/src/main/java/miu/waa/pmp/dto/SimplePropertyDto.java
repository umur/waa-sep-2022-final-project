package miu.waa.pmp.dto;

import lombok.Data;

@Data
public class SimplePropertyDto {
    private int id;
    private String name;
    private int price;
    private boolean active;
    private int category_id;
    private String category_name;

    public SimplePropertyDto(int id, String name, int price, boolean active, int category_id, String category_name) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.active = active;
        this.category_id = category_id;
        this.category_name = category_name;
    }
}
