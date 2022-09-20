const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";


describe("Swap", function () {
  //const ONE_GWEI = 1_000_000_000;

  let owner
  let elise
  let josias
  let weth9
  let dai
  let swap
  let inputAmount


  before(async () => {
    [owner, elise, josias] = await ethers.getSigners();

    weth9 = await ethers.getContractAt("IWETH", WETH9);
    dai = await ethers.getContractAt("IERC20", DAI);

    const Swap = await ethers.getContractFactory("Swap");
    swap = await Swap.deploy();
    await swap.deployed();
  })

  it("SwapExactInpuSingle", async function () {

    /** Let's put some ether */

    inputAmount = ethers.utils.parseEther('2');
    await weth9.connect(owner).deposit({ value: inputAmount });
    await weth9.connect(owner).approve(swap.address, inputAmount);

    swap.swapExactInputSingle(inputAmount);

    console.log(
      "DAI Balance - Elise: ", await dai.balanceOf(owner.address)
    );
  });
});




