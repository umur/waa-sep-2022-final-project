package com.cs545.backend.controller;

import com.cs545.backend.service.StatisticsService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {
    private final StatisticsService statisticsService;


    public StatisticsController(StatisticsService statisticsService) {
        this.statisticsService = statisticsService;
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'OWNER')")
    @GetMapping
    public ResponseEntity<Map<String, List<Map<String, Object>>>> getStatistics(@RequestParam int year) {
        return ResponseHelper.successResponse(statisticsService.getStatistics(year > 0 ? year : LocalDate.now().getYear()));
    }
}
