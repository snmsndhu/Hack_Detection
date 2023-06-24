const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("reentrancy test", () => {
  let owner, user1, user2;
  let USER1_DEPOSIT = ethers.utils.praseEther("5");
  let USER2_DEPOSIT = ethers.utils.praseEther("10");
  let USER1_SECOND_DEPOSIT = ethers.utils.praseEther("10");

  before(async () => {
    [owner, user1, user2] = await ethers.getSigner();
    const contractFactory = await ethers.getContractFactory(
      "contracts/vulnerableContracts/reentrancy.sol:ReentrancyVulnerableContract"
    );
    this.contract = await contractFactory.deploy();
  });
});
