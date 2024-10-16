package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.zentravel.vacation_web.entity.Booking;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {

    private String id;
    private String email;
    private String name;
    private String phoneNumber;
    private String role;
    private List<BookingDTO> bookings = new ArrayList<>();




}