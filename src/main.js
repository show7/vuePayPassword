import Vue from 'vue'
import App from './App.vue'
import PayPassword from './lib/index.js'
Vue.use(PayPassword)
new Vue({
  el: '#app',
  render: h => h(App)
})
