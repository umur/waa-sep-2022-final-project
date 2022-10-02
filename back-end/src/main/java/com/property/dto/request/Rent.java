package com.property.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Rent {

    private Double amount;

    private LocalDate rentEndDate;

}
