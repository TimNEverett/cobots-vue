export default {
  namespaced: true,
  state: () => ({ 
    prizesDrawn: [],
    bonusPrizesDrawn: [],
    bonusPrizesUnlocked: false
  }),
  mutations: { 
    ADD_PRIZE_TO_PRIZES_DRAWN(state, prize) {
      state.prizesDrawn = [...state.prizesDrawn, prize]
    },
    ADD_PRIZE_TO_BONUS_PRIZES_DRAWN(state, prize) {
      state.bonusPrizesDrawn = [...state.bonusPrizesDrawn, prize]
    },
    SET_BONUS_PRIZES_UNLOCKED(state, isUnLocked) {
      state.bonusPrizesUnlocked = isUnLocked
    }
  },
  actions: { 
  },
  getters: { 
    prizesDrawn(state) {
      return state.prizesDrawn
    },
    numPrizesDrawn(state) {
      return state.prizesDrawn.length
    },
    bonusPrizesDrawn(state) {
      return state.bonusPrizesDrawn
    },
    numBonusPrizesDrawn(state) {
      return state.bonusPrizesDrawn.length
    },
    bonusPrizesUnlocked(state) {
      return state.bonusPrizesUnlocked
    }
  }
}