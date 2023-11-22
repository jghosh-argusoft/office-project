package com.argusoft.shiksha.controller;

import com.argusoft.shiksha.entity.User;
import com.argusoft.shiksha.entity.UserRole;
import com.argusoft.shiksha.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController() {
    }

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }


    @PostMapping("/")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }



    //TOOK REFERNCE FROM CHATGPT and got that the input fronend must be in json
    @GetMapping("/{username}/verificationCode")
    public ResponseEntity<Map<String, String>> getVerificationCode(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            Map<String, String> response = new HashMap<>();
            response.put("verificationCode", user.getVerificationCode());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build(); // Return a 404 response if user is not found
        }
    }

    @PutMapping("/{username}/verify")
    public ResponseEntity<String> verifyUserAccount(@PathVariable String username) {
        User user = userService.getUserByUsername(username);

        System.out.println(".....Entered verifyUserAccount........");

        if (user != null && user.getVerificationCode() != null) {


            System.out.println(".....Entered if........");


            user.setVerified(true);
            userService.updateUser(user);
            return ResponseEntity.ok("User email is verified");
        } else {
            return ResponseEntity.badRequest().body("Invalid verification code. Please try again.");
        }
    }

    @PostMapping("/createRole")
    public UserRole createUserRole(@RequestBody UserRole userRole) {
        return userService.createUserRole(userRole);
    }

    @GetMapping("/getRoles")
    public List<UserRole> getAllUserRoles() {
        return userService.getAllUserRoles();
    }

//    @GetMapping("/{username}/verificationCode")
//    public String getVerificationCode(@PathVariable String username){
//        User user =userService.getUserByUsername(username);
//        if(user!=null){
//
//                return user.getVerificationCode();
//        }
//        else{
//            return "User not found";
//        }
//    }
//}
    //above working but i string output


//    @PostMapping("/")
//    public ResponseEntity<User> createUser(@RequestBody User user) {
//        User createdUser = userService.createUser(user);
//        URI location = ServletUriComponentsBuilder
//                .fromCurrentRequest()
//                .path("/{id}")
//                .buildAndExpand(createdUser.getUser_id())
//                .toUri();
//        return ResponseEntity.created(location).body(createdUser);
//    }
//

}