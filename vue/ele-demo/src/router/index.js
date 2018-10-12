import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const city = () => import ('@/pages/city')
const msite = () => import('@/pages/msite')
// lazyload  

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
    },
    // /city/\d+
    {
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
