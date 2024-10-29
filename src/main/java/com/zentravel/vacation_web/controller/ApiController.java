package com.zentravel.vacation_web.controller;

import com.zentravel.vacation_web.service.AmadeusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    private final AmadeusService amadeusService;

    @Autowired
    public ApiController(AmadeusService amadeusService) {
        this.amadeusService = amadeusService;
    }

    @GetMapping("/api/make-call")
    public String makeApiCall() {
        amadeusService.makeApiCall();
        return "API call made!";
    }
}