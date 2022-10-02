package edu.miu.waa.propertymangement.security;

import edu.miu.waa.propertymangement.dto.CreateUserRequest;
import edu.miu.waa.propertymangement.entity.Role;
import edu.miu.waa.propertymangement.entity.User;
import edu.miu.waa.propertymangement.exceptions.UserNotFoundException;
import edu.miu.waa.propertymangement.repo.RoleRepo;
import edu.miu.waa.propertymangement.repo.UserRepo;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.RoleResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;
import java.util.*;

@Service
@Slf4j
@AllArgsConstructor
@RequiredArgsConstructor
public class KeyCloakAdminClientService {
    @Value("${keycloak.realm}")
    public String realm;

    @Value("${keycloak.resource}")
    public String clientID;

    @Autowired
    private KeyCloakProvider kcProvider;

    @Autowired
    private  UserRepo userRepo;

    @Autowired
    private  RoleRepo roleRepo;


    public KeyCloakAdminClientService(KeyCloakProvider keycloakProvider) {
        this.kcProvider = keycloakProvider;
    }
    public Response createKeycloakUser(CreateUserRequest user) {
        UsersResource usersResource = kcProvider.getInstance().realm(realm).users();
        CredentialRepresentation credentialRepresentation = createPasswordCredentials(user.getPassword());

        UserRepresentation kcUser = new UserRepresentation();
        kcUser.setUsername(user.getEmail());
        kcUser.setCredentials(Collections.singletonList(credentialRepresentation));
        kcUser.setFirstName(user.getFirstName());
        kcUser.setLastName(user.getLastName());
        kcUser.setEmail(user.getEmail());
        kcUser.setEnabled(true);
        kcUser.setEmailVerified(false);

        Response response = usersResource.create(kcUser);

        if (response.getStatus() == 201) {

            try {
                String createdUserId = CreatedResponseUtil.getCreatedId(response);
                UserResource userFromKC = kcProvider.getInstance().realm(realm).users().get(createdUserId);
                List<RoleRepresentation> roleToAdd = new LinkedList<>();
                var roleResource = kcProvider.getInstance()
                        .realm(realm)
                        .clients()
                        .get(clientID)
                        .roles();

                RealmResource realmResource = kcProvider.getInstance().realm(realm);
                RoleRepresentation roleRepresentation = realmResource.roles().get(user.getRole()).toRepresentation();

                userFromKC.roles().realmLevel().add(Arrays.asList(roleRepresentation));


                // Save to user Table
                User userEntity = new User();
                userEntity.setId(UUID.fromString(createdUserId));
                userEntity.setEmail(user.getEmail());
                userEntity.setFirstName(user.getFirstName());
                userEntity.setLastName(user.getLastName());
                userEntity.setActive(true);

                Role role = roleRepo.findByRole(user.getRole());
                Set<Role> roles = new HashSet<>();
                roles.add(role);

                userEntity.setRoles(roles);
                userRepo.save(userEntity);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        log.info(response.toString());
        return response;
    }

    private static CredentialRepresentation createPasswordCredentials(String password) {
        CredentialRepresentation passwordCredentials = new CredentialRepresentation();
        passwordCredentials.setTemporary(false);
        passwordCredentials.setType(CredentialRepresentation.PASSWORD);
        passwordCredentials.setValue(password);
        return passwordCredentials;
    }

    public void updateUserStatus(String userId, boolean isActive) {
        Optional<User> user = userRepo.findById(UUID.fromString(userId));
        if (user.isPresent()) {
            User u = user.get();
            u.setActive(isActive);

            try {
                var userResource = kcProvider.getInstance().realm(realm).users().get(userId);

                var userPresentation = userResource.toRepresentation();
                userPresentation.setEnabled(isActive);
                userResource.update(userPresentation);

                userRepo.save(u);
                return;
            } catch (Exception ex) {
                log.error(ex.getMessage());
                throw ex;

            }

        }
        log.error("User not found for update");
        throw new UserNotFoundException(userId);
    }

    public void resetPasswordEmailSend(String userId) {
        Optional<User> user = userRepo.findById(UUID.fromString(userId));
        if (user.isPresent()) {

            try {
                var userResource = kcProvider.getInstance().realm(realm).users().get(userId);
                var userPresentation = userResource.toRepresentation();
                userResource.resetPasswordEmail();

                return;
            } catch (Exception ex) {
                log.error(ex.getMessage());
                throw ex;

            }

        }
        log.error("User not found for update");
        throw new UserNotFoundException(userId);
    }

}

