<template>
  <div id="fiveChild">
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
  components: {
    derectives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
}
</script>

<style>

</style>
