package com.cs545.backend.repository;

import com.cs545.backend.entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public interface CustomerRepo extends PagingAndSortingRepository<Customer, Long> {
    @Query("select count (c) as count, function('date_format', max (c.createdAt), '%m') as month  from Customer c where c.createdAt >= :startDate group by function('date_format', '%m')")
    List<Map<String, Object>> findAllByCreatedAtGreaterThanEqual(LocalDateTime startDate);
}
