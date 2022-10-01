package miu.waa.pmp.repository;

import miu.waa.pmp.models.Property;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepo extends CrudRepository<Property, Integer> {

    List<Property> findAllByPriceGreaterThan(int price);
    List<Property> findAll();
    List<Property> findByOrderByIdDesc();
    List<Property> findByPriceGreaterThan(int minPrice);
    List<Property> findAllByActive(boolean active);

    List<Property> findByCategoryNameAndPriceLessThan(String categoryName, int maxPrice);

    List<Property> findByNameContaining(String keyword);
    //using DTO projection

    List<Property> findByCategoryName(String name);
    List<Property> findByRented(boolean rented);

    @Query("update Property p set p.rented = :rented where p.id = :id")
    void updateRented(int id, boolean rented);
    List<Property> findByPriceBetween(int price1, int price2);
}
