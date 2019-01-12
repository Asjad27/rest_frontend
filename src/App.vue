<template>
  <div id="app">
    <h1 align="center">People Data View</h1>
    <People/>
  </div>
</template>

<script>
import People from './components/People.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    People
  }
}
</script>