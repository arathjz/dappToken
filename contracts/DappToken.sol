// ERC20 Standard
// Declare the version of solidity

pragma solidity ^0.5.0;

contract DappToken {
  // Create test 
  // Initialize the smart contract with the number of tokens available
  // Constructor
  // Set the tokens 
  // Read the total number of tokens
  uint256 public totalSupply; //Unsigned integer 256, it is part of the standars

  constructor() public {
    totalSupply = 1000000; //State variable, it will write to storage
  }
}