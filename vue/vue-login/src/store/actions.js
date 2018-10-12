import * as types from './types'
import api from '@/api'

// commit mutaion,  api设计的路口l
export default  {
  UserLogin({ commit }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout({ commit }) {
    commit(type.LOGOUT)
  },
  UserName({ commit }, data) {
    commit(types.USERNAME, data)
  }
}