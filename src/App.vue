<template>
  <div id="app">
    <People msg="People Data View"/>
  </div>
</template>

<script>
import People from './components/People.vue'

export default {
  name: 'app',
  components: {
    People
  }
}
</script>