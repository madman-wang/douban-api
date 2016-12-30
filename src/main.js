import Vue from 'vue'
import axios from 'axios'
var qs = require('qs')
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
