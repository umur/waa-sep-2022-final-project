package edu.miu.waa.propertymangement.controller;

import edu.miu.waa.propertymangement.dto.CreateUserRequest;
import edu.miu.waa.propertymangement.dto.LogInRequest;
import edu.miu.waa.propertymangement.dto.RoleDto;
import edu.miu.waa.propertymangement.dto.UserDto;
import edu.miu.waa.propertymangement.entity.User;
import edu.miu.waa.propertymangement.security.KeyCloakAdminClientService;
import edu.miu.waa.propertymangement.security.KeyCloakProvider;
import edu.miu.waa.propertymangement.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.AccessToken;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.IDToken;
import org.springframework.context.annotation.Role;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Path;
import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin
@Slf4j
public class UserController {
    private final UserService userService;

    private final KeyCloakAdminClientService keyCloakAdminClientService;

    // access by user whose role is owner
//    @RolesAllowed({"Owner", "Customer"})
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUser(@PathVariable String userId) {
        return ResponseEntity.ok(userService.getUser(userId));
    }

    // access by user whose role is admin
//    @RolesAllowed("Admin")
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUser() {
        return ResponseEntity.ok(userService.getAllUser());
    }

    @PostMapping
    public void createUser(@RequestBody CreateUserRequest createUserRequest) {
        keyCloakAdminClientService.createKeycloakUser(createUserRequest);
    }

    @GetMapping("/roles")
    public ResponseEntity<List<RoleDto>> getRoles() {
        return ResponseEntity.ok(userService.getRoles());
    }


    @PatchMapping("/{id}/activate")
    public ResponseEntity<?> activateUser(@PathVariable String id) {
        userService.activateUser(id);
        return ResponseEntity.ok(id);
    }

    @PatchMapping("/{id}/deactivate")
    public ResponseEntity<?> deActivateUser(@PathVariable String id) {
        userService.deActivateUser(id);
        return ResponseEntity.ok(id);
    }

    @PatchMapping("/{id}/resetpassword")
    public void resetPasswordEmail(@PathVariable String id) {
        keyCloakAdminClientService.resetPasswordEmailSend(id);
    }


}
