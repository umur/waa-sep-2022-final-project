package miu.waa.pmp.controllers;

import miu.waa.pmp.dto.PropertyDto;
import miu.waa.pmp.dto.SimplePropertyInterface;
import miu.waa.pmp.models.Property;
import miu.waa.pmp.service.PropertyService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 4800)
@RestController
@RequestMapping("properties")
public class PropertyController {
    private PropertyService productService;
    HttpServletRequest request;
    public PropertyController(PropertyService productService,
                             HttpServletRequest request) {
        this.productService = productService;
        this.request =request;
    }

    @GetMapping
    public List<PropertyDto> getProperties() {
        return this.productService.findAll();
    }
    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable int id) {
        return this.productService.findPropertyById(id);
    }

    @GetMapping("/filter/category")
    public List<Property> findByCategoryNameAndLessThanPrice(@RequestParam String categoryName, @RequestParam int maxPrice) {
        return this.productService.findByCategoryNameAndPriceLessThan(categoryName, maxPrice);
    }
    @GetMapping("/filter/category/name")
    public List<Property> findByCategoryName(@RequestParam String name) {
        return this.productService.findByCategoryName(name);
    }
    @GetMapping("/filter/keyword")
    public List<Property> findByNameContaining(@RequestParam String keyword) {
        return this.productService.findByNameContaining(keyword);
    }
    @GetMapping("/filter/rented")
    public List<Property> findByRented(@RequestParam boolean rented) {
        return this.productService.findByRented(rented);
    }
    @PutMapping("/{id}/")
    public void updateRented(@PathVariable int id, @RequestBody boolean rented) {
        this.productService.updateRented(id, rented);
    }

    @GetMapping("simplified")
    public List<SimplePropertyInterface> getSimplifiedProperty() {
        return this.productService.getSimplifiedPropertyInfo();
    }
    @PostMapping()
    public Property createProperty(@RequestBody Property property) {
        return this.productService.createProperty(property);
    }
    @PutMapping
    public Property updateProperty(@RequestBody Property property) {
        return this.productService.updateProperty(property);
    }
}
