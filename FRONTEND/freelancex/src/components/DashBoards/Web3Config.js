import Web3 from 'web3';
import EscrowABI from './EscrowABI.json';

let web3;
let escrowContract;

export const initializeWeb3 = async () => {
    if (!web3) {
        web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = EscrowABI.networks[networkId];
        escrowContract = new web3.eth.Contract(EscrowABI.abi, deployedNetwork && deployedNetwork.address);
    }
    return web3;
};

export const getClientAddress = async () => {
    return await escrowContract.methods.client().call();
};

export const getFreelancerAddress = async () => {
    return await escrowContract.methods.freelancer().call();
};

export const completeWork = async (fromAddress) => {
    await escrowContract.methods.completeWork().send({ from: fromAddress });
};

export const releaseFunds = async (fromAddress) => {
    await escrowContract.methods.releaseFunds().send({ from: fromAddress });
};

// Define the depositFunds function to allow the client to deposit funds
export const depositFunds = async (fromAddress, amount) => {
    await escrowContract.methods.deposit().send({ from: fromAddress, value: web3.utils.toWei(amount, "ether") });
};

// Define the getContractBalance function to retrieve the contract's balance
export const getContractBalance = async () => {
    const balance = await escrowContract.methods.getContractBalance().call();
    return web3.utils.fromWei(balance, "ether"); // Convert to ETH
};


export { escrowContract, web3 };