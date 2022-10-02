package com.property.service;

import com.property.dto.response.PieChartResponse;

import java.util.List;

public interface ReportService {

    List<PieChartResponse> findIncomePerStateAndCity(String state, String city);
}
