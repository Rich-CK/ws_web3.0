require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/',  // API public RPC
      accounts: [''],  // Wallet account private key
    },
  },
};