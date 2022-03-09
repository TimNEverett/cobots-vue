import { ethers } from "ethers";
import abi from "./abi.json"

import store from "@/store";

export var provider = new ethers.getDefaultProvider('rinkeby', { 
  etherscan: 'PXHYSCUGTRU3SDVJVA541C86GG7XI3DM6G',
  infura: '9c92f09ade4e4b33b565f6de37f63f56',
});

export var contract = new ethers.Contract('0xc9A489180Add3d7C4b6518EE253CC22e94bcfC03', abi, provider);

const setSigner = () => {
  let provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  contract = contract.connect(signer)
}

const accountsChanged = (accounts) => {
  let address = accounts.length > 0 ? accounts[0] : ""
  setSigner()
  store.dispatch('mint/setWalletAddress', address)
}
const connected = async () => {
  const [ address ] = await window.ethereum.request({ method: 'eth_requestAccounts' });
  setSigner()
  store.dispatch('eth/setWalletAddress', address)
}

const disconnected = () => {
  window.ethereum.
  store.dispatch('eth/setWalletAddress', '')
}

connected()

window.ethereum.on('accountsChanged', accountsChanged);
window.ethereum.on('connect', connected);
window.ethereum.on('disconnect', disconnected);