package com.argusoft.shiksha.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "approve_dashboard")
public class approvalDashboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "approve_id")
    private int approve_id;

    @Column(name = "ad_username")
    private String username;

    @Column(name = "ad_email")
    private String email;

    @Column(name = "ad_first_name")
    private String firstname;

    @Column(name = "ad-last_name")
    private String lastname;

    @Column(name = "ad_gender")
    private String gender;


    @Column(name = "ad_password",updatable = false)
    private String password;

    @Column(name = "ad_dob")
    @Temporal(TemporalType.DATE)
    private Date dob;

    //ADDITIONAL STUDENT ONLY FIELDS

    @Column(name = "ad-graduation")
    private String graduation;

    @Column(name = "ad_role")
    private String role;

    //.................................................................................................

    public approvalDashboard() {
    }

    public approvalDashboard(int approve_id, String username, String email, String firstname, String lastname, String gender, String password, Date dob, String graduation, String role) {
        this.approve_id = approve_id;
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.password = password;
        this.dob = dob;
        this.graduation = graduation;
        this.role = role;
    }

    public int getApprove_id() {
        return approve_id;
    }

    public void setApprove_id(int approve_id) {
        this.approve_id = approve_id;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "approvalDashboard{" +
                "approve_id=" + approve_id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                ", dob=" + dob +
                ", graduation='" + graduation + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
