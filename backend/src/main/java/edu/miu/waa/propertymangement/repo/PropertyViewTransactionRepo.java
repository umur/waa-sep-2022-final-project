package edu.miu.waa.propertymangement.repo;

import edu.miu.waa.propertymangement.entity.PropertyViewTransaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PropertyViewTransactionRepo extends CrudRepository<PropertyViewTransaction, UUID> {
}
