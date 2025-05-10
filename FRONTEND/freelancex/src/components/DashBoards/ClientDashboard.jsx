// // ClientDashboard.js
// import React, { useContext, useEffect, useState } from "react";
// import "./ClientDashboard.css";
// import { Usercontext } from "../../Usercontext";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import Userservice from "../../services/Userservice";

// const ClientDashboard = () => {
//   const[user,setUser]=useContext(Usercontext);
//   const[projects,setProjects]=useState([]);

//   useEffect(()=>{
//     const fetchProjects = async () =>{
//       try{
//         let response = await Userservice.ownprojects(user.id);
//         setProjects(response.data);
//         console.log(response);
//       }catch(error){
//         console.log(error);
//       }
//     };
//     fetchProjects();
//   },[]);
//   return (
//     <div className="client-dashboard">
//       <h2>Welcome, {user.name}!</h2>
//       <div className="dashboard-content">
//         <div className="projects">
//           <h3>Your Posted Projects</h3>
//           {/* List of posted projects */}
//         </div>
//         <div className="freelancers">
//           <h3>Your Hired Freelancers</h3>
//           {/* Show hired freelancers */}
//         </div>
//         <div className="payments">
//           <h3>Payment Status</h3>
//           {/* Show payment information */}
//         </div>
//       </div>
//       <Link to={'/newproject'}><Button variant="contained" color="error"  style={{position:'absolute',right:'90px',bottom:'90px',borderRadius:'80px',padding:'20px'}}>New Project</Button></Link>
//     </div>
//   );
// };

// export default ClientDashboard;


// ClientDashboard.js
import React, { useContext, useEffect, useState } from "react";
import "./ClientDashboard.css";
import { Usercontext } from "../../Usercontext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Userservice from "../../services/Userservice";
import ClientProjectCard from "./ClientProjectCard";
import ClientOngoingProject from "./ClientOngoingProject";

const ClientDashboard = () => {
  const [user,setUser] = useContext(Usercontext);
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let response = await Userservice.ownprojects(user.id);
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="client-dashboard">
      <h2>Welcome, {user.name}!</h2>

      {/* Tabs */}
      <div className="tabs">
        <Button onClick={() => setActiveTab("projects")}>Your Posted Projects</Button>
        <Button onClick={() => setActiveTab("freelancers")}>Your Hired Freelancers</Button>
        <Button onClick={() => setActiveTab("Ongoing Projects")}>Ongoing Projects</Button>
        <Button onClick={() => setActiveTab("payments")}>Payment Status</Button>
      </div>

      <div className="dashboard-content">
        {activeTab === "projects" && (
          <div className="outer">
            <h3 style={{marginBottom:'20px'}}>Your Posted Projects</h3>
            <div className="tasks">
            {projects.map((project, index) => (
              <ClientProjectCard key={index} project={project} />
            ))}
            </div>
          </div>
        )}

        {activeTab === "freelancers" && (
          <div className="freelancers">
            <h3>Your Hired Freelancers</h3>
            {/* Show hired freelancers content */}
          </div>
        )}

        {activeTab === "payments" && (
          <div className="payments">
            <h3>Payment Status</h3>
            {/* Show payment information content */}
          </div>
        )}
        {activeTab === "Ongoing Projects" && (
          <div className="Ongoing Projects">
            <div className="outer">
            <h3 style={{marginBottom:'20px'}}>Ongoing Projects</h3>
            <div className="tasks">
            {projects.map((project, index) => (
              <ClientOngoingProject key={index} project={project} />
            ))}
            </div>
          </div>

          </div>
        )}

      </div>

      <Link to={'/newproject'}>
        <Button variant="contained" color="error" style={{
          position: 'fixed', right: '90px', bottom: '90px', borderRadius: '80px', padding: '20px'
        }}>
          New Project
        </Button>
      </Link>
    </div>
  );
};

export default ClientDashboard;
