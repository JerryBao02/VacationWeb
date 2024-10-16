package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.zentravel.vacation_web.entity.Flight;
import com.zentravel.vacation_web.entity.Room;
import com.zentravel.vacation_web.entity.User;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Min;
import lombok.Data;
import lombok.Setter;


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
