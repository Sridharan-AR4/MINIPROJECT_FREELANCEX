const Escrow = artifacts.require("Escrow");

module.exports = function (deployer, network, accounts) {
    // Ensure you have at least two accounts available in the network
    if (accounts.length < 2) {
        throw new Error("Not enough accounts available. Please ensure you have at least two accounts.");
    }

    // Assign the client and freelancer addresses from the accounts array
    const client = accounts[8];   // The account deploying the contract
    const freelancer = accounts[1]; // The second account (freelancer)

    // Deploy the contract, passing the freelancer's address as a constructor argument
    deployer.deploy(Escrow, freelancer, { from: client })
        .then(() => {
            console.log(`Escrow contract deployed successfully!`);
            console.log(`Client address: ${client}`);
            console.log(`Freelancer address: ${freelancer}`);
        })
        .catch((error) => {
            console.error("Error deploying contract:", error);
        });
};