export default {
  namespaced: true,
  state: () => ({ 
    headerHeight: 112,
  }),
  mutations: { 
    SET_HEADER_HEIGHT(state, height) {
      state.headerHeight = height
    }
  },
  actions: { 
    setHeaderHeight({ commit }, height) {
      commit('SET_HEADER_HEIGHT', height)
    }
  },
  getters: { 
    headerHeight(state) {
      return state.headerHeight
    },
    panelHeightClass(state) {
      return `h-[calc(100vh-${state.headerHeight}px)]`
    }
  }
}