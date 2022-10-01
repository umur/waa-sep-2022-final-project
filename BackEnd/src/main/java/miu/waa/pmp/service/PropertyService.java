package miu.waa.pmp.service;


import miu.waa.pmp.dto.PropertyDto;
import miu.waa.pmp.dto.SimplePropertyInterface;
import miu.waa.pmp.models.Property;
import miu.waa.pmp.repository.PropertyRepo;
import miu.waa.pmp.service.interfaces.PropertyInterface;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class PropertyService implements PropertyInterface {

    private PropertyRepo productRepo;
    private ModelMapper modelMapper;

    public PropertyService(PropertyRepo productRepo, ModelMapper modelMapper) {
        this.productRepo = productRepo;
        this.modelMapper = modelMapper;
    }
    @Override
    public void save(Property p) {
        productRepo.save(p);
    }

    @Override
    public List<Property> findByPrice(int price) {
        return productRepo.findAllByPriceGreaterThan(price);
    }

    @Override
    public List<Property> findByPriceGreaterThan(int minPrice) {
        return productRepo.findByPriceGreaterThan(minPrice);
    }

    @Override
    public List<Property> findByCategoryNameAndPriceLessThan(String categoryName, int maxPrice) {
        return productRepo.findByCategoryNameAndPriceLessThan(categoryName,maxPrice);
    }

    @Override
    public List<Property> findByNameContaining(String keyword) {
        return productRepo.findByNameContaining(keyword);
    }

    public Property createProperty(Property property) {
        return productRepo.save(property);
    }

    public List<PropertyDto> findAll() {
        List<Property> propertyEntities = productRepo.findByOrderByIdDesc();
        List<PropertyDto> productDtos = new ArrayList<>();
         propertyEntities.stream()
                .map(pe ->productDtos.add(modelMapper.map(pe, PropertyDto.class)))
                .collect(Collectors.toList());
        return productDtos;
    }

    public Property findPropertyById(int id) {
        return productRepo.findById(id).orElseGet(null);
    }

    public Property updateProperty(Property property) {
        return productRepo.save(property);
    }
    public void deleteProperty(int id) {
       Optional<Property> product = productRepo.findById(id);
       if (product.isPresent())
           productRepo.delete(product.orElseGet(null));
    }


    public List<SimplePropertyInterface> getSimplifiedPropertyInfo() {
        //return productRepo.fetchSimpleProperty();
        return null; //productRepo.fetchSimplePropertyInterface();
    }

    public List<Property> findByCategoryName(String name) {
        return productRepo.findByCategoryName(name);
    }

    public List<Property> findByRented(boolean rented) {
      return productRepo.findByRented(rented);
    }

    public void updateRented(int id, boolean rented) {
        productRepo.updateRented(id, rented);

    }
}
