package miu.waa.pmp.service.interfaces;


import miu.waa.pmp.models.Category;

import java.util.List;

public interface CategoryInterface {

    void save(Category category);
    List<Category> findByName(String name);

}
