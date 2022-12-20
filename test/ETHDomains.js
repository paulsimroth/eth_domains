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

    //List Domains
    const transaction = await ethDomains.connect(deployer).list("jack.eth", tokens(5));
    await transaction.wait();
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

  describe("Domain", () => {
    it("returns domain attributes", async () => {
      let domain = await ethDomains.getDomains(1);
      expect(domain.name).to.equal("jack.eth");
      expect(domain.price).to.equal(tokens(5));
      expect(domain.isOwned).to.equal(false);
    });

    it("returns max supply", async () => {
      const result = await ethDomains.maxSupply();
      expect(result).to.equal(1);
    });
  });

  describe("Minting", () => {
    const ID = 1;
    const AMOUNT = tokens(5);

    beforeEach(async () => {
      const transaction = await ethDomains.connect(owner1).mint(ID);
      await transaction.wait();
    })

    it("updates owner", async () => {
      const owner = await ethDomains.ownerOf(ID)
      expect(owner).to.equal(owner1.address);
    });
  });

})
