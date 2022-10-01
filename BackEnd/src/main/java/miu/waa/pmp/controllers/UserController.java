package miu.waa.pmp.controllers;

import miu.waa.pmp.dto.UserDto;
import miu.waa.pmp.models.User;
import miu.waa.pmp.repository.UserRepository;
import miu.waa.pmp.response.MessageResponse;
import miu.waa.pmp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.ServletContext;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 4800)
@RestController
@RequestMapping("/users")
@EnableWebMvc
public class UserController {
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
   // @PreAuthorize("isAuthenticated()")
    public List<UserDto> allAccess() {
        return userService.getAllUsers();
    }

    @GetMapping("/id")
   // @PreAuthorize("isAuthenticated()")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }
 @GetMapping("/role")
   // @PreAuthorize("isAuthenticated()")
    public List<User> getUserByRole(@PathVariable String role) {
        return userService.getUserByRole(role);
    }

    @PostMapping
    public User register(@RequestBody User user ) {
        return userService.saveUser(user);
    }
    @GetMapping("/greeting")
  //  @PreAuthorize("isAuthenticated()")
    public MessageResponse userAccess() {
        return new MessageResponse("Welcome! " + userService.getLoggedInUser().getUserName());
    }

}
