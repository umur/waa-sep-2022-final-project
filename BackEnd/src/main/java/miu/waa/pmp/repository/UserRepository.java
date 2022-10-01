package miu.waa.pmp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import miu.waa.pmp.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUserName(String username);
	List<User> findByRole(String role);
	Boolean existsByUserName(String username);

	Boolean existsByEmail(String email);
}
