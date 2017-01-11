<template>
  <div class="movies">
    <mt-cell :title="movie.title" :value="movie.genres[0]" v-for="movie in movies" is-link :to="/movieDetail/ + movie.id"></mt-cell>
  </div>
</template>
<style>

</style>
<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      movies () {
        return this.$store.state.hots;
      }
    },
    components: {

    }
  }
</script>
