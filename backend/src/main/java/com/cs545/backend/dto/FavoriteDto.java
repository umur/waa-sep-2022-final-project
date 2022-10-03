package com.cs545.backend.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 * A DTO for the {@link com.cs545.backend.entity.Favorite} entity
 */
@Data
public class FavoriteDto implements Serializable {
    private final Long id;
    private final String name;
    private final List<PropertyDto1> properties;

    /**
     * A DTO for the {@link com.cs545.backend.entity.Property} entity
     */
    @Data
    public static class PropertyDto1 implements Serializable {
        private final Long id;
        private final int price;
        private final int numberOfRooms;
        private final int size;
        private final int numberOfBathrooms;
        private final int year;
        private final int views;
        private final LocalDateTime createdAt;
        private final LocalDateTime updatedAt;
        private final List<String> photos;
    }
}