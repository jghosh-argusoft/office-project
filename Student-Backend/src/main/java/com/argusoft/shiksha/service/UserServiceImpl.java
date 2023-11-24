package com.argusoft.shiksha.service;

import com.argusoft.shiksha.entity.User;
import com.argusoft.shiksha.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    //For mail service
    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    public UserServiceImpl(UserRepository theUserRepository){
        userRepository=theUserRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {
        if(user.getVerificationCode()==null){
            String verificationCode = generateRandomVerificationCode();
            user.setVerificationCode(verificationCode);
        }

        User newCreatedUser =userRepository.save(user);
        sendVerificationCodeByEmail(newCreatedUser.getEmail(),newCreatedUser.getVerificationCode());

        return newCreatedUser;
    }

    private void sendVerificationCodeByEmail(String email, String verificationCode) {
        String subject="Account Verification Code";
        String body="Your verification code is: "+verificationCode;
        emailSenderService.sendEmail(email,subject,body);
    }

    private String generateRandomVerificationCode(){
        String characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder code =new StringBuilder();
        int codeLength=12;

        for(int i=0;i<codeLength;i++){
            int index=(int)(Math.random()*characters.length());
            code.append(characters.charAt(index));
        }
        return code.toString();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void updateUser(User user) {
        System.out.println("Updating user .....................");
        userRepository.save(user);
    }


}
