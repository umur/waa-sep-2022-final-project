package edu.miu.waa.propertymangement.repo;

import edu.miu.waa.propertymangement.entity.Property;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Repository
public interface PropertyRepo extends CrudRepository<Property, UUID> {

    List<Property> findAllByRentedOrderByRentedDateDesc(@Param("rented") Boolean rented);

    @Query("SELECT p FROM Property as p where p.propertyType=:propertyType " +
            "and p.numberOfRooms=:numberOfRooms and p.homeType=:homeType and  " +
            "p.address like %:location% and p.rentAmount>=:rentAmount and p.rentAmount<=:rentAmount")
    List<Property> finalAllPropertyWithFilter(@Param("propertyType")String propertyType, @Param("numberOfRooms") Integer numberOfRooms
    , @Param("homeType") String homeType, @Param("location") String location, @Param("rentAmount") BigDecimal rentAmount);

    List<Property> findAllByIdIn(List<UUID> uuids);

//    List<Property> findAllByPropertyTypeContains(@Param("propertyType") String propertyType);
//
//    List<Property> findAllByDeleteIsFalse();
//
//    List<Property> findAllByNoOfBedRoom(int noOfBedRoom);
//
//    List<Property> findAllByAvailableIsTrue();
//
//
//    @Query("from Property p inner join PropertyRent pr on p.id=pr.property.id where p.landLord.id=:id and p.delete=false and pr.rentEndDate>=:now and pr.rentEndDate<=:then")
//    List<Property> findAllLeaseByLandLordAndDateRange(@Param("id") Long id, @Param("now") LocalDate now, @Param("then") LocalDate then, Pageable pageable);
//
//    List<Property> findAllByLandLordIdAndDeleteIsFalse(@Param("id") Long id);
//
////    @Query("select new com.property.dto.response.PropertyRequestDateDto(pr.createdAt,p.id) from Property p inner join PropertyRent pr on p.id=pr.property.id where p.delete=false and pr.createdAt>=:previous and pr.createdAt<=:now")
////    Set<PropertyRequestDateDto> findAllByRentedDateRange(@Param("previous") LocalDate previous, @Param("now") LocalDate now);
//
//
//    @Query("from Property p inner join PropertyRent pr on p.id=pr.property.id and pr.rentEndDate>=:now and p.delete=false")
//    List<Property> findAllRentedByDateRange(@Param("now") LocalDate now, Pageable pageable);
//
//
//    List<Property> findAllByAddress_StateAndAddress_City(String state, String city);
//
//    List<Property> findAllByAddress_State(String state);
//
//    List<Property> findAllByAddress_City(String city);

}
