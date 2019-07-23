import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import VueScrollactive from 'vue-scrollactive'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronDown,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faBars, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueScrollactive)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
