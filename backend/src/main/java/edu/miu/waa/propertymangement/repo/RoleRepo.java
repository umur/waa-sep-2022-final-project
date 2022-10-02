package edu.miu.waa.propertymangement.repo;

import edu.miu.waa.propertymangement.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RoleRepo extends CrudRepository<Role, UUID> {
    public Role findByRole(String role);

}
