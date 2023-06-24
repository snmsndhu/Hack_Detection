// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ReentrancyVulnerableContract {
    mapping(address => uint256) public balances;

  function withdraw() public {

        uint256 balance = balances[msg.sender];

        // Send ETH 
        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Withdraw failed");

        // Update Balance
        balances[msg.sender] = 0;
    }
}
