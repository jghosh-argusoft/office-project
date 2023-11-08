package com.argusoft.shiksha.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_role")
public class UserRole{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_role_id")
    private int role_id;

    @Column(name = "role_name")
    private String roleName;

    public UserRole() {
    }

    public UserRole(int role_id, String roleName) {
        this.role_id = role_id;
        this.roleName = roleName;
    }

    public int getRole_id() {
        return role_id;
    }

    public void setRole_id(int role_id) {
        this.role_id = role_id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public String toString() {
        return "user_role{" +
                "role_id=" + role_id +
                ", roleName='" + roleName + '\'' +
                '}';
    }
}
