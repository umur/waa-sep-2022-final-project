package com.cs545.backend.service;

import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.entity.Property;

public interface RequestService {
    public RequestDto create(RequestDto requestDto, Property property);
}
