export default {
  namespaced: true,
  state: () => ({ 
    mintPhaseComplete: true,
    numMinted: 10000,
    mintPrice: 0.05,
    mintLimit: 10000,
    mintEndDate: Date.now() + (1000 * 60 * 60 * 24 * 0.5)
  }),
  mutations: { 
    SET_MINT_PHASE_COMPELTE(state, isComplete) {
      state.mintPhaseComplete = isComplete
    },
    SET_NUM_MINTED(state, num) {
      state.numMinted = num
    },
    SET_MINT_PRICE(state, price) {
      state.mintPrice = price
    },
    SET_MINT_LIMIT(state, limit) {
      state.mintLimit = limit
    },
    SET_MINT_END_DATE(state, date) {
      state.mintEndDate = date
    }
  },
  actions: { 

  },
  getters: { 
    mintPhaseComplete(state) {
      return state.numMinted == state.mintLimit
    },
    numMinted(state) {
      return state.numMinted
    },
    mintPrice(state) {
      return state.mintPrice
    },
    mintLimit(state) {
      return state.mintLimit
    },
    mintEndDate(state) {
      return state.mintEndDate
    }
  }
}