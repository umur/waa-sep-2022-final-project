package edu.miu.waa.propertymangement.service.impl;

import edu.miu.waa.propertymangement.Utils.JavaMailUtils;
import edu.miu.waa.propertymangement.dto.ApplicationRequestModel;
import edu.miu.waa.propertymangement.entity.CustomerRequest;
import edu.miu.waa.propertymangement.entity.Property;
import edu.miu.waa.propertymangement.entity.User;
import edu.miu.waa.propertymangement.repo.CustomerRequestRepo;
import edu.miu.waa.propertymangement.repo.PropertyRepo;
import edu.miu.waa.propertymangement.repo.UserRepo;
import edu.miu.waa.propertymangement.security.SecurityUtil;
import edu.miu.waa.propertymangement.service.RequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class CustomerRequestImpl  implements RequestService {
    CustomerRequestRepo customerRequestRepo;
    PropertyRepo propertyRepo;
    UserRepo userRepo;
    @Override
    public List<CustomerRequest> getRequest() {
        return (List<CustomerRequest>) customerRequestRepo.findAll();
    }

    @Override
    public CustomerRequest registerRequest(ApplicationRequestModel customerRequest) {
        Optional<Property> property = propertyRepo.findById(UUID.fromString(customerRequest.getPropertyId()));
        Optional<User> customer = userRepo.findById(UUID.fromString(SecurityUtil.getKeyCloakAccessToken().getSubject()));
        Optional<User> owner = userRepo.findById(property.get().getOwner().getId());
        CustomerRequest newCustomerRequest = new CustomerRequest();

        newCustomerRequest.setMessage(customerRequest.getMessage());
        property.ifPresent(newCustomerRequest::setProperty);
        customer.ifPresent(newCustomerRequest::setCustomer);

        if(owner.isPresent()){
            try {
                JavaMailUtils.sendEmail("winhtutaungster@gmail.com");
            } catch (MessagingException e) {
                throw new RuntimeException(e);
            }
        }

        return customerRequestRepo.save(newCustomerRequest);
    }

    @Override
    public void updateRequest(ApplicationRequestModel applicationRequest) {
        Optional<Property> property = propertyRepo.findById(UUID.fromString(applicationRequest.getPropertyId()));
        Optional<User> customer = userRepo.findById(UUID.fromString(applicationRequest.getCustomer_id()));
        CustomerRequest updatedCustomerRequest = new CustomerRequest();

        updatedCustomerRequest.setMessage(applicationRequest.getMessage());
        property.ifPresent(updatedCustomerRequest::setProperty);
        customer.ifPresent(updatedCustomerRequest::setCustomer);
         customerRequestRepo.save(updatedCustomerRequest);
    }

    @Override
    public void deleteRequest(UUID requestId) {
        customerRequestRepo.deleteById(requestId);
    }
}
