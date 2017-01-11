/**
 * Created by Administrator on 2017/1/9 0009.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    wait: false,
    hots: [],
    soons: [],
    tops: []
  },
  mutations: {
    show (state) {
      if (state.show) {
        state.show = false;
      } else {
        state.show = true;
      }
    },
    wait (state) {
      if (state.wait) {
        state.wait = false;
      } else {
        state.wait = true;
      }
    },
    setHots (state, m) {
      state.hots = m;
    },
    setSoons (state, m) {
      state.soons = m;
    },
    setTops (state, m) {
      state.tops = m;
    }
  }
});
