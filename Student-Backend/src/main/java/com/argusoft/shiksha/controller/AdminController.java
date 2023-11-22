package com.argusoft.shiksha.controller;

import com.argusoft.shiksha.entity.User;
import com.argusoft.shiksha.entity.approvalDashboard;
import com.argusoft.shiksha.repository.ApproveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final ApproveRepo apRepo;

    //IMPORTANT the instance of repository must be injected into the controller or service we are using
    @Autowired
    public AdminController(ApproveRepo apRepo) {
        this.apRepo = apRepo;
    }

    @PostMapping("/createapprove")
    public approvalDashboard createApproval(@RequestBody approvalDashboard approvaldashboard) {
        System.out.println(approvaldashboard.toString() + "====================");
        approvalDashboard newcreatedApprove = apRepo.save(approvaldashboard);
        return newcreatedApprove;
    }

    @GetMapping("/getAllApprovals")
    public List<approvalDashboard> getAllApprovals() {
        return apRepo.findAll();
    }

//    @DeleteMapping("/delete/{username}")
//    public approvalDashboard deleteApproval(@PathVariable String username) {
//        approvalDashboard approvalDashboard = apRepo.findByUsername(username);
//        if (approvalDashboard != null) {
//            apRepo.delete(approvalDashboard);
//            return approvalDashboard;
//        } else {
//            return null;
//        }
//    }
@DeleteMapping("/delete/{username}")
public List<approvalDashboard> deleteApproval(@PathVariable String username) {
    List<approvalDashboard> approvalDashboards = apRepo.findAllByUsername(username);

    if (!approvalDashboards.isEmpty()) {
        apRepo.deleteAll(approvalDashboards);
        return approvalDashboards;
    } else {
        return Collections.emptyList();
    }
}
}
