export default {
  namespaced: true,
  state: () => ({ 
    walletAddress: "1234567890"
  }),
  mutations: { 
    setWalletAddress(state, { walletAddress}) {
      state.walletAddress = walletAddress
    }
  },
  actions: { 
    connectWallet() {

    }
  },
  getters: { 
    walletAddress(state) {
      return state.walletAddress
    }, 
    walletConnected(state) {
      // return state.walletAddress.length > 0
      return true
    }
  }
}