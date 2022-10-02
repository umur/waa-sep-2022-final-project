package edu.miu.waa.propertymangement.repo;

import edu.miu.waa.propertymangement.entity.CustomerRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CustomerRequestRepo extends CrudRepository<CustomerRequest, UUID> {
}
