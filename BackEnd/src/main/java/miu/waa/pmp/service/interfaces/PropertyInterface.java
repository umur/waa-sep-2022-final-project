package miu.waa.pmp.service.interfaces;



import miu.waa.pmp.models.Property;

import java.util.List;

public interface PropertyInterface {

    void save(Property p);

    List<Property> findByPrice(int price);
    List<Property> findByPriceGreaterThan(int minPrice);
    public List<Property> findByCategoryNameAndPriceLessThan(String categoryName, int maxPrice);
    public List<Property> findByNameContaining(String keyword);



}
