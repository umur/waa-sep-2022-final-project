package com.property.controller;

import com.property.dto.request.EmailRequest;
import com.property.dto.request.UserRegistrationRequest;
import com.property.dto.request.UserUpdateDto;
import com.property.dto.response.UserRegistrationResponse;
import com.property.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/top10-recent-tenants")
    public ResponseEntity<List<UserRegistrationResponse>> findRecentTenant(){
        List<UserRegistrationResponse> recentTenants = userService.findTop10RecentTenants();
        return ResponseEntity.ok(recentTenants);
    }

    @GetMapping
    public ResponseEntity<?> get(@RequestParam(required = false) String email){
        if(email==null){
            List<UserRegistrationResponse> users = userService.findAll();
            return ResponseEntity.ok(users);
        }
        return ResponseEntity.ok(userService.findByEmail(email));
    }

    @GetMapping("{id}")
    public ResponseEntity<UserRegistrationResponse> getById(@PathVariable Long id){
        UserRegistrationResponse response = userService.findById(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserUpdateDto> update(@RequestBody UserUpdateDto userUpdateDto, @PathVariable Long id){
        userUpdateDto = userService.update(id,userUpdateDto);
        return ResponseEntity.ok(userUpdateDto);
    }

    @PostMapping("/user-active/{id}")
    public ResponseEntity<Void> updateUserStatus(@PathVariable Long id) {
        userService.userIsActive(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
