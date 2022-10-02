package edu.miu.waa.propertymangement.service;


import edu.miu.waa.propertymangement.dto.FavoriteDto;
import edu.miu.waa.propertymangement.dto.PropertyDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

public interface FavoriteService {


    public FavoriteDto saveFavorite(String propertyId);

    public List<PropertyDto> getFavoriteProperties();


    public void deleteFavorite(UUID id);
}
