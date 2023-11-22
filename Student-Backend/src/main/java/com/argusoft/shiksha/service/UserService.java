package com.argusoft.shiksha.service;

import com.argusoft.shiksha.entity.User;
import com.argusoft.shiksha.entity.UserRole;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserByUsername(String username);

    User createUser(User user);
    void updateUser(User user);

    UserRole createUserRole(UserRole userRole);

    List<UserRole> getAllUserRoles();

    //...................
}
