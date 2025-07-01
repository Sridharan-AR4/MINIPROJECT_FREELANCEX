// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    address public client;
    address public freelancer;
    uint public amountDeposited;
    bool public workCompleted;

    event WorkCompleted(address freelancer);
    event FundsReleased(address client, address freelancer, uint amount);

    modifier onlyClient() {
        require(msg.sender == client, "Only client can call this");
        _;
    }

    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only freelancer can call this");
        _;
    }

    modifier workNotCompleted() {
        require(!workCompleted, "Work has already been completed");
        _;
    }

    constructor(address _freelancer) {
        client = msg.sender;
        freelancer = _freelancer;
        workCompleted = false;
        amountDeposited = 0;
    }

    function deposit() external payable onlyClient {
        require(msg.value > 0, "Deposit must be greater than 0");
        amountDeposited += msg.value;
    }

    function completeWork() external onlyClient workNotCompleted {
        workCompleted = true;
        emit WorkCompleted(freelancer);
    }

    function releaseFunds() external onlyClient {
        require(workCompleted, "Work not completed yet");
        require(amountDeposited > 0, "No funds to release");

        payable(freelancer).transfer(amountDeposited);

        emit FundsReleased(client, freelancer, amountDeposited);

        amountDeposited = 0;
        workCompleted = false;
    }

    function refund() external onlyFreelancer {
        require(!workCompleted, "Work is already completed, no refund possible");
        require(amountDeposited > 0, "No funds to refund");

        payable(client).transfer(amountDeposited);

        amountDeposited = 0;
        workCompleted = false;
    }

    // Add the getContractBalance function here
    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}