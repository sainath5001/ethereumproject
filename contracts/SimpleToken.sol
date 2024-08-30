// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    string public name = "SimpleToken";
    string public symbol = "STK";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10 ** uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function mintToken(uint256 _amount) public {
        totalSupply += _amount * 10 ** uint256(decimals);
        balanceOf[msg.sender] += _amount * 10 ** uint256(decimals);
    }
}

//contract address -  