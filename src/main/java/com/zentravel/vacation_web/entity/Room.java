package com.zentravel.vacation_web.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name = "rooms")
public class Room {

    //Room instances
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Room Id

    private String hotel; // Name of the hotel
    private int bed; // Number of beds

    @NotNull(message = "Check in date is required!")
    private LocalDate checkInDate;  // Date that you check in

    @Future(message = "Check out date is required")
    private LocalDate checkOutDate; // Date that you check out
    private BigDecimal price; // Hotel prices

    private List<Booking> roomBookings = new ArrayList<>();

    @Override
    public String toString() {
        return "Hotel Room Booking{" +
                "id=" + id +
                ", bed=" + bed +
                ", checkInDate=" + checkInDate +
                ", checkOutDate=" + checkOutDate +
                ", room_id=" + room_id +
                ", cost=" + price +
                ", roomBookings=" + roomBookings +
                '}';
    }
}
