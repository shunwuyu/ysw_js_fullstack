import Vue from 'vue'
import TopList from '../components/top-list.vue'

const components = {TopList};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})