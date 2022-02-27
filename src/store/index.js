import { createStore } from 'vuex'
import eth from './eth.store'

const store = createStore({
  modules: {
    eth
  }
})

export default store