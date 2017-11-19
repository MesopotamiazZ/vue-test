<template>
  <div id="firstChild">
    <h2>firstChild组件</h2>
    <button v-on:click="sendMsg">向组件传值</button>
  </div>
</template>

<script>
import bus from '../assets/eventBus'
export default {
  methods: {
    sendMsg () {
      bus.$emit('test', 'this message from firstChild')
    }
  }
}
</script>

<style>

</style>
