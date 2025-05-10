package com.freelancex.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freelancex.model.Project;
import com.freelancex.repository.ProjectRepo;

@RequestMapping("/project")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
    @Autowired
    private ProjectRepo repo;

    @PostMapping("/newproject")
    public Boolean newproject(@RequestBody Project project){
        repo.save(project);
        return true;
    }

    @GetMapping("/fetchallprojects")
    public List<Project> allprojects(){
        List<Project> all=repo.findAll();
        return all;
    }

    @GetMapping("/fetchopenprojects")
    public List<Project> openProjects(){
        List<Project> open = repo.openProjects();
        return open;
    }

    @GetMapping("/ownprojects") 
    public List<Project> ownprojects(@RequestParam int clientId){
        List<Project> l = repo.findByClientId(clientId);
        return l;
    }
    @GetMapping("/getProjectDetails")
    public Optional<Project> getProjectDetails(@RequestParam int projectId) {
        return repo.findById(projectId);
    }

    
}
