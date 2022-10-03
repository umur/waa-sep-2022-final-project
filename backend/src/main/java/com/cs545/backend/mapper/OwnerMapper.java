package com.cs545.backend.mapper;

import com.cs545.backend.dto.OwnerDto;
import com.cs545.backend.entity.Owner;
import org.mapstruct.Mapper;

@Mapper
public interface OwnerMapper extends BaseMapper<OwnerDto, Owner> {
}
