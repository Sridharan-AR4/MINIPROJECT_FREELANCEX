import React, { useContext } from "react";
import "./ProjectCard.css";
import { Button } from "@mui/material";
import { Usercontext } from "../../Usercontext";
import Userservice from "../../services/Userservice";
import { toast, ToastContainer } from "react-toastify";

const ProjectCard = ({ project }) => {
  const [user] = useContext(Usercontext);

  const handleApply = async () => {
    const request = {
      freelancer_id: user.id,
      project_id: project.id
    };

    try {
      let response = await Userservice.newrequest(request);
      if (response.data) {
        toast.success("Applied Successfully. Please wait for the client's response.");
      }
    } catch (error) {
      console.error("Application error:", error);
      toast.error("An error occurred while applying. Please try again.");
    }
  };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Budget:</strong> {project.currency} {project.min_budget} - {project.max_budget}</p>
      <p><strong>Category:</strong> {project.category}</p>
      <p><strong>Deadline:</strong> {project.deadline}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Skills Required:</strong> {project.skills_required}</p>
      <div className="project-buttons">
        <Button variant="contained" color="success" onClick={handleApply}>Apply</Button>
        <Button variant="contained" color="info">More Details</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectCard;
