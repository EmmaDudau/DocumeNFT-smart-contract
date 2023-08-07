/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('hardhat-contract-sizer')
require('dotenv').config()


module.exports = {
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: './src/artifacts'
  },

  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: process.env.API_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
