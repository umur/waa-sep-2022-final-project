package com.cs545.backend.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseHelper {
    private ResponseHelper(){}
    public static <T> ResponseEntity<T> successResponse(T data) {
        return new ResponseEntity<>(data, new HttpHeaders(), HttpStatus.OK);
    }

    public static <T> ResponseEntity<T> successResponse() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
