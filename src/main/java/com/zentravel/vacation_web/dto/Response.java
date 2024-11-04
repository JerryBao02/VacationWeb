package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {
    private int statusCode;
    private String message;
    private String token;
    private String role;
    private UserDTO user;
    private RoomDTO room;
    private FlightDTO flight;
    private BookingDTO bookingDTO;
    private List<UserDTO> userList;
    private List<FlightDTO> flightList;
    private List<RoomDTO> roomList;
    private List<BookingDTO> roomBookingList;
    private List<BookingDTO> flightBookingList;
    private String expirationTime;

}
