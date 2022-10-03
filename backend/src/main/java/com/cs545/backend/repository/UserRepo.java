package com.cs545.backend.repository;

import com.cs545.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    Optional<User> getUserByEmailOrUsername(String email, String username);

    Optional<User> getUserByAuthId(String authId);
}
