package com.cs545.backend.service.impl;

import com.cs545.backend.dto.FavoriteDto;
import com.cs545.backend.entity.Customer;
import com.cs545.backend.entity.Favorite;
import com.cs545.backend.mapper.FavoriteMapper;
import com.cs545.backend.repository.FavoriteRepo;
import com.cs545.backend.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavoriteServiceImpl implements FavoriteService {
    private final FavoriteRepo favoriteRepo;

    private final FavoriteMapper favoriteMapper;

    @Override
    public Optional<FavoriteDto> getByFavoriteListName(String name, Long userId) {
        return favoriteRepo
                .findByNameAndAndOwner_Id(name, userId)
                .map(favoriteMapper::toDto);
    }

    @Override
    public FavoriteDto addToFavoriteList(Customer customer, FavoriteDto favoriteDto) {
        Favorite favorite = favoriteMapper.toEntity(favoriteDto);
        int index = customer.getFavorites().indexOf(favorite);
        if(index != -1){
            Favorite foundFavorite = customer.getFavorites().get(index);
            foundFavorite.getProperties().addAll(favorite.getProperties());
            return favoriteMapper.toDto(foundFavorite);
        }
        customer.addFavorite(favorite);
        return favoriteMapper.toDto(favorite);
    }

    @Override
    public List<FavoriteDto> getUserFavoriteList(Customer customer) {
        return favoriteMapper.toDto(customer.getFavorites());
    }
}
