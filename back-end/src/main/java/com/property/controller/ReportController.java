package com.property.controller;

import com.property.dto.response.PieChartResponse;
import com.property.dto.response.UserRegistrationResponse;
import com.property.service.ReportService;
import com.property.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    private final UserService userService;

    @GetMapping("/location-base")
    public ResponseEntity<List<PieChartResponse>> findTotalIncome(@RequestParam(required = false) String state,
                                                                  @RequestParam(required = false) String city){
        List<PieChartResponse> pieChartResponses = reportService.findIncomePerStateAndCity(state,city);
        return ResponseEntity.ok(pieChartResponses);
    }

}
