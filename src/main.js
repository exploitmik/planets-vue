import Vue from 'vue'
import VueRellax from 'vue-rellax'
import App from './App.vue'
import store from './store'

Vue.use(VueRellax);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
