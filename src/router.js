import Vue from 'vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/h',
      component: resolve => require(['./components/Hello.vue'], resolve)
    }
  ]
});
Vue.use(VueRouter);

export default router
