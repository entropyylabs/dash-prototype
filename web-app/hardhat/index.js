const main = require("./scripts/deploy")
const {series} = require('async')
const {exec} = require('child_process');

series([
 () => exec('npx hardhat run scripts/deploy.js --network matic ')
]); 
