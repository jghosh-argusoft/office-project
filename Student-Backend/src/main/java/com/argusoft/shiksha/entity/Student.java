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
    private String studentUsername;

    @Column(name = "student_email")
    private String studentEmail;

    @Column(name = "student_first_name")
    private String studentFirstname;

    @Column(name = "student-last_name")
    private String studentLastname;

    @Column(name = "student_gender")
    private String studentGender;


    @Column(name = "student_password",updatable = false)
    private String studentPassword;

    @Column(name = "student_dob")
    @Temporal(TemporalType.DATE)
    private Date studentDob;

    //ADDITIONAL STUDENT ONLY FIELDS


    public Student() {
    }

    public Student(int student_id, String studentUsername, String studentEmail, String studentFirstname, String studentLastname, String studentGender, String studentPassword, Date studentDob) {
        this.student_id = student_id;
        this.studentUsername = studentUsername;
        this.studentEmail = studentEmail;
        this.studentFirstname = studentFirstname;
        this.studentLastname = studentLastname;
        this.studentGender = studentGender;
        this.studentPassword = studentPassword;
        this.studentDob = studentDob;
    }

    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public String getStudentUsername() {
        return studentUsername;
    }

    public void setStudentUsername(String studentUsername) {
        this.studentUsername = studentUsername;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public String getStudentFirstname() {
        return studentFirstname;
    }

    public void setStudentFirstname(String studentFirstname) {
        this.studentFirstname = studentFirstname;
    }

    public String getStudentLastname() {
        return studentLastname;
    }

    public void setStudentLastname(String studentLastname) {
        this.studentLastname = studentLastname;
    }

    public String getStudentGender() {
        return studentGender;
    }

    public void setStudentGender(String studentGender) {
        this.studentGender = studentGender;
    }

    public String getStudentPassword() {
        return studentPassword;
    }

    public void setStudentPassword(String studentPassword) {
        this.studentPassword = studentPassword;
    }

    public Date getStudentDob() {
        return studentDob;
    }

    public void setStudentDob(Date studentDob) {
        this.studentDob = studentDob;
    }

    @Override
    public String toString() {
        return "Student{" +
                "student_id=" + student_id +
                ", studentUsername='" + studentUsername + '\'' +
                ", studentEmail='" + studentEmail + '\'' +
                ", studentFirstname='" + studentFirstname + '\'' +
                ", studentLastname='" + studentLastname + '\'' +
                ", studentGender='" + studentGender + '\'' +
                ", studentPassword='" + studentPassword + '\'' +
                ", studentDob=" + studentDob +
                '}';
    }
}
