import { contract } from "@/services/contract.service"
import { ethers } from "ethers"
export default {
  namespaced: true,
  state: () => ({ 
    walletAddress: "",
    readyToRaffle: true,
  }),
  mutations: { 
    SET_WALLET_ADDRESS(state, address) {
      state.walletAddress = address
    },
    SET_READY_TO_RAFFLE(state, isReady) {
      state.readyToRaffle = isReady
    },
  },
  actions: { 
    async connectMetaMask({ commit, state }) {
      let provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      contract.connect(signer)
    },
    setWalletAddress({ commit }, address) {
      commit('SET_WALLET_ADDRESS', address)
    },
  },
  getters: { 
    walletAddress(state) {
      return state.walletAddress
    }, 
    walletConnected(state) {
      return state.walletAddress.length > 0
    },
    readyToRaffle(state) {
      return state.readyToRaffle
    }
  }
}