package com.freelancex.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.freelancex.model.Request;

import jakarta.transaction.Transactional;


@Repository
public interface RequestRepo extends JpaRepository<Request,Integer>{
    


    @Query(value = "SELECT p.project_id FROM Request p where p.freelancer_id=:val")
    public List<Integer> findprojectsbyfr(@Param("val") int freelancer_id);

    @Modifying
    @Transactional
    @Query("UPDATE Request r SET r.status = :status WHERE r.freelancer_id = :freelancerId AND r.project_id = :projectId")
    void updateProposalStatus(@Param("freelancerId") int freelancerId, 
                              @Param("projectId") int projectId, 
                              @Param("status") String status);
    
}
