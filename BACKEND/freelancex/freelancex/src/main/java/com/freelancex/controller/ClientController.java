package com.freelancex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freelancex.model.Client;
import com.freelancex.model.Freelancer;
import com.freelancex.repository.ClientRepo;


@RequestMapping("/client")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
    
    @Autowired
    private ClientRepo repo;
    
    @PostMapping("/newuser")
    boolean newuser(@RequestBody Client client){
        Client f = repo.findUserByEmail(client.email);
        if(f!=null) return false;

        repo.save(client);
        return true;
    }
    @GetMapping("/checkuser")
    Client checkuser(@RequestParam String email,@RequestParam String password){
        Client c=repo.findUserByEmail(email);
        if(c==null) return null;

        if(c.password.equals(password)){
            return c;
        }
        return null;
    }
    
    
}
