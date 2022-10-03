package com.cs545.backend.service.impl;

import com.cs545.backend.config.impl.AuthenticationFacadeImpl;
import com.cs545.backend.entity.Owner;
import com.cs545.backend.repository.CustomerRepo;
import com.cs545.backend.repository.PropertyRepo;
import com.cs545.backend.service.StatisticsService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StatisticsServiceImpl implements StatisticsService {
    private final CustomerRepo customerRepo;
    private final PropertyRepo propertyRepo;
    private final AuthenticationFacadeImpl authenticationFacade = AuthenticationFacadeImpl.getInstance();


    public StatisticsServiceImpl(CustomerRepo customerRepo, PropertyRepo propertyRepo) {
        this.customerRepo = customerRepo;
        this.propertyRepo = propertyRepo;
    }

    @Override
    public Map<String, List<Map<String, Object>>> getStatistics(int year) {
        if (!authenticationFacade.isAdminOrOwnerRole()) return new HashMap<>();

        if (authenticationFacade.isOwner()) {
            return getOwnerStats(year);
        }

        return getAdminStats(year);
    }

    private Map<String, List<Map<String, Object>>> getAdminStats(int year) {
        List<Map<String, Object>> customers = customerRepo.findAllByCreatedAtGreaterThanEqual(LocalDateTime.of(year, Month.JANUARY, 1, 0,0));
        List<Map<String, Object>> properties = propertyRepo.findAllByCreatedAtGreaterThanEqual(LocalDateTime.of(year, Month.JANUARY, 1, 0,0));

        Map<String, List<Map<String, Object>>> statisticsMap = new HashMap<>();
        statisticsMap.put("customers", customers);
        statisticsMap.put("properties", properties);

        return statisticsMap;
    }

    private Map<String, List<Map<String, Object>>> getOwnerStats(int year) {
        Owner owner = (Owner) authenticationFacade.getAuthentication().getDetails();
        List<Map<String, Object>> properties = propertyRepo.findAllByCreatedAtGreaterThanEqual(LocalDateTime.of(year, Month.JANUARY, 1, 0,0), owner.getId());

        Map<String, List<Map<String, Object>>> statisticsMap = new HashMap<>();
        statisticsMap.put("properties", properties);

        return statisticsMap;
    }
}
