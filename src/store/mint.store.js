import { contract } from '../services/contract.service'

export default {
  namespaced: true,
  state: () => ({ 
    mintPhaseComplete: true,
    numMinted: 0,
    mintPrice: 0.05,
    mintLimit: 10000,
    mintEndDate: Date.now() + (1000 * 60 * 60 * 24 * 0.5),
    maxMintPerAddress: 20,
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
    },
    SET_MAX_MINT_PER_ADDRESS(state, max) {
      state.maxMintPerAddress = max
    }
  },
  actions: { 
    async getIsMintedOut({ commit }) {
      const result = await contract.isMintedOut()
      commit('SET_MINT_PHASE_COMPELTE', result)
    },
    async mint({ commit }, numToMint) {
      contract.mintPublicSale(numToMint)
    }
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