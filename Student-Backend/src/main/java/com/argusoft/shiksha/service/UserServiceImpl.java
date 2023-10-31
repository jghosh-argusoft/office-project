package com.argusoft.shiksha.service;

import com.argusoft.shiksha.dao.UserRepository;
import com.argusoft.shiksha.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository theUserRepository){
        userRepository=theUserRepository;
    }


    @Override
    public User findById(int theId) {
        Optional<User> result=userRepository.findById(theId);

        User user=null;

        if(result.isPresent()){
            user=result.get();
        }
        else {
            throw new RuntimeException("Did not find the user - "+theId);
        }

        return user;
    }

    public void save(User user){
        userRepository.save(user);
    }



}
