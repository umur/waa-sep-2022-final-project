package com.cs545.backend.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link com.cs545.backend.entity.User} entity
 */
@Data
public class UserDto implements Serializable {
    private final Long id;
    private final String username;
    private final String email;
}