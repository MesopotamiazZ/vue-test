<template>
  <div id="vuexDemo">
    <button v-on:click="add">click</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
// import store from '../vuex/store'
import {mapState} from 'vuex'
export default {
  // data () {
  //   return {
  //     count: store.state.count
  //   }
  // },
  methods: {
    add () {
      this.$store.commit('increment') // increment
    }
  }
  ,
  computed: {
    count () {
      // return store.state.count
      return this.$store.state.count // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
    }
  }
}
</script>

<style>

</style>
