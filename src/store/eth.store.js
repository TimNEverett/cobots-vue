import {
  connectMetaMask,
  wcConnector
} from '../services/wallet.service'
export default {
  namespaced: true,
  state: () => ({ 
    walletAddress: "",
    mintPhaseComplete: true,
    rafflePhaseComplete: false,
  }),
  mutations: { 
    SET_WALLET_ADDRESS(state, address) {
      state.walletAddress = address
    },
    SET_MINT_PHASE_COMPELTE(state, isComplete) {
      state.mintPhaseComplete = isComplete
    },
    SET_RAFFLE_PHASE_COMPELTE(state, isComplete) {
      state.rafflePhaseComplete = isComplete
    }
  },
  actions: { 
    async connectMetaMask({ commit, state }) {
      if(state.walletAddress) return

      let address = await connectMetaMask()
      
      commit('SET_WALLET_ADDRESS', address)
    },
    setWalletAddress({ commit }, address) {
      commit('SET_WALLET_ADDRESS', address)
    },
    connectWC({ commit, state }) {
      wcConnector.createSession()
    }
  },
  getters: { 
    walletAddress(state) {
      return state.walletAddress
    }, 
    walletConnected(state) {
      return state.walletAddress.length > 0
    },
    mintPhaseComplete(state) {
      return state.mintPhaseComplete
    },
    rafflePhaseComplete(state) {
      return state.rafflePhaseComplete
    }
  }
}