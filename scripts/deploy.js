const hre = require("hardhat");
const {ethers} = require("hardhat");


async function main() {

    const deployedContract = await ethers.deployContract("Document");
    await deployedContract.waitForDeployment();
    console.log("Contract deployed to:", await deployedContract.getAddress());

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });