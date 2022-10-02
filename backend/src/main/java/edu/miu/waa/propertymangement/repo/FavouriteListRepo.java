package edu.miu.waa.propertymangement.repo;

import edu.miu.waa.propertymangement.dto.FavoriteDto;
import edu.miu.waa.propertymangement.entity.FavouriteList;
import edu.miu.waa.propertymangement.entity.Property;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface FavouriteListRepo extends CrudRepository<FavouriteList, UUID> {

    @Query("SELECT fav,p from FavouriteList as fav " +
            "left join  Property as p on fav.property.id=p.id" +
            " where  fav.customer.id=:userId")
    List<FavoriteDto> findAllByUserId(@Param("userId") UUID userId);

    List<FavouriteList> findAllByCustomer_Id(UUID customerId);


    @Query("SELECT fav FROM FavouriteList fav"+
            " where  fav.customer.id=:userId and fav.property.id=:propertyId")
    List<FavouriteList> findAllBy(@Param("userId") UUID userId,@Param("propertyId") UUID propertyId);

}
