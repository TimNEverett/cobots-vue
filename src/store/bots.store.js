import { contract } from "../services/contract.service"

export default {
  namespaced: true,
  state: () => ({ 
    myBots: [],
    botImages: {}
  }),
  mutations: { 
    SET_MY_BOTS(state, bots) {
      state.myBots = bots
    },
    SET_BOT_IMAGES_BY_INDEX(state, { image, index }) {
      state.botImages[index] = image
    }
  },
  actions: { 
    async getMyBots({ commit, state }) {
      if(state.myBots.length > 0) return //only call once
      const myAddress = await contract.ownerOf(0)
      const num = await contract.balanceOf(myAddress)
      var bots = []
      for(let i=0; i<num.toNumber(); i++){
        let b = await contract.tokenOfOwnerByIndex(myAddress, i)
        bots.push(b.toNumber())
      }
      commit('SET_MY_BOTS', bots)
    },
    async getImageForIndex({ commit }, index) {
      const tokenURI = await contract.tokenURI(index)
      const {image_data} = JSON.parse(tokenURI.split('data:application/json,')[1])
      commit('SET_BOT_IMAGES_BY_INDEX', { image: image_data, index })
    }
  },
  getters: { 
    myBots(state) {
      return state.myBots
    },
    hasBots(state) {
      return state.myBots.length > 0
    },
    imageByIndex:(state) => (idx) => {
      return state.botImages[idx] || null
    }
  }
}