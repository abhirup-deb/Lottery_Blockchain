const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider('riot cannon sibling satoshi cushion dad daughter drink spin pigeon inspire canal','https://rinkeby.infura.io/v3/ea88bbca5b314c0891149ca74367530a');
const web3 = new Web3(provider);
const deploy = async() => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy the account",accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode})
  .send({from:accounts[0], gas:'1000000'});
  console.log("Contract deployed to:", result.options.address);

};
deploy();
