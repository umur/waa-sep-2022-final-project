package com.property.service.impls;

import com.property.domain.Address;
import com.property.domain.PropertyRent;
import com.property.domain.Role;
import com.property.dto.response.PieChartResponse;
import com.property.respository.PropertyRentRepository;
import com.property.respository.UserRepository;
import com.property.service.ReportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class ReportServiceImpl implements ReportService {

    private final PropertyRentRepository propertyRentRepository;

    private final UserRepository userRepository;

    @Override
    public List<PieChartResponse> findIncomePerStateAndCity(String state, String city) {
        List<PieChartResponse> pieChartResponses = new ArrayList<>();
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        log.info("Login with user: {}",username);
        var user = userRepository.findByEmail(username);
        if(state==null && city==null){
            List<PropertyRent> propertyRents = user.getRole().equals(Role.LANDLORD) ?  propertyRentRepository.findAllByPropertyLandLordId(user.getId()): (List<PropertyRent>) propertyRentRepository.findAll();
            pieChartResponses = toPieChartResponse(propertyRents, address -> address.getState());
        } else if(state!=null && city==null){
            List<PropertyRent> propertyRents = propertyRentRepository.findAllByPropertyAddressState(state);
            pieChartResponses = toPieChartResponse(propertyRents, address -> address.getCity());
        } else if(state!=null && city!=null){
            List<PropertyRent> propertyRents = propertyRentRepository.findAllByPropertyAddressStateAndPropertyAddressCity(state,city);
            pieChartResponses = toPieChartResponse(propertyRents, address -> address.getStreet());
        }
        return pieChartResponses;
    }

    private List<PieChartResponse> toPieChartResponse(List<PropertyRent> propertyRents, Function<Address,String> function){
        log.info("Generating report for property with size {}", propertyRents.size());
        Map<String, List<PropertyRent>> propertyMap = propertyRents.stream()
                .collect(Collectors.groupingBy(p -> function.apply(p.getProperty().getAddress())));
        List<PieChartResponse> pieChartResponses = propertyMap.entrySet().stream().map(entry -> {
            String state = entry.getKey();
            Double total = entry.getValue().stream().map(a -> a.getPaidRentAmount()).reduce(Double.valueOf(0),  Double::sum);
            return new PieChartResponse(state,total);
        }).collect(Collectors.toList());
        log.info("Report with state: {}",pieChartResponses.size());
        return pieChartResponses;
    }
}
