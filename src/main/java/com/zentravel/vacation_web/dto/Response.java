package com.zentravel.vacation_web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {
    // Example:
    private int statusCode;
    private String message;
    private String token;
    private String role;
    private UserDTO user;
    private List<UserDTO> userList;
    private String expirationTime;

}
