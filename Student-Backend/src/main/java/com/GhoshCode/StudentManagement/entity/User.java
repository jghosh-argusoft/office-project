package com.GhoshCode.StudentManagement.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user_table")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "user_firstname")
    private String user_firstname;

    @Column(name = "user_lastname")
    private String user_lastname;

    private String user_


}
