<template>
  <div id="vuexDemo">
    <button v-on:click="add">click</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  methods: {
    add () {
      console.log(111111111)
      store.commit('increment') // increment
      console.log(222222222)
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  }
}
</script>

<style>

</style>
