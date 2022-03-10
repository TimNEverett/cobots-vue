import { ethers } from "ethers";
import abi from "./abi.json"
import store from "@/store";

const {
  VITE_ETHERSCAN_ID,
  VITE_INFURA_ID,
  VITE_CONTRACT_ADDRESS
} = import.meta.env

export var provider = new ethers.getDefaultProvider('rinkeby', { 
  etherscan: VITE_ETHERSCAN_ID,
  infura: VITE_INFURA_ID
});

export var contract = new ethers.Contract(VITE_CONTRACT_ADDRESS, abi, provider);

console.log(contract)

const setSigner = () => {
  let provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  contract = contract.connect(signer)
}

const accountsChanged = (accounts) => {
  let address = accounts.length > 0 ? accounts[0] : ""
  setSigner()
  store.dispatch('eth/setWalletAddress', address)
}
const connected = async () => {
  const [ address ] = await window.ethereum.request({ method: 'eth_requestAccounts' });
  setSigner()
  store.dispatch('eth/setWalletAddress', address)
  console.log(contract)
}

const disconnected = () => {
  window.ethereum.
  store.dispatch('eth/setWalletAddress', '')
}

connected()

window.ethereum.on('accountsChanged', accountsChanged);
window.ethereum.on('connect', connected);
window.ethereum.on('disconnect', disconnected);