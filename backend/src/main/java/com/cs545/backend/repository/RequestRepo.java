package com.cs545.backend.repository;

import com.cs545.backend.entity.Request;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepo extends CrudRepository<Request, Long> {
}
