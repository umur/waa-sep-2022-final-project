package miu.waa.pmp.repository;

import miu.waa.pmp.models.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepo extends CrudRepository<Category, Integer> {

    List<Category> findAll();

}
