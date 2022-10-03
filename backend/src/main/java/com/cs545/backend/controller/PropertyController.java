package com.cs545.backend.controller;

import com.cs545.backend.dto.RequestDto;
import com.cs545.backend.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.cs545.backend.dto.property.PropertyDto;
import com.cs545.backend.dto.property.PropertyWithRequestsDto;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import java.util.List;

import static com.cs545.backend.utility.Utility.getPageable;

@RestController
@RequestMapping("/properties")
@RequiredArgsConstructor
public class PropertyController {

    private final PropertyService propertyService;

    @PreAuthorize("hasRole('CUSTOMER')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/{id:[0-9]}/requests")
    public RequestDto create(@PathVariable Long id, @RequestBody RequestDto requestDto) {
        return propertyService.submitRequest(id, requestDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PropertyDto> fetchPropertyDetails(@PathVariable long id) {
        return ResponseHelper.successResponse(propertyService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<PropertyDto>> findAll(@RequestParam(defaultValue = "0") int pageNum, @RequestParam(defaultValue = "10") int pageSize, @RequestParam(defaultValue = "id") String sortBy) {
        return ResponseHelper.successResponse(propertyService.findAll(getPageable(pageNum, pageSize, sortBy)));
    }

    @GetMapping("/requests/{id}")
    public ResponseEntity<PropertyDto> fetchByRequestId(@PathVariable long id) {
        return ResponseHelper.successResponse(propertyService.findByRequestId(id));
    }

    @GetMapping("/requests")
    public ResponseEntity<List<PropertyWithRequestsDto>> fetchWithRequests(@RequestParam(defaultValue = "0") int pageNum, @RequestParam(defaultValue = "10") int pageSize, @RequestParam(defaultValue = "id") String sortBy) {
        return ResponseHelper.successResponse(propertyService.findWithRequests(getPageable(pageNum, pageSize, sortBy)));
    }

    @GetMapping("/owner/{id}")
    public ResponseEntity<List<PropertyDto>> fetchOwnerProperties(@RequestParam(defaultValue = "0") int pageNum, @RequestParam(defaultValue = "10") int pageSize, @RequestParam(defaultValue = "id") String sortBy, @PathVariable long id) {
        return ResponseHelper.successResponse(propertyService.findOwnerProperties(id, getPageable(pageNum, pageSize, sortBy)));
    }

    @PostMapping
    public ResponseEntity<Void> createProperty(@RequestBody PropertyDto propertyDto) {
        propertyService.save(propertyDto);
        return ResponseHelper.successResponse();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable long id) {
        propertyService.deleteById(id);
        return ResponseHelper.successResponse();
    }
}
