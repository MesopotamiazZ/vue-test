import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: { // mutations
    increment (state) { // increment 
      // console.log('enter')
      state.count++
    }
  }
})

export default store
