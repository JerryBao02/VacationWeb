package com.zentravel.vacation_web.service.interfac;


import com.zentravel.vacation_web.dto.LoginRequest;
import com.zentravel.vacation_web.dto.Response;
import com.zentravel.vacation_web.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}