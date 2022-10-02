package edu.miu.waa.propertymangement.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ApplicationRequestModel {

    private  String message;
    private String customer_id;
    private String owner_id;
    private String propertyId;

}
