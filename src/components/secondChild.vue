<template>
  <div id="secondChild">
    <h2>secondChild组件</h2>
    <p>从firstChild接收的字符串：{{msg}}</p>
  </div>
</template>

<script>
import bus from '../assets/eventBus'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    self = this
    bus.$on('test', function (str) {
      self.msg = str
    })
  }
}
</script>

<style>

</style>
