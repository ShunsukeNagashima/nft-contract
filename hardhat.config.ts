require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require('hardhat-abi-exporter');

const projectId = '2e0801dfeead43e69039a5fc4f2b3119';
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      name: 'hardhat',
      chainId: 1337, // config standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/0c324fc30b6348168989373a20717189",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
