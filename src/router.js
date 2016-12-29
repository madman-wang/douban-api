import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from './components/wangyi.vue'
import he from './components/Hello.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: hello
    },
    {
      path: '/first',
      component: hello
    },
    {
      path: '/second',
      component: he
    }
  ]
})
Vue.use(VueRouter)

export default router
