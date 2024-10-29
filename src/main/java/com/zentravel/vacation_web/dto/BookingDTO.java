package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;


@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BookingDTO {
    private long id;
    private int numOfAdults;
    private int numOfKids;
    private int totalPeople;
    private UserDTO user;
    private RoomDTO room;

    private FlightDTO flight;


}
