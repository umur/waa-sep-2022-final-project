package com.cs545.backend.service;

import com.cs545.backend.dto.FavoriteDto;
import com.cs545.backend.dto.OwnerDto;
import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.dto.UserDto;
import com.cs545.backend.entity.User;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface UserService {

    Optional<User> getByAuthId();

    List<FavoriteDto> getUserFavoriteList();

    FavoriteDto addToFavoriteList(FavoriteDto favoriteDto);
    void deleteUser(long id);

    List<RequestDto.CustomerDto> getCustomers(Pageable pageable);
    List<OwnerDto> getOwners(Pageable pageable);
}
