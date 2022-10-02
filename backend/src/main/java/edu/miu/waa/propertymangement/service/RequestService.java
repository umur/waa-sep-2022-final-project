package edu.miu.waa.propertymangement.service;

import edu.miu.waa.propertymangement.dto.ApplicationRequestModel;
import edu.miu.waa.propertymangement.entity.CustomerRequest;

import java.util.List;
import java.util.UUID;

public interface RequestService {
    public List<CustomerRequest> getRequest();
    public CustomerRequest registerRequest(ApplicationRequestModel customerRequest);
    public void updateRequest(ApplicationRequestModel customerRequest);

    public void deleteRequest(UUID requestId);
}
