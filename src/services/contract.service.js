import { ethers } from "ethers";
import abi from "./abi.json"

export var provider = new ethers.getDefaultProvider('rinkeby', { 
  etherscan: 'PXHYSCUGTRU3SDVJVA541C86GG7XI3DM6G',
  infura: '9c92f09ade4e4b33b565f6de37f63f56',
});

export var contract = new ethers.Contract('0xc9A489180Add3d7C4b6518EE253CC22e94bcfC03', abi, provider);