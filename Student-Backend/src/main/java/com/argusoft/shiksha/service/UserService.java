package com.argusoft.shiksha.service;

import com.argusoft.shiksha.entity.User;


public interface UserService {

//    List<User> findAll();

    User findById(int theId);

    void save(User theUser);
}
