// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ETHDomains is ERC721 {
    
    uint256 public maxSupply;
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

    function mint(uint256 id) public {
        _safeMint(msg.sender, id);
    }

    function getDomains(uint256 id) public view returns (Domain memory) {
        return domainId[id];
    }
}
