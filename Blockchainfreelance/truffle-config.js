module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Ganache host
      port: 7545,            // Ganache port
      network_id: "*",       // Any network (Ganache)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Solidity compiler version
    },
  },
};