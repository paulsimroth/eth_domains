const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
};

describe("ETHDomains", () => {
  let ethDomains;
  let deployer, owner1;

  const NAME = "ETH Domains";
  const SYMBOL = "ETHD";

  beforeEach(async () => {
    //Set up accounts
    [deployer, owner1] = await ethers.getSigners();

    //Deploy Contract
    const ETHDomains = await ethers.getContractFactory("ETHDomains");
    ethDomains = await ETHDomains.deploy(NAME, SYMBOL);
  });

  describe("Deployment", () => {

    it("has a name", async() => {
      const result = await ethDomains.name();
      expect(result).to.equal("ETH Domains");
    })

    it("has a symbol", async() => {
      const result = await ethDomains.symbol();
      expect(result).to.equal("ETHD");
    })

    it("sets owner", async() => {
      const result = await ethDomains.owner();
      expect(result).to.equal(deployer.address);
    })

  });

})
