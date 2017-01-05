<template>
  <div id="app">
    <router-view></router-view>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <keep-alive>
      <mt-tabbar :fixed="true" v-model="active">
        <mt-tab-item id="tab-container1">
          电影
        </mt-tab-item>
        <mt-tab-item id="tab-container2">
          音乐
        </mt-tab-item>
        <mt-tab-item id="tab-container3">
          图书
        </mt-tab-item>
      </mt-tabbar>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        active: 'tab-container1'
      }
    },
    methods: {

    }
  }
</script>
<style>
</style>

