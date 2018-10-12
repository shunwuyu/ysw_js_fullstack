import Vuex from 'vuex'
import getters from  './getters'
import mutations from './mutations'
import actions from './actions'

export default () => {
  return new Vuex.Store({
    state: {
      articles: [],
      total: 0,
      user: {
        nickname: '在警察局的前端',
        avatar: 'https://user-gold-cdn.xitu.io/2016/11/29/1f8696d…?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        motto: '每一行代码我都写的害怕死了...'
      }
    },
    getters,
    mutations,
    actions
  })
}