package com.zentravel.vacation_web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "flight")
public class Flight {

    private String id;              // Flight ID
    private String airline;          // Airline operating the flight
    private String departureTime;    // Departure time
    private String arrivalTime;      // Arrival time
    private BigDecimal price;        // Price of the flight

    private List<Booking> flightBookings = new ArrayList<>();


    // Add more fields as necessary based on the API response
    @Override
    public String toString() {
        return "Flight Booking{" +
                "id='" + id + '\'' +
                ", airline='" + airline + '\'' +
                ", departureTime='" + departureTime + '\'' +
                ", arrivalTime='" + arrivalTime + '\'' +
                ", price=" + price +
                '}';
    }
}