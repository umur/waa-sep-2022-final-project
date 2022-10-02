package com.property.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator",  sequenceName = "photo_id_seq",allocationSize = 1)
    private Long id;

    private String url;

    private String keyName;

    private boolean isDeleted;

    @ManyToOne
    private Property property;

    public Photo(String url, String keyName) {
        this.url = url;
        this.keyName = keyName;
        this.isDeleted = false;
    }
}
