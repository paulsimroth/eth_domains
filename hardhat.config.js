require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const key = require("./secret.json").secret;
const infuraKey = require("./secret.json").infura;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: [key]
    }
  }
};