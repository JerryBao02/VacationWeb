package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomDTO {

    private Long id; // Room Id
    private String hotel; // Name of the hotel
    private int bed; // Number of beds
    private LocalDate checkInDate;  // Date that you check in
    private LocalDate checkOutDate; // Date that you check out
    private BigDecimal price; // Hotel prices

    private List<BookingDTO> roomBookings = new ArrayList<>();
}
