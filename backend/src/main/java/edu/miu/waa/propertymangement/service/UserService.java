package edu.miu.waa.propertymangement.service;

import edu.miu.waa.propertymangement.dto.RoleDto;
import edu.miu.waa.propertymangement.dto.UserDto;
import edu.miu.waa.propertymangement.entity.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    User getUser(String id);

    List<UserDto> getAllUser();

    List<RoleDto> getRoles();

    void activateUser(String userId);

    void deActivateUser(String userId);
}
