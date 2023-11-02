package com.argusoft.shiksha.service;

import com.argusoft.shiksha.entity.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserByUsername(String username);

    User createUser(User user);

}
