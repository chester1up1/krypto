//https://restless-fittest-diagram.ethereum-goerli.discover.quiknode.pro/c0e4ab44843dd8a3f2979553a80ef3053f9f0f23/

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://restless-fittest-diagram.ethereum-goerli.discover.quiknode.pro/c0e4ab44843dd8a3f2979553a80ef3053f9f0f23/",
      accounts: [
        "0b5196bea7a7dab56b732dbf59cb029d54ef279b5df0a8a0798015046c23fac4",
      ],
    },
  },
};
