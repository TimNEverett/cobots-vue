export default {
  namespaced: true,
  state: () => ({ 
    numRed: 2460,
    numBlue: 6540,
    bonusPrizeLimit: 9500
  }),
  mutations: { 
    SET_NUM_RED(state, num) {
      state.numRed = num
    },
    SET_NUM_BLUE(state, num) {
      state.numBlue = num
    }
  },
  actions: { 

  },
  getters: { 
    numRed(state) {
      return state.numRed
    },
    numBlue(state) {
      return state.numBlue
    },
    bonusPrizeLimit(state) {
      return state.bonusPrizeLimit
    }
  }
}