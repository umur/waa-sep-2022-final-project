package com.cs545.backend.mapper;

import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.entity.Customer;
import org.mapstruct.Mapper;

@Mapper
public interface CustomerMapper extends BaseMapper<RequestDto.CustomerDto, Customer> {
}
