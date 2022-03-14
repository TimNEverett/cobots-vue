import { createStore } from 'vuex'
import eth from './eth.store'
import bots from './bots.store'
import mint from './mint.store'
import bonus from './bonus.store'
import prizes from './prizes.store'
import contractState from './contractState.store'
import layout from './layout.store'

const store = createStore({
  modules: {
    eth,
    bots,
    mint,
    bonus,
    prizes,
    contractState,
    layout
  },
  
})

export default store