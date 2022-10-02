package edu.miu.waa.propertymangement.controller;

import edu.miu.waa.propertymangement.dto.ApplicationRequestModel;
import edu.miu.waa.propertymangement.entity.CustomerRequest;
import edu.miu.waa.propertymangement.service.impl.CustomerRequestImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/request")
@CrossOrigin
public class RequestController {

    CustomerRequestImpl customerRequestService;

    @GetMapping()
    public List<CustomerRequest> getRequest(){
        return customerRequestService.getRequest();
    }
    @PostMapping
    public ResponseEntity<String> registerRequest(@RequestBody ApplicationRequestModel requestModel){


        customerRequestService.registerRequest(requestModel);
    return  ResponseEntity.status(200).body("Successfully registered your request.");
    }

    @PutMapping
    public ResponseEntity<String> updateRequest(@RequestBody ApplicationRequestModel requestModel){


        customerRequestService.updateRequest(requestModel);
        return  ResponseEntity.status(200).body("Successfully registered your request.");
    }
    public ResponseEntity<String> deleteRequest(String requestId){
        customerRequestService.deleteRequest(UUID.fromString(requestId));
        return ResponseEntity.status(200).body("Request deleted");
    }
}
