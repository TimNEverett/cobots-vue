import {
  connectMetaMask,
  wcConnector
} from '../services/wallet.service'
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
    readyToRaffle(state) {
      return state.readyToRaffle
    }
  }
}