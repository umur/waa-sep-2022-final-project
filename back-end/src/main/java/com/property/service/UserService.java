package com.property.service;

import com.property.dto.request.*;
import com.property.domain.Role;
import com.property.dto.response.LoginResponse;
import com.property.dto.response.UserRegistrationResponse;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService extends CrudService<UserRegistrationRequest, UserRegistrationResponse, Long>{

    LoginResponse login(LoginRequest loginRequest);

    UserRegistrationResponse findByEmail(String email);

    List<UserRegistrationResponse> findTop10RecentTenants();

    UserUpdateDto update(Long id, UserUpdateDto userUpdateDto);

    void userIsActive(long id);

    void processForgotPassword(EmailRequest request);

    UserRegistrationResponse resetPassword(PasswordRequest passwordRequest, HttpServletRequest request);

    UserRegistrationResponse changePassword(PasswordRequest password, Long id);

}
