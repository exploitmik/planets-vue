import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { planets } from '@/db/planets.js';

export default new Vuex.Store({
  state: {
  	planets
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
