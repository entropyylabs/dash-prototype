# Odyssey - Web3Infinity demo 

Do you remember Pokemon Go? Odyssey is the same, but for Utility NFTs. It’s rare. It’s exclusive. If you find it, you are lucky.

## Tech Stack

- **React Native** is used to create a platform agnostic mobile dApp, we wanted to have a mobile first approach in order to onboard more users hence we went ahead with React Native to build an augmented reality experience.
- **Polygon** - The NFTs are minted on the Polygon blockchain as it is a layer2 scaling solution, hence lower gas fees and faster transactions.
- **IPFS/Filecoin** - NFT images and metadata are stored on IPFS.
- **Hardhat** - Ethereum development environment used for end to end blockchain related development
- **Google Maps APIs** - To enable geolocation based hunts, custom maps, displaying nearby NFTs and realtime location.
- **NFTport** - To query all collections and their respective NFTs and display them quickly.
- **AWS** - Our backend is composed of lambda functions on AWS, to get nearby hunts based on user location.

## How we leverage IPFS and Filecoin network

We use NFT.storage to store NFT images and off-chain metadata. NFT.storage makes sure IPFS URLs and CIDs are linked to NFTs and metadata to ensure the NFT forever actually refers to the intended data (eliminating things like rug pulls, and making it trustlessly verifiable what content an NFT is associated with).

[NFT upload to NFT.storage reference ](https://github.com/entropyylabs/odyssey/blob/master/web-app/components/NFTupload.js#L9)

[Fetching and updating NFT data using NFTport](https://github.com/entropyylabs/odyssey/blob/master/mobile-app/NFTfetch.js)

## Screenshots

#### Web App to Mint NFTs

![Web App to Mint NFTs](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/002/190/997/datas/gallery.jpg)

#### Mobile App to Hunt NFTs

![Mobile App to Hunt NFTs](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/002/190/985/datas/original.gif)

![Mobile App to Hunt NFTs](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/002/190/990/datas/gallery.jpg)
