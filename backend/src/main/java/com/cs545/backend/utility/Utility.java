package com.cs545.backend.utility;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class Utility {
    private Utility() {}

    public static Pageable getPageable(int pageNum, int pageSize, String sortBy) {
        return PageRequest.of(pageNum, pageSize, Sort.by(sortBy));
    }
}
