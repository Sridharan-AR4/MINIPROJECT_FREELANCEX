// HowItWorks.js
import React from 'react';
import './HowItWorks.css'; // CSS file for styling
import { FaClipboardCheck, FaUserCheck, FaWallet, FaLock, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id='HowItWorks'>
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <FaUserCheck size="3em" className="icon" />
          <h3>Create an Account</h3>
          <p>Sign up and create your profile to start your freelancing journey on FreelanceX.</p>
        </div>
        <div className="step">
          <FaClipboardCheck size="3em" className="icon" />
          <h3>Browse Jobs</h3>
          <p>Find the perfect freelance project that fits your skills and interests.</p>
        </div>
        <div className="step">
          <FaHandshake size="3em" className="icon" />
          <h3>Secure Contract</h3>
          <p>Agree on the project terms, and a smart contract ensures both parties are protected.</p>
        </div>
        <div className="step">
          <FaWallet size="3em" className="icon" />
          <h3>Get Paid</h3>
          <p>Once the work is completed, payments are processed through the escrow system.</p>
        </div>
        <div className="step">
          <FaLock size="3em" className="icon" />
          <h3>Dispute Resolution</h3>
          <p>If there's a dispute, decentralized arbitration tools ensure fair outcomes.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
