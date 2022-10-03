package com.cs545.backend.repository;

import com.cs545.backend.entity.Favorite;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteRepo extends CrudRepository<Favorite, Long> {
    Optional<Favorite> findByNameAndAndOwner_Id(String name, Long ownerId);
}
