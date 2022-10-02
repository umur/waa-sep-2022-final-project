package edu.miu.waa.propertymangement.service.impl;

import edu.miu.waa.propertymangement.dto.RoleDto;
import edu.miu.waa.propertymangement.dto.UserDto;
import edu.miu.waa.propertymangement.entity.Role;
import edu.miu.waa.propertymangement.entity.User;
import edu.miu.waa.propertymangement.repo.RoleRepo;
import edu.miu.waa.propertymangement.repo.UserRepo;
import edu.miu.waa.propertymangement.security.KeyCloakAdminClientService;
import edu.miu.waa.propertymangement.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final RoleRepo roleRepo;

    private final UserRepo userRepo;

    private final ModelMapper modelMapper;

    private final KeyCloakAdminClientService keyCloakAdminClientService;


    @Override
    public User getUser(String id) {
        User user = new User();
        user.setId(UUID.fromString(id));
        user.setFirstName("win");
        user.setLastName("aung");
        return user;
    }

    @Override
    public List<UserDto> getAllUser() {
        var users = userRepo.findAll();
        var usersDto = new ArrayList<UserDto>();
        for (User user : users) {
            UserDto userDto = modelMapper.map(user, UserDto.class);
            usersDto.add(userDto);
        }
        return usersDto;
    }

    @Override
    public List<RoleDto> getRoles() {
        List<RoleDto> roleDtos = new ArrayList<>();
        for (Role role : roleRepo.findAll()) {
            RoleDto dto = modelMapper.map(role, RoleDto.class);
            roleDtos.add(dto);
        }
        return  roleDtos;
    }

    @Override
    public void activateUser(String userId) {
        keyCloakAdminClientService.updateUserStatus(userId, true);
    }

    @Override
    public void deActivateUser(String userId) {
        keyCloakAdminClientService.updateUserStatus(userId, false);
    }
}
