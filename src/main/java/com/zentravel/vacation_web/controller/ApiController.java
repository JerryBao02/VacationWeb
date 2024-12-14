package com.zentravel.vacation_web.controller;

import com.amadeus.Params;
import com.amadeus.resources.*;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.shopping.HotelOffers;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.zentravel.vacation_web.connection.AmadeusConnect;
import com.zentravel.vacation_web.connection.DatabaseConnect;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(value="/api")
public class ApiController {

    @GetMapping("/locations")
    public Location[] locations(@RequestParam(required=true) String keyword) throws ResponseException {
        return AmadeusConnect.INSTANCE.location(keyword);
    }

    @GetMapping("/flights")
    public String flights(@RequestParam(required=true) String origin,
                          @RequestParam(required=true) String destination,
                          @RequestParam(required=true) String departDate,
                          @RequestParam(required=true) String adults,
                          @RequestParam(required=false) String returnDate)
            throws ResponseException {
        // Call Amadeus API to fetch flight data
        FlightOfferSearch[] flights = AmadeusConnect.INSTANCE.flights(origin, destination, departDate, adults, returnDate);

        // Log the JSON response structure
        System.out.println("Flight Offer Search JSON Response:");
        for (FlightOfferSearch flight : flights) {
            System.out.println("Flight ID: " + flight.getId());
            System.out.println("Price: " + flight.getPrice().getTotal() + " " + flight.getPrice().getCurrency());
            System.out.println("Number of Seats: " + flight.getNumberOfBookableSeats());
            System.out.println("Last Ticketing Date: " + flight.getLastTicketingDate());
//            System.out.println("Duration: " + flight.getItineraries().get(0).getDuration());
        }

        // Serialize the flight data to JSON using Gson
        return new Gson().toJson(flights);
    }

    @PostMapping("/confirm")
    public FlightPrice confirm(@RequestBody(required=true) FlightOfferSearch search) throws ResponseException {
        return AmadeusConnect.INSTANCE.confirm(search);
    }

    @PostMapping("/traveler")
    public Traveler traveler(@RequestBody(required=true) JsonObject travelerInfo) {
        return DatabaseConnect.traveler(travelerInfo.get("data").getAsJsonObject());
    }

    @PostMapping("/order")
    public FlightOrder order(@RequestBody(required=true) JsonObject order) throws ResponseException {
        return AmadeusConnect.INSTANCE.order(order);
    }

    @GetMapping("/hotels")
    public String getHotelOffers(
            @RequestParam(required = true) String cityCode,
            @RequestParam(required = true) String checkInDate,
            @RequestParam(required = true) String checkOutDate)
            throws ResponseException {

        // Fetch hotel offers from Amadeus API
        HotelOffer[] hotelOffers = AmadeusConnect.INSTANCE.getHotels(cityCode, checkInDate, checkOutDate);

        // Log the JSON response structure
        System.out.println("Hotel Offers JSON Response:");
        for (HotelOffer offer : hotelOffers) {
            System.out.println("Hotel Name: " + offer.getHotel().getName());
            System.out.println("Hotel ID: " + offer.getHotel().getHotelId());
            System.out.println("City Code: " + offer.getHotel().getCityCode());
            System.out.println("Available Offers Count: " + offer.getOffers().length);
            System.out.println("---");
        }

        // Return a success message or JSON structure
        return new Gson().toJson(hotelOffers);
    }

}