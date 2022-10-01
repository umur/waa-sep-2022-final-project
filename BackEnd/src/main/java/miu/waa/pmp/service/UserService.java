package miu.waa.pmp.service;

import miu.waa.pmp.dto.CategoryDto;
import miu.waa.pmp.dto.UserDto;
import miu.waa.pmp.models.Category;
import miu.waa.pmp.models.User;
import miu.waa.pmp.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    UserRepository userRepository;
    private ModelMapper modelMapper;

    public UserService(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public User getLoggedInUser() {
        User activeUser = new User();
        Object principal = SecurityContextHolder. getContext(). getAuthentication(). getPrincipal();
        if (principal instanceof UserDetails) {
            activeUser.setUserName(((UserDetails)principal).getUsername());
        } else {
            activeUser.setUserName(principal.toString());
        }
        return activeUser;
    }

    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserDto> userDtos = new ArrayList<>();
        users.stream()
                .map(user ->userDtos.add(modelMapper.map(user, UserDto.class)))
                .collect(Collectors.toList());
        return userDtos;
    }

    public User getUserById(int id) {
        return  userRepository.findById(id).orElseGet(null);
    }

    public List<User> getUserByRole(String role) {
       return userRepository.findByRole(role);
    }

    public User saveUser(User user) {
       return userRepository.save(user);
    }
}
