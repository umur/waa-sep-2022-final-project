package miu.waa.pmp.models;

import miu.waa.pmp.dto.HomeType;
import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Data
@Entity
public class Property {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String homeType;
    private String description;
    private int price;
    private int views;
    private boolean active;
    private boolean rented;
    private int rooms;
    private double area;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JoinColumn(name="category_id")
    private Category category;

    @ManyToOne
    private User user;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="address_id")
    private Address address;

}
