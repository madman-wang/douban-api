import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
