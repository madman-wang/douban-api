import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(Mint);


axios.defaults.baseURL = 'https://api.douban.com/v2/';


Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
