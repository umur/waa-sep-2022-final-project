package com.property.respository;

import com.property.domain.PasswordResetToken;
import com.property.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface PasswordResetTokenRepository extends CrudRepository<PasswordResetToken, Long> {
//    User findByEmail(String email);
    PasswordResetToken findByUserId(Long userId);
    PasswordResetToken findByToken(String token);
}
