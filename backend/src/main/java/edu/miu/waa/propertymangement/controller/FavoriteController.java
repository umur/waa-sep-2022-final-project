package edu.miu.waa.propertymangement.controller;

import edu.miu.waa.propertymangement.dto.FavoriteDto;
import edu.miu.waa.propertymangement.dto.FavoriteRequestDto;
import edu.miu.waa.propertymangement.dto.PropertyDto;
import edu.miu.waa.propertymangement.service.FavoriteService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/favorite")
@AllArgsConstructor
@CrossOrigin
public class FavoriteController {
    private FavoriteService favouriteService;


    @GetMapping
    public List<PropertyDto> getFavoriteList() {
        return favouriteService.getFavoriteProperties();
    }

    @DeleteMapping("/{id}")
    public String deleteFavorite(@PathVariable String id) {
        favouriteService.deleteFavorite(UUID.fromString(id));
        return "success";
    }

    @PostMapping
    public FavoriteDto saveFavourite(@RequestBody FavoriteRequestDto favoriteRequestDto) {
        return favouriteService.saveFavorite(favoriteRequestDto.getPropertyId());
    }


}
