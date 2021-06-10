require('babel-register')
require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')
//const privateKeys = process.env.PRIVATE_KEYS || ''
const mnemonic =
  'tag bleak scout inflict volcano have more lens ripple island furnace manage'
// const infuraKey = process.env.INFURA_API_KEY

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    /* kovan: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 42,
    }, */
    /* main: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://main.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 1,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 4,
    }, */
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic, // Array of account private keys
          'https://ropsten.infura.io/v3/33fe33cf053247a6a357a2fb37bb1b78' // Url to an Ethereum Node
        )
      },
      from: '0x1eDf41CB9Cb2c6d26008F757E7533F532C14F5b0',
      gas: 5500000,
      gasPrice: 25000000000, // 5 gwei
      network_id: 3,
      // timeoutBlocks: 200,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: '>=0.6.0 <0.8.0',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
