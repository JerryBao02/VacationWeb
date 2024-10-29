package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FlightDTO {
    private String id;              // Flight ID
    private String airline;          // Airline operating the flight
    private String departureTime;    // Departure time
    private String arrivalTime;      // Arrival time
    private BigDecimal price;        // Price of the flight

    private List<BookingDTO> flightBookings = new ArrayList<>();

}
