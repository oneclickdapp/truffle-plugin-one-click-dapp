pragma solidity >=0.4.21 <0.6.0;

contract ContractA {
  uint256 public value;

  constructor(uint256 _value) public {
    value = _value;
  }

  function setValue(uint256 _newValue) public {
    value = _newValue;
  }
}
