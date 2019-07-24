import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import VueScrollactive from 'vue-scrollactive'

Vue.config.productionTip = false

Vue.use(VueScrollactive)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
