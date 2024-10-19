package com.zentravel.vacation_web.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
//import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Setter;

//import java.time.LocalDate;


@Data
@Entity
@Table(name = "Bookings")
public class Booking {

    //Hotel Booking instances
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Min(value = 1, message = "Number of Adults must be at least 1")
    @Setter
    private int numOfAdults;

    @Min(value = 0, message = "Number of Kids must be at least 1")
    @Setter
    private int numOfKids;

    private int totalPeople;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Flight_id")
    private Flight flight;

    public void setTotalGuest(){
        this.totalPeople = this.numOfAdults + this.numOfKids;
    }

    @Override
    public String toString() {
        return "HotelBooking{" +
                "id=" + id +
                ", numOfAdults=" + numOfAdults +
                ", numOfKids=" + numOfKids +
                ", totalGuest=" + totalPeople;
    }
}
