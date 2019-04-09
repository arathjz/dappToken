// ERC20 Standard
// Declare the version of solidity

pragma solidity ^0.5.0;

contract DappToken {
  // Create test 
  // Initialize the smart contract with the number of tokens available
  // Constructor
  // Set the tokens 
  // Read the total number of tokens
  // Add a name
  // Add a Symbol


  uint256 public totalSupply; //Unsigned integer 256, it is part of the standars

  string public name = 'Dapp Token';
  string public symbol = 'DAPP';
  string public standard = 'Dapp Token V1.0';

  event Transfer (
    address indexed _from,
    address indexed _to,
    uint256 amount
  );

  mapping(address => uint256) public balanceOf;

  constructor(uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply; //State variable, it will write to storage
    // allocate the initial supply
  }

  // Transfer function

  
  function transfer(address _to, uint256 _value) public returns (bool){
  // Exception if the account doesn't have enough
  // Return a boolean
  // Transfer Event
  require(balanceOf[msg.sender] >= _value);
  // Transfer balance
  balanceOf[msg.sender] -= _value;
  balanceOf[_to] += _value;


  emit Transfer(msg.sender, _to, _value);

  return true;
  }
}