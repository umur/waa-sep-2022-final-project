package com.cs545.backend.controller;

import com.cs545.backend.dto.OwnerDto;
import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.cs545.backend.utility.Utility.getPageable;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    private final UserService userService;

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return ResponseHelper.successResponse();
    }

    @GetMapping("/customers")
    public ResponseEntity<List<RequestDto.CustomerDto>> getCustomers(@RequestParam(defaultValue = "0") int pageNum, @RequestParam(defaultValue = "10") int pageSize, @RequestParam(defaultValue = "id") String sortBy){

        return ResponseHelper.successResponse(userService.getCustomers(getPageable(pageNum, pageSize, sortBy)));
    }

    @GetMapping("/owner")
    public ResponseEntity<List<OwnerDto>> getOwners(@RequestParam(defaultValue = "0") int pageNum, @RequestParam(defaultValue = "10") int pageSize, @RequestParam(defaultValue = "id") String sortBy){
        return ResponseHelper.successResponse(userService.getOwners(getPageable(pageNum, pageSize, sortBy)));
    }
}
