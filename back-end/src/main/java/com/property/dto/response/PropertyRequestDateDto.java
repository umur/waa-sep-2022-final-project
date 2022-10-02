package com.property.dto.response;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@EqualsAndHashCode
@AllArgsConstructor
public class PropertyRequestDateDto {

    private LocalDate createdAt;
    private Long id;

}
