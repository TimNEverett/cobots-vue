import { contract } from "../services/contract.service"

export default {
  namespaced: true,
  state: () => ({ 
    myBots: [],
    botImages: {},
    numMinted: 0,
  }),
  mutations: { 
    SET_MY_BOTS(state, bots) {
      state.myBots = bots
    },
    SET_BOT_IMAGES_BY_INDEX(state, { image, index }) {
      state.botImages[index] = image
    },
    SET_NUM_MINTED(state, num) {
      state.numMinted = num
    }
  },
  actions: { 
    async getMyBots({ commit, state }, address) {
      console.log(address)
      if(!address) return 
      const num = await contract.balanceOf(address)
      console.log(num)
      let numMinted = num.toNumber()
      commit('SET_NUM_MINTED', numMinted)

      let arr = [...Array(num.toNumber()).keys()]

      const bots = await Promise.all(arr.map(async i => {
        let ind = await contract.tokenOfOwnerByIndex(address, i)
        return ind.toNumber()
      }))

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
    },
    numMinted(state) {
      return state.numMinted
    }
  }
}