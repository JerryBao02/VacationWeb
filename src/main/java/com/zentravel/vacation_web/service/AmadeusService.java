package com.zentravel.vacation_web.service;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.CheckinLink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AmadeusService {
//
//    private final Amadeus amadeus;
//
//    @Autowired
//    public AmadeusService(Amadeus amadeus) {
//        this.amadeus = amadeus;
//    }
//
//    public CheckinLink[] getCheckinLinks(String airlineCode) throws ResponseException {
//        return amadeus.referenceData.urls.checkinLinks.get(
//                Params.with("airlineCode", airlineCode)
//        );
//    }
}