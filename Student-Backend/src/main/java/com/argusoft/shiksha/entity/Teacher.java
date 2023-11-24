package com.argusoft.shiksha.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    private int teacher_id;

    @Column(name = "teacher_username")
    private String username;

    @Column(name = "teacher_email")
    private String email;

    @Column(name = "teacher_first_name")
    private String firstname;

    @Column(name = "teacher-last_name")
    private String lastname;

    @Column(name = "teacher_gender")
    private String gender;


    @Column(name = "teacher_password",updatable = false)
    private String password;

    @Column(name = "teacher_dob")
    @Temporal(TemporalType.DATE)
    private Date dob;



    //ADDITIONAL teacher ONLY FIELDS
    @Column(name = "teachExp")
    private String teachExp;

    @Column(name = "approveStatus")
    private Boolean approveStatus=false;


    public Teacher() {
    }

    public Teacher(int teacher_id, String username, String email, String firstname, String lastname, String gender, String password, Date dob, String teachExp,Boolean approveStatus) {
        this.teacher_id = teacher_id;
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.password = password;
        this.dob = dob;
        this.teachExp = teachExp;
        this.approveStatus=approveStatus;
    }

    public Boolean getApproveStatus() {
        return approveStatus;
    }

    public void setApproveStatus(Boolean approveStatus) {
        this.approveStatus = approveStatus;
    }

    public int getTeacher_id() {
        return teacher_id;
    }

    public void setTeacher_id(int teacher_id) {
        this.teacher_id = teacher_id;
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

    public String getTeachExp() {
        return teachExp;
    }

    public void setTeachExp(String teachExp) {
        this.teachExp = teachExp;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "teacher_id=" + teacher_id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                ", dob=" + dob +
                ", teachExp='" + teachExp + '\'' +
                '}';
    }
}
