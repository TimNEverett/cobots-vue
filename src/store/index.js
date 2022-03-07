import { createStore } from 'vuex'
import eth from './eth.store'
import bots from './bots.store'
import mint from './mint.store'
import bonus from './bonus.store'

const store = createStore({
  modules: {
    eth,
    bots,
    mint,
    bonus
  }
})

export default store