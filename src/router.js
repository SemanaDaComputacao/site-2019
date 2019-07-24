import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/site-2019',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
