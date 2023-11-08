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
    private String teacherUsername;

    @Column(name = "teacher_email")
    private String teacherEmail;

    @Column(name = "teacher_first_name")
    private String teacherFirstname;

    @Column(name = "teacher-last_name")
    private String teacherLastname;

    @Column(name = "teacher_gender")
    private String teacherGender;


    @Column(name = "teacher_password",updatable = false)
    private String teacherPassword;

    @Column(name = "teacher_dob")
    @Temporal(TemporalType.DATE)
    private Date teacherDob;

    public Teacher() {
    }

    public Teacher(int teacher_id, String teacherUsername, String teacherEmail, String teacherFirstname, String teacherLastname, String teacherGender, String teacherPassword, Date teacherDob) {
        this.teacher_id = teacher_id;
        this.teacherUsername = teacherUsername;
        this.teacherEmail = teacherEmail;
        this.teacherFirstname = teacherFirstname;
        this.teacherLastname = teacherLastname;
        this.teacherGender = teacherGender;
        this.teacherPassword = teacherPassword;
        this.teacherDob = teacherDob;
    }

    public int getTeacher_id() {
        return teacher_id;
    }

    public void setTeacher_id(int teacher_id) {
        this.teacher_id = teacher_id;
    }

    public String getTeacherUsername() {
        return teacherUsername;
    }

    public void setTeacherUsername(String teacherUsername) {
        this.teacherUsername = teacherUsername;
    }

    public String getTeacherEmail() {
        return teacherEmail;
    }

    public void setTeacherEmail(String teacherEmail) {
        this.teacherEmail = teacherEmail;
    }

    public String getTeacherFirstname() {
        return teacherFirstname;
    }

    public void setTeacherFirstname(String teacherFirstname) {
        this.teacherFirstname = teacherFirstname;
    }

    public String getTeacherLastname() {
        return teacherLastname;
    }

    public void setTeacherLastname(String teacherLastname) {
        this.teacherLastname = teacherLastname;
    }

    public String getTeacherGender() {
        return teacherGender;
    }

    public void setTeacherGender(String teacherGender) {
        this.teacherGender = teacherGender;
    }

    public String getTeacherPassword() {
        return teacherPassword;
    }

    public void setTeacherPassword(String teacherPassword) {
        this.teacherPassword = teacherPassword;
    }

    public Date getTeacherDob() {
        return teacherDob;
    }

    public void setTeacherDob(Date teacherDob) {
        this.teacherDob = teacherDob;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "teacher_id=" + teacher_id +
                ", teacherUsername='" + teacherUsername + '\'' +
                ", teacherEmail='" + teacherEmail + '\'' +
                ", teacherFirstname='" + teacherFirstname + '\'' +
                ", teacherLastname='" + teacherLastname + '\'' +
                ", teacherGender='" + teacherGender + '\'' +
                ", teacherPassword='" + teacherPassword + '\'' +
                ", teacherDob=" + teacherDob +
                '}';
    }
}
