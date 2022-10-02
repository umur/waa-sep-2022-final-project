package com.property.controller;

import com.property.dto.request.EmailRequest;
import com.property.domain.Role;
import com.property.dto.request.LoginRequest;
import com.property.dto.request.PasswordRequest;
import com.property.dto.request.UserRegistrationRequest;
import com.property.dto.response.UserRegistrationResponse;
import com.property.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/uaa")
@CrossOrigin
public class UaaController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        var loginResponse = userService.login(loginRequest);
        return ResponseEntity.ok().body(loginResponse);
    }

    @PostMapping("/signup")
    public ResponseEntity<UserRegistrationResponse> signup(@RequestBody UserRegistrationRequest userRegistration){
        UserRegistrationResponse registration = userService.save(userRegistration);
        return ResponseEntity.ok(registration);
    }




    @PostMapping("/forgot-password")
    public ResponseEntity<Void> processForgotPassword(@RequestBody EmailRequest request) {
        userService.processForgotPassword(request);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<UserRegistrationResponse> resetPassword(@RequestBody PasswordRequest passwordRequest, HttpServletRequest request) {
        UserRegistrationResponse res = userService.resetPassword(passwordRequest, request);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/change-password/{id}")
    public ResponseEntity<?> changePassword(@RequestBody PasswordRequest passwordRequest, @PathVariable long id) {
        UserRegistrationResponse res = userService.changePassword(passwordRequest, id);
        return ResponseEntity.ok(res);

    }
}
