package com.cs545.backend.config.impl;

import com.cs545.backend.config.AuthenticationFacade;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class AuthenticationFacadeImpl implements AuthenticationFacade {
    private final Collection<? extends GrantedAuthority> authorities;

    private AuthenticationFacadeImpl(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public static AuthenticationFacadeImpl getInstance() {
        return new AuthenticationFacadeImpl(SecurityContextHolder.getContext().getAuthentication().getAuthorities());
    }

    @Override
    public Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public boolean isAdminOrOwnerRole() {
        return authorities.stream()
                .anyMatch(r -> {
                    String authority = r.getAuthority();
                    return authority.equalsIgnoreCase("admin") || authority.equalsIgnoreCase("owner");
                });
    }

    public boolean isOwner() {
        return authorities.stream()
                .anyMatch(grantedAuthority -> grantedAuthority.getAuthority().equalsIgnoreCase("owner"));
    }


    public Object getDetails() {
        return SecurityContextHolder.getContext().getAuthentication().getDetails();
    }
}
