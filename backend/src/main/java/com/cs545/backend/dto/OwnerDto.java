package com.cs545.backend.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class OwnerDto implements Serializable {
    private final Long id;
    private final String username;
    private final String email;
}
