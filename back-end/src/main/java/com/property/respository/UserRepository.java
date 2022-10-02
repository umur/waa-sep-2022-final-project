package com.property.respository;

import com.property.domain.Role;
import com.property.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);

    List<User> findTop10ByRoleEqualsOrderByAccountCreatedAtDesc(Role role);

}
