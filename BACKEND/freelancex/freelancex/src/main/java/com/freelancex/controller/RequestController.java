package com.freelancex.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

import com.freelancex.model.Project;
import com.freelancex.model.Request;
import com.freelancex.repository.ProjectRepo;
import com.freelancex.repository.RequestRepo;

@RequestMapping("/request")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RequestController {
    @Autowired
    private RequestRepo repo;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private ProjectRepo projectRepo;
    
    @PostMapping("/newrequest")
    public Boolean newRequest(@RequestBody Request r){
        repo.save(r);
        return true;
    }

    @GetMapping("/requestedprojects")
    public List<Integer> requestedprojects(@RequestParam int freelancer_id){
        List<Integer> projects = repo.findprojectsbyfr(freelancer_id);
        return projects;
    }

    @GetMapping("/projects/{projectId}/proposals")
    public List<Map<String, Object>> getProposalsByProject(@PathVariable int projectId) {
        String query = "SELECT f.id AS freelancer_id, f.name AS freelancer_name, f.skills, f.portfoliourl " +
                       "FROM request r " +
                       "JOIN freelancer f ON r.freelancer_id = f.id " +
                       "WHERE r.project_id = ?";
        return jdbcTemplate.queryForList(query, projectId);
    }
    // @PostMapping("/proposals/{proposalId}/accept")
    // public Boolean acceptProposal(@PathVariable int proposalId, @RequestParam int projectId) {
    //     // Update the project status to Ongoing
    //     Optional<Project> project = projectRepo.findById(projectId);
    //     if (project.isPresent()) {
    //         Project p = project.get();
    //         p.setStatus("Ongoing");
    //         projectRepo.save(p);

    //         // Notify the freelancer or update the database
    //         // Example: set status of the request to "accepted"
    //         repo.updateProposalStatus(proposalId, "accepted");

    //         return true;
    //     }
    //     return false;
    // }

    // Endpoint to reject a proposal
    // @PostMapping("/proposals/{proposalId}/reject")
    // public Boolean rejectProposal(@PathVariable int proposalId) {
    //     // Update the request to rejected
    //     repo.updateProposalStatus(proposalId, "rejected");
    //     return true;
    // }
}
