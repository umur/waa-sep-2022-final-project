package com.cs545.backend.service.impl;

import com.cs545.backend.dto.FavoriteDto;
import com.cs545.backend.dto.OwnerDto;
import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.entity.Customer;
import com.cs545.backend.entity.Owner;
import com.cs545.backend.entity.User;
import com.cs545.backend.mapper.CustomerMapper;
import com.cs545.backend.mapper.OwnerMapper;
import com.cs545.backend.repository.CustomerRepo;
import com.cs545.backend.repository.OwnerRepo;
import com.cs545.backend.repository.UserRepo;
import com.cs545.backend.service.FavoriteService;
import com.cs545.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;
    private final CustomerMapper customerMapper;
    private final OwnerMapper ownerMapper;
    private final FavoriteService favoriteService;
    private final CustomerRepo customerRepo;
    private final OwnerRepo ownerRepo;

    @Override
    public Optional<User> getByAuthId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Jwt jwt = (Jwt) authentication.getPrincipal();
        String id = jwt.getSubject();
        return userRepo.getUserByAuthId(id);
    }

    @Override
    public List<FavoriteDto> getUserFavoriteList() {
        Optional<User> user = getByAuthId();
        return user.map(foundUser -> {
            Customer customer = (Customer) foundUser;
            return favoriteService.getUserFavoriteList(customer);
        }).orElse(new ArrayList<>());
    }

    @Override
    public FavoriteDto addToFavoriteList(FavoriteDto favoriteDto) {
        Optional<User> user = getByAuthId();
        return user.map(foundUser -> {
            Customer customer = (Customer) foundUser;
            return favoriteService.addToFavoriteList(customer, favoriteDto);
        }).orElse(null);
    }

    @Override
    public void deleteUser(long id) {
        userRepo.deleteById(id);
    }

    @Override
    public List<RequestDto.CustomerDto> getCustomers(Pageable pageable) {
        Page<Customer> customers = customerRepo.findAll(pageable);

        if (customers.hasContent()) {
            return customers.getContent().stream().map(customerMapper::toDto).toList();
        }

        return new ArrayList<>();
    }

    @Override
    public List<OwnerDto> getOwners(Pageable pageable) {
        Page<Owner> owners = ownerRepo.findAll(pageable);

        if (owners.hasContent()) {
            return owners.getContent().stream().map(ownerMapper::toDto).toList();
        }

        return new ArrayList<>();
    }
}
