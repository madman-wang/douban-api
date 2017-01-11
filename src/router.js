import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from './vuex'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        Vuex.commit('show');
        next();
      }
    },
    {
      path: '/movie',
      component: resolve => require(['./components/movie.vue'], resolve),
    },
    {
      path: '/movieDetail/:id',
      component: resolve => require(['./components/movieDetail.vue'], resolve),
    }
  ]
});
Vue.use(VueRouter);

export default router
