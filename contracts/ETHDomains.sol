// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ETHDomains is ERC721 {
    
    uint256 public maxSupply;
    uint256 public totalSupply;
    address public owner;

    //Domain struct
    struct Domain {
        string name;
        uint256 price;
        bool isOwned;
    }
    
    //Mapping for IDs to Domains
    mapping(uint256 => Domain) domainId;

    //Only Owner modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "msg.sender is not authorized");
        _;
    }

    constructor(string memory _name, string memory _symbol) 
        ERC721(_name, _symbol)
    {
        owner = msg.sender;
    }

    function list(string memory domainName, uint256 domainPrice) public onlyOwner{
        maxSupply = maxSupply + 1;
        domainId[maxSupply] = Domain(domainName, domainPrice, false);
    }

    function mint(uint256 id) public payable{
        require(id != 0, "Invalid Domain ID");
        require(id <= maxSupply, "ID excedes Supply");
        require(domainId[id].isOwned == false, "Domain is already owned");
        require(msg.value >= domainId[id].price, "Not enough ETH to macth price");

        domainId[id].isOwned = true;
        totalSupply++;
        _safeMint(msg.sender, id);
    }

    function getDomains(uint256 id) public view returns (Domain memory) {
        return domainId[id];
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{ value: address(this).balance }("");
        require(success);
    }
}
