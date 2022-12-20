const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDomains", () => {

  it("has a name", async() => {
    const ETHDomains = await ethers.getContractFactory("ETHDomains");
    let ethDomains = await ETHDomains.deploy();
    const result = await ethDomains.name();
    expect(result).to.equal("ETH Domains");
  })
})
