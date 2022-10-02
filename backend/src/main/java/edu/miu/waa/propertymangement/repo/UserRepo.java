package edu.miu.waa.propertymangement.repo;

import edu.miu.waa.propertymangement.entity.Role;
import edu.miu.waa.propertymangement.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepo extends CrudRepository<User, UUID> {
    User findByEmail(String email);

//    List<User> findTop10ByRoleEqualsOrderByAccountCreatedAtDesc(Role role);
}
