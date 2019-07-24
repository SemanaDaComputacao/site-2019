import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: process.env.BASE_URL,
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
