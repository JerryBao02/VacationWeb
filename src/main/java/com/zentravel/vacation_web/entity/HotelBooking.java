package com.zentravel.vacation_web.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name = "bookings")
public class HotelBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate checkInDate;
    private LocalDate checkOutDate;

    @Min(value = 1, message = "Number of Adults must be at least 1")
    private int numOfAdults;
    private int numOfKids;
    private int totalGuest;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;


}
