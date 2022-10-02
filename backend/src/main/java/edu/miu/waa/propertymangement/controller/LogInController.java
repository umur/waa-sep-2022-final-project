package edu.miu.waa.propertymangement.controller;

import edu.miu.waa.propertymangement.dto.LogInRequest;
import edu.miu.waa.propertymangement.security.KeyCloakAdminClientService;
import edu.miu.waa.propertymangement.security.KeyCloakProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.AccessTokenResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/auth")
@CrossOrigin
public class LogInController {

    private final KeyCloakProvider keyCloakProvider;

    private final KeyCloakAdminClientService keyCloakAdminClientService;

    @PostMapping
    public ResponseEntity<?> logIn(@RequestBody LogInRequest logInRequest) {
        Keycloak keycloak = keyCloakProvider.newKeycloakBuilderWithPasswordCredentials(logInRequest.getUserName(),
                logInRequest.getPassword()).build();

        AccessTokenResponse accessTokenResponse = null;
        try {
            accessTokenResponse = keycloak.tokenManager().getAccessToken();
            return ResponseEntity.status(HttpStatus.OK).body(accessTokenResponse);
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

}
