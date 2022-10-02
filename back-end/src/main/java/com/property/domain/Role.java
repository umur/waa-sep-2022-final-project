package com.property.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Role {
    LANDLORD, ADMIN, TENANT;

    @JsonCreator
    public static Role create(String value) {
        return Role.valueOf(value.toUpperCase());
    }
}
