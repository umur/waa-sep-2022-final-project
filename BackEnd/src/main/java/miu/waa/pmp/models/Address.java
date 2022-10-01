package miu.waa.pmp.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String street;
    private String zip;
    private String city;
    /*
    @OneToOne(mappedBy = "address")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id" )
    private User user;*/

    @OneToOne(mappedBy = "address")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id" )
    private Property property;

}

