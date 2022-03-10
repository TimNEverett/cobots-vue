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
    setWalletAddress({ commit, dispatch }, address) {
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