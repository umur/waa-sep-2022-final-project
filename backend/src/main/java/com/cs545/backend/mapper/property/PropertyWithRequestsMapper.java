package com.cs545.backend.mapper.property;

import com.cs545.backend.dto.property.PropertyWithRequestsDto;
import com.cs545.backend.entity.Property;
import com.cs545.backend.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper
public interface PropertyWithRequestsMapper extends BaseMapper<PropertyWithRequestsDto, Property> {
}
