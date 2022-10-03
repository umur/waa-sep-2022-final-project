package com.cs545.backend.dto.property;

import com.cs545.backend.entity.Request;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class PropertyWithRequestsDto implements Serializable {
    private long id;
    private List<Request> requests;
}
