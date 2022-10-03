package com.cs545.backend.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@DiscriminatorValue("customer")
@Data
@DynamicUpdate
public class Customer extends User {
    @OneToMany(mappedBy = "requester")
    private List<Request> requests = new ArrayList<>();

    @OneToMany(mappedBy = "owner")
    private List<Favorite> favorites = new ArrayList<>();

    public void setRequests(List<Request> requests){
        this.requests = requests;
        for(Request request: requests){
            if(!this.equals(request.getRequester())){
                request.setRequester(this);
            }
        }
    }
    public void addRequest(Request request){
        if(request != null){
            if(!this.requests.contains(request)){
                this.requests.add(request);
            }
            if(!this.equals(request.getRequester())){
                request.setRequester(this);
            }
        }
    }
    public void setFavorites(List<Favorite> favorites){
        this.favorites = favorites;
        for(Favorite favorite: favorites){
            if(!this.equals(favorite.getOwner())){
                favorite.setOwner(this);
            }
        }
    }
    public void addFavorite(Favorite favorite){
        if(favorite != null){
            if(!this.favorites.contains(favorite)){
                this.favorites.add(favorite);
            }
            if(!this.equals(favorite.getOwner())){
                favorite.setOwner(this);
            }
        }
    }
}