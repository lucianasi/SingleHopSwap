## Single Hop Swap on Uniswap V3

- Here the swap is from WETH to DAI. 
- The Swap.sol contract is a copy from Uniswap example. I applied few modifications in it.
- My unit test you can find in test/ directory. It basically, deploy the contract, initialize weth and dai, deposity an amount and call function to swap from weth and dai.


### Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
