package com.argusoft.shiksha.controller;

import com.argusoft.shiksha.entity.Student;
import com.argusoft.shiksha.entity.Teacher;
import com.argusoft.shiksha.entity.User;
import com.argusoft.shiksha.entity.approvalDashboard;
import com.argusoft.shiksha.repository.ApproveRepo;
import com.argusoft.shiksha.repository.StudentRepository;
import com.argusoft.shiksha.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final ApproveRepo apRepo;
    private final TeacherRepository TeachRepo;
    private final StudentRepository stdRepo;

    //IMPORTANT the instance of repository must be injected into the controller or service we are using
    @Autowired
    public AdminController(ApproveRepo apRepo, TeacherRepository TeachRepo, StudentRepository stdRepo) {
        this.TeachRepo = TeachRepo;
        this.stdRepo = stdRepo;
        this.apRepo = apRepo;
    }


//    @PostMapping("/createapprove")
//    public approvalDashboard createApproval(@RequestBody approvalDashboard approvaldashboard) {
//        System.out.println(approvaldashboard.toString() + "====================");
//        approvalDashboard newcreatedApprove = apRepo.save(approvaldashboard);
//        return newcreatedApprove;
//    }


    //creating student..................
//    @PostMapping("/createStudent")
//    public Student createStudent(@RequestBody Student student) {
//    System.out.println(student.toString() + "====================");
//    Student newcreatedStudent = stdRepo.save(student);
//    return newcreatedStudent;
//    }
//





//    @PostMapping("/approve/{username}")
//    public approvalDashboard approveApprovals(@PathVariable String username) {
//        approvalDashboard newApproved = apRepo.findByUsername(username);
//
//        if (newApproved != null) {
//            System.out.println("=====" + newApproved);
//
//            if ("student".equals(newApproved.getRole())) {
//                System.out.println("The username: " + username + " approved as student");
//                return stdRepo.save(newApproved);
//            } else if ("teacher".equals(newApproved.getRole())) {
//                System.out.println("The username: " + username + " approved as teacher");
//                return TeachRepo.save(newApproved);
//            } else {
//                System.out.println("Unknown role for username: " + username);
//            }
//        }
//        return null;
//    }
    @PostMapping("/createTeacher")
    public Teacher createTeacher(@RequestBody Teacher teacher) {
        System.out.println(teacher.toString() + "====================");
        Teacher newTeacher = TeachRepo.save(teacher);
        return newTeacher;
    }
    @GetMapping("/getAllTeacherApprovals")
    public List<Teacher> getAllTeacherApprovals() {
        System.out.println("==="+TeachRepo.findByApproveStatusFalse());
        return TeachRepo.findByApproveStatusFalse();
    }

    @DeleteMapping("/deleteTeacherApproval/{username}")
    public ResponseEntity<Teacher> deleteTeacherApprovals(@PathVariable String username) {
        Teacher rejectedApproval = TeachRepo.findByUsername(username);

        if (rejectedApproval != null) {
            TeachRepo.delete(rejectedApproval);

            return ResponseEntity.ok(rejectedApproval);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/approveTeacherApproval/{username}")
    public ResponseEntity<String> approveTeacherApprovals(@PathVariable String username) {
        try {
            Teacher approveTeacher = TeachRepo.findByUsername(username);

            if (approveTeacher != null) {
                approveTeacher.setApproveStatus(true);
                TeachRepo.save(approveTeacher);
                return ResponseEntity.ok("Teacher approval approved successfully.");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Teacher approval not found.");
            }
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error.");
        }
    }

}
