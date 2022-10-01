package miu.waa.pmp.controllers;

import miu.waa.pmp.dto.CategoryDto;
import miu.waa.pmp.models.Category;
import miu.waa.pmp.service.CategoryService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@RequestMapping("categories")
@CrossOrigin
public class CategoryController {
    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    
    @GetMapping
    public List<CategoryDto> getCategories() {
        return this.categoryService.findAll();
    }
    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable int id) {
        return this.categoryService.findCategoryById(id);
    }

    @PostMapping
    public Category createCategory(@RequestBody Category category) {
        return this.categoryService.createCategory(category);
    }
    @PutMapping
    public Category updateCategory(@RequestBody Category category) {
        return this.categoryService.updateCategory(category);
    }
}
