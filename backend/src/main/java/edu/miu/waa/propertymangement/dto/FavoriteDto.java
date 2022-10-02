package edu.miu.waa.propertymangement.dto;

import edu.miu.waa.propertymangement.entity.FavouriteList;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteDto{
    private FavouriteList favouriteList;
    private  PropertyDto propertyDto;

}

