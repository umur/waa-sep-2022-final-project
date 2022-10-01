package miu.waa.pmp.service;

import miu.waa.pmp.dto.CategoryDto;
import miu.waa.pmp.models.Category;
import miu.waa.pmp.repository.CategoryRepo;
import miu.waa.pmp.service.interfaces.CategoryInterface;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class CategoryService implements CategoryInterface {

    private CategoryRepo categoryRepo;
    private ModelMapper modelMapper;

    public CategoryService(CategoryRepo categoryRepo, ModelMapper modelMapper) {
        this.categoryRepo = categoryRepo;
        this.modelMapper = modelMapper;
    }

    @Override
    public void save(Category category) {
        categoryRepo.save(category);
    }

    @Override
    public List<Category> findByName(String name) {
        return null;
    }

    public Category createCategory(Category category) {
        return categoryRepo.save(category);
    }
   // @PreAuthorize("hasRole(ADMIN)")
    public List<CategoryDto> findAll() {
        List<Category> categoryEntities = categoryRepo.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();
        categoryEntities.stream()
                .map(ce ->categoryDtos.add(modelMapper.map(ce, CategoryDto.class)))
                .collect(Collectors.toList());
        return categoryDtos;
    }
  public List<CategoryDto> findAllActive() {
        List<Category> categoryEntities = categoryRepo.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();
        categoryEntities.stream()
                .map(ce ->categoryDtos.add(modelMapper.map(ce, CategoryDto.class)))
                .collect(Collectors.toList());
        return categoryDtos;
    }

    public Category findCategoryById(int id) {
        return categoryRepo.findById(id).orElseGet(null);
    }

    public Category updateCategory(Category category) {
        return categoryRepo.save(category);
    }

    public void deleteCategory(int id) {
       Optional<Category> category = categoryRepo.findById(id);
       if (category.isPresent())
           categoryRepo.delete(category.orElseGet(null));
    }

}
