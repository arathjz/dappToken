const DappToken = artifacts.require('./DappToken.sol');
// artifacts allows us to create a contract abstraction
// Allows us to interact with the smart contract in any js environment
module.exports = function(deployer) {
	deployer.deploy(DappToken, 1000001);
};
