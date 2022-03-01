import { createStore } from 'vuex'
import eth from './eth.store'
import bots from './bots.store'

const store = createStore({
  modules: {
    eth,
    bots
  }
})

export default store