import { contract } from '../services/contract.service'
import { utils } from 'ethers'
export default {
  namespaced: true,
  state: () => ({ 
    mintPhaseComplete: false,
    mintPrice: 0.05,
    mintLimit: 10000,
    mintEndDate: Date.now() + (1000 * 60 * 60 * 24 * 0.5),
    maxMintPerAddress: 20,
    publicSaleOpen: false,
    totalSupply: 0,
    mintInProgress: false,
    mintSuccessful: false
  }),
  mutations: { 
    SET_MINT_PHASE_COMPELTE(state, isComplete) {
      state.mintPhaseComplete = isComplete
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
    },
    SET_PUBLIC_SALE_OPEN(state, isOpen) {
      state.publicSaleOpen = isOpen
    },
    SET_TOTAL_SUPPLY(state, supply) {
      state.totalSupply = supply
    },
    SET_MINT_IN_PROGRESS(state, inProgress) {
      state.mintInProgress = inProgress
    },
    SET_MINT_SUCCESSFUL(state, isSuccessful) {
      state.mintSuccessful = isSuccessful
    }
   },
  actions: {
    async mintState({ commit }) {
      const totalSupply = await contract.totalSupply()
      commit('SET_TOTAL_SUPPLY', totalSupply)

      const saleOpen = await contract.isPublicSaleOpen()
      console.log({ saleOpen })
      commit('SET_PUBLIC_SALE_OPEN', saleOpen)

      if(saleOpen) {
        const saleStartTimestamp = await contract.publicSaleStartTimestamp()
        const mintDuration = await contract.COBOTS_MINT_DURATION()
        const endDate = saleStartTimestamp.toNumber() + (1000 * mintDuration.toNumber())
        commit('SET_MINT_END_DATE', endDate)
      }
    },
    async getIsMintedOut({ commit, dispatch }) {
      const mintedOut = await contract.isMintedOut()
      commit('SET_MINT_PHASE_COMPELTE', mintedOut)
    },
    async mint({ commit, state }, numToMint) {
      commit('SET_MINT_IN_PROGRESS', true)
      let cost = (numToMint * state.mintPrice).toPrecision(2)
      try {
        const transaction = await contract.mintPublicSale(
          numToMint, 
          { value: utils.parseEther(`${cost}`) 
        })
        let result = await transaction.wait()
        commit('SET_MINT_SUCCESSFUL', true)
        dispatch('mintState')
      } catch(e) {
        console.log(e)
      }
      commit('SET_MINT_IN_PROGRESS', false)
      
    }
  },
  getters: { 
    mintPhaseComplete(state) {
      return state.mintPhaseComplete || true
    },
    mintPrice(state) {
      return state.mintPrice
    },
    mintLimit(state) {
      return state.mintLimit
    },
    mintEndDate(state) {
      return state.mintEndDate
    },
    totalSupply(state) {
      return state.totalSupply
    },
    mintInProgress(state) {
      return state.mintInProgress
    },
    mintSuccessful(state) {
      return state.mintSuccessful
    },
    publicSaleOpen(state) {
      return state.publicSaleOpen
    }
  }
}