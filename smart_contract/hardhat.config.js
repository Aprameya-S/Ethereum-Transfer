https://eth-goerli.g.alchemy.com/v2/uMOv-c3DVCEcG5v2RwHZ1_NYLOMJnnAl

require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.19',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/uMOv-c3DVCEcG5v2RwHZ1_NYLOMJnnAl',
      accounts: [ '2231170a69e4e2a171029c7f8f8d6c9a7d2cf5115ca924142b538a0eff75f9f1' ]
    }
  }
}