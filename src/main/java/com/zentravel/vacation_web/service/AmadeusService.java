package com.zentravel.vacation_web.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AmadeusService {

    @Value("${amadeus.api.key}")
    private String apiKey;

    @Value("${amadeus.api.secret}")
    private String apiSecret;

    public void makeApiCall() {
        // API call logic
        System.out.println("API Key: " + apiKey);
        System.out.println("API Secret: " + apiSecret);
    }
}