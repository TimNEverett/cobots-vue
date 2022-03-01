export default {
  namespaced: true,
  state: () => ({ 
    bots: [],
  }),
  mutations: { 
    SET_BOTS(state, bots) {
      state.bots = bots
    },
  },
  actions: { 
    async getBots({ commit, state }) {
      //placeholder
    },
  },
  getters: { 
    allBots(state) {
      return state.bots
    },
    hasBots(state) {
      return state.bots.length > 0
    }
  }
}