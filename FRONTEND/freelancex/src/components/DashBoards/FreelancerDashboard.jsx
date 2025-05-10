import React, { useContext, useEffect, useState } from "react";
import "./FreelancerDashboard.css";
import { Usercontext } from "../../Usercontext";
import { Button } from "@mui/material";
import Userservice from "../../services/Userservice";
import ProjectCard from "./ProjectCard"; // For available projects
import AppliedProjectCard from "./AppliedProjectCard"; // For applied projects
import FreelancerOngoingProject from "./FreelancerOngoingProject";

const FreelancerDashboard = () => {
  const [user] = useContext(Usercontext);
  const [projects, setProjects] = useState([]);
  const [appliedProjects, setAppliedProjects] = useState([]);
  const [appliedProjectIds, setAppliedProjectIds] = useState([]);
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let response = await Userservice.openprojects();
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAppliedProjects = async () => {
      try {
        let response = await Userservice.appliedprojects(user.id);
        const projectIds = response.data;

        const detailedProjects = await Promise.all(
          projectIds.map(async (projectId) => {
            const projectResponse = await Userservice.getProjectDetails(projectId);
            return projectResponse.data;
          })
        );

        setAppliedProjects(detailedProjects);
        setAppliedProjectIds(detailedProjects.map(project => project.id));
      } catch (error) {
        console.log("Error fetching applied project details:", error);
      }
    };

    fetchProjects();
    fetchAppliedProjects();
  }, [user.id]);

  const availableProjects = projects.filter(
    (project) => !appliedProjectIds.includes(project.id)
  );

  return (
    <div className="freelancer-dashboard">
      <h2>Welcome, {user.name}!</h2>

      <div className="tabs">
        <Button onClick={() => setActiveTab("projects")}>Available Projects</Button>
        <Button onClick={() => setActiveTab("AppliedProjects")}>Applied Projects</Button>
        <Button onClick={() => setActiveTab("Ongoing Projects")}>Ongoing Projects</Button>
        <Button onClick={() => setActiveTab("Earnings")}>Earnings</Button>
      </div>

      <div className="dashboard-content">
        {activeTab === "projects" && (
          <div className="outer">
            <h3 className="available-projects-heading">Available Projects</h3>
            <div className="tasks">
              {availableProjects.length === 0 ? (
                <p>No available projects at the moment.</p>
              ) : (
                availableProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))
              )}
            </div>

          </div>
        )}

        {activeTab === "AppliedProjects" && (
          <div className="outer">
            <h3 className="applied-projects-heading">Your Applied Projects</h3>
            <div className="applied-projects">
              {appliedProjects.length === 0 ? (
                <p>No applied projects found.</p>
              ) : (
                appliedProjects.map((project, index) => (
                  <AppliedProjectCard key={index} project={project} />
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === "Ongoing Projects" && (
          <div className="outer">
            <h3 className="applied-projects-heading">Ongoing Projects</h3>
            <div className="applied-projects">
              {appliedProjects.length === 0 ? (
                <p>No applied projects found.</p>
              ) : (
                appliedProjects.map((project, index) => (
                  <FreelancerOngoingProject key={index} project={project} />
                ))
              )}
            </div>
          </div>
        )}
        {activeTab === "Earnings" && (
          <div className="Earnings">
            <h3>Earnings</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelancerDashboard;
