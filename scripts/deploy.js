// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  //Accounts and Variables
  const [deployer] = await ethers.getSigners();
  const NAME = "ETH Domains";
  const SYMBOL = "ETHD";

  //Deploy contract
  const ETHDomains = await ethers.getContractFactory("ETHDomains");    
  const ethDomains = await ETHDomains.deploy(NAME, SYMBOL);
  await ethDomains.deployed();

  console.log(`Deployed Domain Contract at: ${ethDomains.address} \n`);
  
  // List 6 domains
  const names = ["jack.eth", "paul.eth", "henry.eth", "michael.eth", "oxygen.eth", "raphael.eth", "anna.eth"];
  const costs = [tokens(10), tokens(25), tokens(14), tokens(3.5), tokens(3), tokens(8), tokens(20)];

  for (var i = 0; i < 6; i++) {
    const transaction = await ethDomains.connect(deployer).list(names[i], costs[i]);
    await transaction.wait();

    console.log(`Listed Domain ${i + 1}: ${names[i]}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
