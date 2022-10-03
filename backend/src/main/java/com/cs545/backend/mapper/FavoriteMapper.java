package com.cs545.backend.mapper;

import com.cs545.backend.dto.FavoriteDto;
import com.cs545.backend.entity.Favorite;
import org.mapstruct.Mapper;

@Mapper
public interface FavoriteMapper extends BaseMapper<FavoriteDto, Favorite> {
}
