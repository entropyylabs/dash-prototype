// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract NFT is ERC721, VRFConsumerBase {
    uint256 public tokenCounter;
    enum Rarity {COMMON, RARE, SUPER_RARE}
    mapping(bytes32 => address) public requestIdToSender;
    mapping(bytes32 => string) public requestIdToTokenURI;
    mapping(uint256 => Rarity) public tokenIdToRarity;
    mapping(bytes32 => uint256) public requestIdToTokenId;
    event requestedCollectible(bytes32 indexed requestId);

    bytes32 internal keyHash;
    uint256 internal fee;

    mapping (uint256 => string) private _tokenURIs;

    constructor(
        address _VRFCoordinator,
        address _LinkToken,
        bytes32 _keyhash
    )
        public
        VRFConsumerBase(_VRFCoordinator, _LinkToken)
        ERC721("ODYSSEY Tokens", "ODT")
    {
        tokenCounter = 0;
        keyHash = _keyhash;
        fee = 0.1 * 10**18;
    }

    function createCollectible(string memory tokenURI)
        public
        returns (bytes32)
    {
        bytes32 requestId = requestRandomness(keyHash, fee);
        requestIdToSender[requestId] = msg.sender;
        requestIdToTokenURI[requestId] = tokenURI;
        emit requestedCollectible(requestId);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
        internal
        override
    {
        address NFTOwner = requestIdToSender[requestId];
        string memory tokenURI = requestIdToTokenURI[requestId];
        uint256 newItemId = tokenCounter;
        _safeMint(NFTOwner, newItemId);
        _tokenURIs[newItemId] = tokenURI;
        Rarity nftRarity = Rarity(randomNumber % 3);
        tokenIdToRarity[newItemId] = nftRarity;
        requestIdToTokenId[requestId] = newItemId;
        tokenCounter = tokenCounter + 1;
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
         _tokenURIs[tokenId] = _tokenURI;
        
    }
}