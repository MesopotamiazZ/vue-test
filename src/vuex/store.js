import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: { // mutations
    increment (state) { // increment 
      state.count++
    }
  }
})
