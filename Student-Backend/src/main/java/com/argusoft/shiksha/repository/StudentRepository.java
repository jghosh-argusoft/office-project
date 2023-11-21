package com.argusoft.shiksha.repository;

import com.argusoft.shiksha.entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface StudentRepository extends JpaRepository<Student, Integer> {


}
