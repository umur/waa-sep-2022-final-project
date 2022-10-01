package miu.waa.pmp.repository;

import miu.waa.pmp.models.Category;
import miu.waa.pmp.models.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends CrudRepository<Message, Integer> {

    List<Message> findAll();
    List<Message> findByUser(int id);

}
