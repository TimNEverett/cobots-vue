import { contract } from "@/services/contract.service"
export default {
  namespaced: true,
  state: () => ({ 
    drawCount: 0,
    winners: [],
    botsOfWinners: {},
    mainWinnersCount: 0,
    bonusWinnersCount: 0,
  }),
  mutations: { 
    SET_DRAW_COUNT(state, count) {
      state.drawCount = count
    },
    SET_WINNERS(state, winners) {
      state.winners = winners
    },
    SET_MAIN_WINNERS_COUNT(state, count) {
      state.mainWinnersCount = count
    },
    SET_BONUS_WINNERS_COUNT(state, count) {
      state.bonusWinnersCount = count
    }
  },
  actions: { 
    async getRaffleInfo({ commit }) {
      let count = await contract.MAIN_RAFFLE_WINNERS_COUNT()
      commit('SET_MAIN_WINNERS_COUNT', count)

      let bonusCount = await contract.COORDINATION_RAFFLE_WINNERS_COUNT()
      commit('SET_BONUS_WINNERS_COUNT', bonusCount)
    },
    async getDrawCount({ commit }) {
      let drawCount = await contract.drawCount()
      commit('SET_DRAW_COUNT', drawCount)
    },
    async getWinners({ commit, state }) {
      let arr = [...Array(state.drawCount).keys()]
      const winners = await Promise.all(arr.map(async i => {
        let address = await contract.winners(i)
        return address
      }))
      commit('SET_WINNERS', winners)
    },
  },
  getters: { 
    drawCount(state) {
      return state.drawCount
    },
    mainDrawCount(state) {
      return state.drawCount < state.mainWinnersCount ? state.drawCount : state.mainWinnersCount
    },
    bonusDrawCount(state) {
      let val = state.drawCount - state.mainWinnersCount
      return val > 0 ? val : 0
    },
    mainWinnersCount(state) {
      return state.mainWinnersCount
    },
    bonusWinnersCount(state) {
      return state.bonusWinnersCount
    }
  }
}