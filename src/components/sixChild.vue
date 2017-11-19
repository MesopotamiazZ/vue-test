<template>
  <div id="sixChild">
    <my-component :level="2">Hello World!</my-component>
  </div>
</template>

<script>
import Vue from 'Vue'
var myComponent = Vue.extend({
  render: function (createElement) {
    return createElement('h' + this.level, this.$slots.default)
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
 })
export default {
  components: {
    myComponent: myComponent
  }
}
</script>

<style>

</style>
