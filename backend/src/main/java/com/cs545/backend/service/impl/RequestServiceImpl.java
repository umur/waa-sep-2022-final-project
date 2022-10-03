package com.cs545.backend.service.impl;

import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.dto.UserDto;
import com.cs545.backend.entity.Customer;
import com.cs545.backend.entity.Property;
import com.cs545.backend.entity.Request;
import com.cs545.backend.entity.User;
import com.cs545.backend.mapper.RequestMapper;
import com.cs545.backend.repository.RequestRepo;
import com.cs545.backend.service.RequestService;
import com.cs545.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {

    private final RequestRepo requestRepo;
    private final RequestMapper requestMapper;
    private final UserService userService;

    @Override
    public RequestDto create(RequestDto requestDto, Property property) {
        //TODO:: send email to property owner
        Optional<User> user = userService.getByAuthId();

        return user.map(foundUser -> {
            Request request = requestMapper.toEntity(requestDto);
            request.setProperty(property);
            request.setRequester((Customer) foundUser);
            return requestMapper.toDto(requestRepo.save(request));
        }).get();
    }
}
