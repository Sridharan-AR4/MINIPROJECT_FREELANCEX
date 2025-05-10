package com.freelancex.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    @Column(name = "clientId")
    public int clientId;
    public String title;
    public String description;
    public float min_budget;
    public float max_budget;
    public String status;
    public String category;
    public String deadline;
    public String skills_required;
    public String client_wallet;
    public float escrow_amount;
    public String created_at;
    public String updated_at;
    public String milestones;
    public float reputation_score;
    public String currency;
    public Project() {
    }
    public Project(int id, int clientId, String title, String description, float min_budget, float max_budget, String status,
            String category, String deadline, String skills_required, String client_wallet,
            float escrow_amount, String created_at, String updated_at, String milestones, float reputation_score,
            String currency) {
        this.id = id;
        this.clientId = clientId;
        this.title = title;
        this.description = description;
        this.min_budget = min_budget;
        this.max_budget = max_budget;
        this.status = status;
        this.category = category;
        this.deadline = deadline;
        this.skills_required = skills_required;
        this.client_wallet = client_wallet;
        this.escrow_amount = escrow_amount;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.milestones = milestones;
        this.reputation_score = reputation_score;
        this.currency = currency;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getClientId() {
        return clientId;
    }
    public void setClientId(int clientId) {
        this.clientId = clientId;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getdescription() {
        return description;
    }
    public void setdescription(String description) {
        this.description = description;
    }
    public float getMin_budget() {
        return min_budget;
    }
    public void setMin_budget(float min_budget) {
        this.min_budget = min_budget;
    }
    public float getMax_budget() {
        return max_budget;
    }
    public void setMax_budget(float max_budget) {
        this.max_budget = max_budget;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getDeadline() {
        return deadline;
    }
    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }
    public String getSkills_required() {
        return skills_required;
    }
    public void setSkills_required(String skills_required) {
        this.skills_required = skills_required;
    }
    public String getClient_wallet() {
        return client_wallet;
    }
    public void setClient_wallet(String client_wallet) {
        this.client_wallet = client_wallet;
    }
    public float getEscrow_amount() {
        return escrow_amount;
    }
    public void setEscrow_amount(float escrow_amount) {
        this.escrow_amount = escrow_amount;
    }
    public String getCreated_at() {
        return created_at;
    }
    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }
    public String getUpdated_at() {
        return updated_at;
    }
    public void setUpdated_at(String updated_at) {
        this.updated_at = updated_at;
    }
    public String getMilestones() {
        return milestones;
    }
    public void setMilestones(String milestones) {
        this.milestones = milestones;
    }
    public float getReputation_score() {
        return reputation_score;
    }
    public void setReputation_score(float reputation_score) {
        this.reputation_score = reputation_score;
    }
    public String getCurrency() {
        return currency;
    }
    public void setCurrency(String currency) {
        this.currency = currency;
    }
    
    
    
}
