package miu.waa.pmp.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private User user;
    @ManyToOne
    private Property property;

}
