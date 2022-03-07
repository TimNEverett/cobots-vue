export default {
  namespaced: true,
  state: () => ({ 
    bots: [
      {
        id: 1,
        svgUrl: '1',
        color: 'red'
      },
      {
        id: 2,
        svgUrl: '2',
        color: 'blue'
      },
      {
        id: 3,
        svgUrl: '3',
        color: 'red'
      },
      {
        id: 4,
        svgUrl: '4',
        color: 'red'
      },
    ],
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