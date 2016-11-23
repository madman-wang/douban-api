<template>
  <div id="app">
    <mt-button type="default" @click='demoEvent'>我是按钮</mt-button>
    <mt-header fixed title="我就是爱音乐"></mt-header>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    demoEvent: function () {
      this.$toast('我是晒比')
    }
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
