<template>
  <div class="h-wrap">
    <!--<img class="maximg" :src="detail.images.large">-->
    {{ detail.summary }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this.$http.get(`movie/subject/${this.$route.params.id}`).then( response => {
      this.detail = response.data;
    } );
  }
}
</script>

<style scoped lang="scss">
  .h-wrap {
    text-align: center;
  }
</style>
