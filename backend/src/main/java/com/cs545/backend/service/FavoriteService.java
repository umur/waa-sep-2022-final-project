package com.cs545.backend.service;

import com.cs545.backend.dto.FavoriteDto;
import com.cs545.backend.entity.Customer;

import java.util.List;
import java.util.Optional;

public interface FavoriteService {

    Optional<FavoriteDto> getByFavoriteListName(String name, Long userId);

    FavoriteDto addToFavoriteList(Customer customer, FavoriteDto favoriteDto);

    List<FavoriteDto> getUserFavoriteList(Customer customer);
}
