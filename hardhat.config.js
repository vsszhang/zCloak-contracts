require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// If you have question about secrets.json, please connect to this link:
// https://docs.moonbeam.network/builders/interact/hardhat/
const { privateKeyKovan, privateKeyMoonbase } = require('./secrets.json');
//import { privateKeyKovan, privateKeyMoonbase } from "./secrets.json";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/4e9ee595de8f47c7b9997ce895cf6694`,
      accounts: [privateKeyKovan]
    },

    moonbase: {
      url: 'https://rpc.testnet.moonbeam.network',
      chainId: 1287, // (hex: 0x507),
      accounts: [privateKeyMoonbase] // Insert your private key here
    },

    moonriver: {
      url: 'https://rpc.moonriver.moonbeam.network',
      chainId: 1285, //(hex: 0x505),
      //accounts: [privateKeyMoonriver] // Insert your private key here
    },
  }
};
