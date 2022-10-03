package com.cs545.backend.service;

import java.util.List;
import java.util.Map;

public interface StatisticsService {
    Map<String, List<Map<String, Object>>> getStatistics(int year);
}
