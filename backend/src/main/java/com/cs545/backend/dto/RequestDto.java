package com.cs545.backend.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 * A DTO for the {@link com.cs545.backend.entity.Request} entity
 */
@Data
public class RequestDto implements Serializable {
    private final Long id;
    private final String comment;
    private final CustomerDto requester;
    private final PropertyDto property;

    /**
     * A DTO for the {@link com.cs545.backend.entity.Customer} entity
     */
    @Data
    public static class CustomerDto implements Serializable {
        private final Long id;
        private final String username;
        private final String email;
    }

    /**
     * A DTO for the {@link com.cs545.backend.entity.Property} entity
     */
    @Data
    public static class PropertyDto implements Serializable {
        private final Long id;
        private final int price;
        private final int numberOfRooms;
        private final int size;
        private final int numberOfBathrooms;
        private final int year;
        private final int views;
        private final LocalDateTime createdAt;
        private final LocalDateTime updatedAt;
        private final AddressDto address;
        private final List<String> photos;

        /**
         * A DTO for the {@link com.cs545.backend.entity.Address} entity
         */
        @Data
        public static class AddressDto implements Serializable {
            private final Long id;
            private final String street;
            private final String city;
            private final String state;
            private final String country;
            private final int zip;
            private final LocalDateTime createdAt;
            private final LocalDateTime updatedAt;
        }
    }
}