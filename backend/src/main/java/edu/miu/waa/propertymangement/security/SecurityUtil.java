package edu.miu.waa.propertymangement.security;

import lombok.extern.slf4j.Slf4j;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.AccessToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.security.Principal;

@Slf4j
public class SecurityUtil {
    public static AccessToken getKeyCloakAccessToken() {
        KeycloakAuthenticationToken authentication =
                (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        Principal principal = (Principal) authentication.getPrincipal();

        String userIdByToken = "";

        if (principal instanceof KeycloakPrincipal) {
            KeycloakPrincipal<KeycloakSecurityContext> kPrincipal = (KeycloakPrincipal<KeycloakSecurityContext>) principal;
            AccessToken token = kPrincipal.getKeycloakSecurityContext().getToken();
            userIdByToken = token.getId() ;


            log.info("Token: " +userIdByToken+token.getId()+ " " + token.getEmail() + " "+token.getGivenName() + " "
                    + token.getFamilyName() + " " + token.getSubject());

            return token;
        }
        return null;
    }
}
