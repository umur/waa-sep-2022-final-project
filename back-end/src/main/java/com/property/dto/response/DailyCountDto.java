package com.property.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class DailyCountDto {

    private LocalDate day;

    private Integer value;
}
