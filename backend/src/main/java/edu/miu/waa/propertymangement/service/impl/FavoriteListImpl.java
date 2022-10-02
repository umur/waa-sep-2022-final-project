package edu.miu.waa.propertymangement.service.impl;

import edu.miu.waa.propertymangement.dto.FavoriteDto;
import edu.miu.waa.propertymangement.dto.PropertyDto;
import edu.miu.waa.propertymangement.entity.FavouriteList;
import edu.miu.waa.propertymangement.entity.Property;
import edu.miu.waa.propertymangement.entity.User;
import edu.miu.waa.propertymangement.repo.FavouriteListRepo;
import edu.miu.waa.propertymangement.repo.PropertyRepo;
import edu.miu.waa.propertymangement.repo.UserRepo;
import edu.miu.waa.propertymangement.security.SecurityUtil;
import edu.miu.waa.propertymangement.service.FavoriteService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class FavoriteListImpl implements FavoriteService {

    private FavouriteListRepo favouriteListRepo;
    private ModelMapper modelMapper;
    private PropertyRepo propertyRepo;
    private UserRepo userRepo;

    @Override
    public FavoriteDto saveFavorite(String propertyId) {
        //        TODO GET LOGGED USER ID FROM KEYCLOAK
        String userID = SecurityUtil.getKeyCloakAccessToken().getSubject();
        Optional<Property> property = propertyRepo.findById(UUID.fromString(propertyId));
        Optional<User> user = userRepo.findById(UUID.fromString(userID));
        if(property.isPresent() && user.isPresent()){
            FavouriteList favouriteList = new FavouriteList();
            favouriteList.setCustomer(user.get());
            favouriteList.setProperty(property.get());

            FavouriteList newFavorite = favouriteListRepo.save(favouriteList);
        }
        return null;
    }

    @Override
    public List<PropertyDto> getFavoriteProperties() {
        //        TODO GET LOGGED USER ID FROM KEYCLOAK
        String userID = SecurityUtil.getKeyCloakAccessToken().getSubject();

        List<FavouriteList> favouriteLists = favouriteListRepo.findAllByCustomer_Id(UUID.fromString(userID));

        var favoiteIds = favouriteLists.stream().map((f -> f.getProperty().getId())).collect(Collectors.toList());

        Iterable<Property> properties = propertyRepo.findAllById(favoiteIds);
        List<PropertyDto> propertyDtos = new ArrayList<>();

        for (Property property : properties) {

            propertyDtos.add(modelMapper.map(property, PropertyDto.class));
        }

//        List<FavoriteDto> favoriteDtoList = new ArrayList<>();
//        List<FavoriteDto> favouriteList = favouriteListRepo.findAllByUserId(UUID.fromString(userID));
//        for (FavouriteList fav : favouriteList) {
//            FavoriteDto dto = new FavoriteDto();
//            dto.setPropertyDto(fav.getProperty();
//            fav.getCustomer();
//            favoriteDtoList.add(modelMapper.map(fav, FavoriteDto.class));
//        }
        return propertyDtos;
    }

    @Override
    public void deleteFavorite(UUID id) {
       var farvs= favouriteListRepo.findAllBy(UUID.fromString(SecurityUtil.getKeyCloakAccessToken().getSubject()),id);
        for (FavouriteList f:farvs){
                favouriteListRepo.deleteById(f.getId());
        };
    }
}
