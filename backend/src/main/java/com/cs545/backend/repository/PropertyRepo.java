package com.cs545.backend.repository;

import com.cs545.backend.entity.Owner;
import com.cs545.backend.entity.Property;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Repository
public interface PropertyRepo extends PagingAndSortingRepository<Property, Long> {
    @Query("select p from Property p join Request r on r.property = p where r.id = :requestId")
    Property findByRequestId(long requestId);

    Page<Property> findAllByOwner(Owner owner, Pageable pageable);
    @Query("select count (p) as count, function('date_format', max (p.createdAt), '%m') as month from Property p where p.createdAt >= :startDate group by function('date_format', '%m') ")
    List<Map<String, Object>> findAllByCreatedAtGreaterThanEqual(LocalDateTime startDate);

    @Query("select count (p) as count, function('date_format', max (p.createdAt), '%m') as month from Property p where p.createdAt >= :startDate and p.owner.id = :ownerId group by function('date_format', '%m') ")
    List<Map<String, Object>> findAllByCreatedAtGreaterThanEqual(LocalDateTime startDate, long ownerId);
}
