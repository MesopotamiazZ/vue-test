<template>
  <div id="app">
    <firstChild></firstChild>
    <secondChild></secondChild>
    <h1>我是父组件的标题</h1>
    <threeChild>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </threeChild>
    <fourChild>
      <h1 slot="header">这个是fourChild组件的标题</h1>
      <p>段落1</p>
      <p>段落2</p>
      <p slot="footer">这有一些网站外链</p>
    </fourChild>
    <!-- <fiveChild></fiveChild> -->
    <sixChild></sixChild>
    <vuex-demo></vuex-demo>
    <module></module>
  </div>
</template>

<script>
import firstChild from './components/firstChild'
import secondChild from './components/secondChild'
import threeChild from './components/threeChild'
import fourChild from './components/fourChild'
// import fiveChild from './components/fiveChild'
import sixChild from './components/sixChild'
import vuexDemo from './components/vuexDemo'
import module from './components/module'
export default {
  name: 'app',
  components: {
    firstChild: firstChild,
    secondChild: secondChild,
    threeChild: threeChild,
    fourChild: fourChild,
    // fiveChild: fiveChild,
    sixChild: sixChild,
    vuexDemo: vuexDemo,
    module: module
  }
}
</script>

<style>

</style>
