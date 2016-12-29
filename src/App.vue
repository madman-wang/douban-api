<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/first">1</router-link>
    <router-link to="/second">2</router-link>
  </div>
</template>

<script>
  import h from './components/Hello.vue'
export default {
  name: 'app',
  components: {
    h
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
