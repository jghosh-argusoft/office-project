package com.argusoft.shiksha.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int student_id;

    @Column(name = "student_username")
    private String username;

    @Column(name = "student_email")
    private String email;

    @Column(name = "student_first_name")
    private String firstname;

    @Column(name = "student-last_name")
    private String lastname;

    @Column(name = "student_gender")
    private String gender;


    @Column(name = "student_password",updatable = false)
    private String password;

    @Column(name = "student_dob")
    @Temporal(TemporalType.DATE)
    private Date dob;


    //ADDITIONAL STUDENT ONLY FIELDS

    @Column(name = "std-graduation")
    private String graduation;

    @Column(name = "approveStatus")
    private Boolean approveStatus=false;

//..................................................................................................................
    public Student() {
    }

    public Student(int student_id, String username, String email, String firstname, String lastname, String gender, String password, Date dob, String graduation,Boolean approveStatus) {
        this.student_id = student_id;
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.password = password;
        this.dob = dob;
        this.graduation = graduation;
        this.approveStatus=approveStatus;
    }

    public Boolean getApproveStatus() {
        return approveStatus;
    }

    public void setApproveStatus(Boolean approveStatus) {
        this.approveStatus = approveStatus;
    }

    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getGraduation() {
        return graduation;
    }

    public void setGraduation(String graduation) {
        this.graduation = graduation;
    }

    @Override
    public String toString() {
        return "Student{" +
                "student_id=" + student_id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                ", dob=" + dob +
                ", graduation='" + graduation + '\'' +
                '}';
    }
}
