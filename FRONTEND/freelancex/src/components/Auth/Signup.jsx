// Signup.js
import React, { useState } from 'react';
import FreelancerSignup from './FreelancerSignup';
import ClientSignup from './ClientSignup';
import './Signup.css';

const Signup = () => {
  const [role, setRole] = useState(null);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="signup-container">
      {!role ? (
        <div className="role-selection">
          <h2>Sign Up</h2>
          <p>Are you signing up as a Freelancer or Client?</p>
          <button onClick={() => handleRoleSelection('freelancer')} className="role-button">
            Freelancer
          </button>
          <button onClick={() => handleRoleSelection('client')} className="role-button">
            Client
          </button>
        </div>
      ) : role === 'freelancer' ? (
        <FreelancerSignup />
      ) : (
        <ClientSignup />
      )}
    </div>
  );
};

export default Signup;
