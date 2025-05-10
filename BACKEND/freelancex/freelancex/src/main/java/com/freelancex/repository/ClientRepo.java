package com.freelancex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.freelancex.model.Client;


@Repository
public interface ClientRepo extends JpaRepository<Client,Integer>{
    Client findUserByEmail(String email);

}
