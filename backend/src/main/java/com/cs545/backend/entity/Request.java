package com.cs545.backend.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "request")
@Data
@DynamicUpdate
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String comment;
    @ManyToOne
    private Customer requester;
    @ManyToOne
    private Property property;

    public void setRequester(Customer requester){
        if(requester != null){
            this.requester = requester;
            requester.addRequest(this);
        }
    }

    public void setProperty(Property property){
        if(property != null){
            this.property = property;
            if(!property.getRequests().contains(this)){
                property.addRequest(this);
            }
        }
    }
}