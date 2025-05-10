package com.freelancex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelancex.model.Freelancer;


@Repository
public interface FreelancerRepo extends JpaRepository<Freelancer,Integer>{
    Freelancer findUserByEmail(String email);
}
