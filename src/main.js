import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(Mint);

axios.defaults.baseURL = 'https://api.douban.com/v2/';
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.commit('wait');
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  store.commit('wait');
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
