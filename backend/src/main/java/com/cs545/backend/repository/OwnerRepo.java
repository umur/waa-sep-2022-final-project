package com.cs545.backend.repository;

import com.cs545.backend.entity.Owner;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface OwnerRepo extends PagingAndSortingRepository<Owner, Long> {
}
