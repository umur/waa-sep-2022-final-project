package com.cs545.backend.entity;

import lombok.Data;
import org.hibernate.annotations.*;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "property")
@Data
@DynamicUpdate
@SQLDelete(sql = "UPDATE property SET deleted = true WHERE id=?")
@Where(clause = "deleted=false")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(nullable = false)
    private int price;
    @Column(nullable = false)
    private int numberOfRooms;
    @Column(nullable = false)
    private int size;
    @Column(nullable = false)
    private int numberOfBathrooms;
    @Column(nullable = false)
    private int year;
    @Column(nullable = false)
    private int views = 0;
    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
    @Column(nullable = false)
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    @OneToOne
    private Address address;
    @ElementCollection
    @CollectionTable(name = "photos", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "photos")
    private List<String> photos;
    @ManyToOne
    private Owner owner;
    @OneToMany(mappedBy = "property")
    private List<Request> requests;

    private boolean deleted = false;

    public void setUser(Owner owner){
        if(owner != null){
            this.owner = owner;
            owner.addProperty(this);
        }
    }

    public void addRequest(Request request) {
        if(request != null){
            this.requests.add(request);
            if(!this.equals(request.getProperty())){
                request.setProperty(this);
            }
        }
    }
}