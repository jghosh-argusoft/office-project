package com.argusoft.shiksha.repository;


import com.argusoft.shiksha.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

}
