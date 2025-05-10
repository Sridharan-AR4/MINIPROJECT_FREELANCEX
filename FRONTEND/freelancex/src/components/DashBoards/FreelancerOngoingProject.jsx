import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import "./AppliedProjectCard.css";
import { initializeWeb3, getClientAddress, getFreelancerAddress, completeWork, releaseFunds, depositFunds, getContractBalance } from './Web3Config';


const FreelancerOngoingProject = ({project}) => {
    const [clientAddress, setClientAddress] = useState('');
   const [freelancerAddress, setFreelancerAddress] = useState('');
   const [status, setStatus] = useState('Loading...');
   const [isLoading, setIsLoading] = useState(false);
   const [balance, setBalance] = useState('0');

   useEffect(() => {
      async function fetchAddresses() {
         try {
            setStatus('Fetching addresses...');
            await initializeWeb3();
            const client = await getClientAddress();
            const freelancer = await getFreelancerAddress();
            setClientAddress(client);
            setFreelancerAddress(freelancer);
            setStatus('Addresses loaded successfully');
         } catch (error) {
            console.error('Error fetching addresses:', error);
            setStatus('Failed to load addresses');
         }
      }
      fetchAddresses();
   }, []);

   const handleCompleteWork = async () => {
      setIsLoading(true);
      setStatus('Completing work...');
      try {
         await completeWork(clientAddress);
         setStatus('Work completed');
         alert('Completed work.')
      } catch (error) {
         console.error('Error completing work:', error);
         setStatus('Failed to complete work');
      }
      setIsLoading(false);
   };
    return (
        <div className="applied-project-card">
          <h4>{project.title}</h4>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Budget:</strong> {project.min_budget} - {project.max_budget} {project.currency}</p>
          <p><strong>Category:</strong> {project.category}</p>
          <p><strong>Deadline:</strong> {project.deadline}</p>
          <p><strong>Required Skills:</strong> {project.skills_required}</p>
          <Button color='primary' variant='contained' onClick={handleCompleteWork}>Complete work</Button>
        </div>
      );
}

export default FreelancerOngoingProject;
