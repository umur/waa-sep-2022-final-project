package com.cs545.backend.mapper;

import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.entity.Request;
import org.mapstruct.Mapper;

@Mapper
public interface RequestMapper extends BaseMapper<RequestDto, Request> {
}
