package com.cs545.backend.mapper;

import java.util.List;

public interface BaseMapper<Dto, Entity> {
    Dto toDto(Entity entity);
    Entity toEntity(Dto dto);
    List<Dto> toDto(List<Entity> entities);
    List<Entity> toEntity(List<Dto> dtos);
}
