package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {


    private long id;
    private String email;
    private String name;
    private String phoneNumber;
    private String role;



}
