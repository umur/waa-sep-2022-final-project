package com.property.exception.custom;

public class PropertyAlreadyRented extends RuntimeException{

    public PropertyAlreadyRented(String message){
        super(message);
    }
}
