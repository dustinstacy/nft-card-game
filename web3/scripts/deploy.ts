import { ethers } from 'hardhat';

const _metadataUri = 'https://gateway.pinata.cloud/ipfs/https://gateway.pinata.cloud/ipfs/QmX2ubhtBPtYw75Wrpv6HLb1fhbJqxrnbhDo1RViW3oVoi';

async function deploy(name: string, ...params: [string]) {
  const contractFactory = await ethers.getContractFactory(name);

  return await contractFactory.deploy(...params).then((f) => f.deployed());
}

async function main() {
  const [admin] = await ethers.getSigners();

  console.log(`Deploying a smart contract...`);

  const AVAXGods = (await deploy('AVAXGods', _metadataUri)).connect(admin);

  console.log({ AVAXGods: AVAXGods.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });


  // async function main() {
  //   const [admin] = await ethers.getSigners();

  //   const AvaxGods = await ethers.getContractFactory("AvaxGods");
  //   const avaxGods = await AvaxGods.deploy(_metadataUri);

  //   console.log("The contract addrress is: ", { AVAXGods: avaxGods.address });

  //   return avaxGods.deployed()
  // }

  // https://github.com/andrew-fleming/pmkn-farm/blob/main/scripts/deployFarm.ts