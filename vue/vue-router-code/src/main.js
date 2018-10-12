// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue 是一个mvvm 框架 
// 生态， VueRouter Vuex ElementUI Axios 



Vue.config.productionTip = false
// 路由大管家



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
