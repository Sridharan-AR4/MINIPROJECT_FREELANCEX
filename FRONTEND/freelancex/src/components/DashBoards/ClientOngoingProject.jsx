import { Button } from '@mui/material';
import { initializeWeb3, getClientAddress, getFreelancerAddress, completeWork, releaseFunds, depositFunds, getContractBalance } from './Web3Config';
import React, { useState, useEffect } from 'react';


const ClientOngoingProject = ({ project }) => {
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
        } catch (error) {
        console.error('Error completing work:', error);
        setStatus('Failed to complete work');
        }
        setIsLoading(false);
    };
    const handleReleaseFunds = async () => {
        try {
           await releaseFunds(clientAddress);
           alert(`Funds released successfully to ${freelancerAddress}`);
        //    alert(`Funds released successfully from ${clientAddress} to ${freelancerAddress}`);
        } catch (error) {
           console.error("Failed to release funds", error);
        }
        
        alert(`Funds released successfully to ${freelancerAddress}`);
        const balance = await getContractBalance();
        console.log("Contract Balance:", balance, "ETH");
        setBalance(balance);
     };
     
    
  return (
    <div className="main">
      <div className="project-card">
        <h3>{project.title}</h3>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Budget:</strong> {project.currency} {project.min_budget} - {project.max_budget}</p>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Deadline:</strong> {project.deadline}</p>
        <Button color='primary' variant='contained' onClick={handleReleaseFunds}>ReleaseFund</Button>
        </div>
        </div>
  )
}

export default ClientOngoingProject;