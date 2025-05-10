import React, { useState, useEffect } from 'react';
import { initializeWeb3, getClientAddress, getFreelancerAddress, completeWork, releaseFunds, depositFunds, getContractBalance } from './Web3Config';

function Smartcontract() {
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
         alert("Funds released successfully");
      } catch (error) {
         console.error("Failed to release funds", error);
      }

      const balance = await getContractBalance();
      console.log("Contract Balance:", balance, "ETH");
      setBalance(balance);
   };

   const handleDeposit = async () => {
      setIsLoading(true);
      setStatus('Depositing funds...');
      try {
         await depositFunds(clientAddress, '1'); // Example of 1 Ether deposit
         setStatus('Funds deposited');
         const updatedBalance = await getContractBalance();
         setBalance(updatedBalance);
      } catch (error) {
         console.error('Error depositing funds:', error);
         setStatus('Failed to deposit funds');
      }
      setIsLoading(false);
   };

   const fetchBalance = async () => {
      try {
         const balance = await getContractBalance();
         setBalance(balance); // Use setBalance instead of setContractBalance
      } catch (error) {
         console.error("Failed to fetch contract balance", error);
      }
   };

   return (
      <div style={{marginTop:'100px',display:'flex',flexDirection:'column',gap:'20px'}}>
         <h1>Freelancing Escrow Platform</h1>
         <p>{status}</p>
         {isLoading && <p>Loading...</p>}
         <p>Client Address: {clientAddress || 'Not available'}</p>
         <p>Freelancer Address: {freelancerAddress || 'Not available'}</p>
         <p>Contract Balance: {balance} ETH</p>
         <div>
         <button onClick={handleDeposit} disabled={isLoading} style={{width:'70px',height:'70px'}}>Deposit Funds</button>
         <button onClick={handleCompleteWork} disabled={isLoading} style={{width:'70px',height:'70px'}}>Complete Work (Client)</button>
         <button onClick={handleReleaseFunds} disabled={isLoading} style={{width:'70px',height:'70px'}}>Release Funds (Client)</button>
         </div>
         <h3>Contract Balance: {balance} ETH</h3>
         <button onClick={fetchBalance} style={{width:'70px'}}>Refresh Balance</button>
      </div>
   );
}

export default Smartcontract;