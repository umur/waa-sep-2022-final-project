package miu.waa.pmp.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imageUrl;
    @ManyToOne
    private Property property;

}
