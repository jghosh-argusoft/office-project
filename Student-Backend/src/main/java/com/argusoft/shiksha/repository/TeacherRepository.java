package com.argusoft.shiksha.repository;

import com.argusoft.shiksha.entity.Teacher;
import com.argusoft.shiksha.entity.User;
import com.argusoft.shiksha.entity.approvalDashboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
    @Query("SELECT u FROM Teacher u WHERE u.username = :username")
    Teacher findByUsername(@Param("username") String username);

    List<Teacher> findByApproveStatusFalse();
}
