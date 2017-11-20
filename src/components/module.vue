<template>
  <div id="module">
    <p>{{firstName}}</p>
    <p>{{lastName}}</p>
    <p>{{age}}</p>
    <button @click="add(1,2)">add</button>
  </div>
</template>

<script>
import {firstName, lastName, age, add} from '../assets/profile'
// import {add} from '../assets/add'
export default {
  data () {
    return {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
  },
  methods: {
    add (x, y) {
      this.age = add(x, y)
    }
  }
}
</script>

<style>

</style>
