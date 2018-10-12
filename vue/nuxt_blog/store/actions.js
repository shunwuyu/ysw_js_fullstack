import axios from 'axios'

export default {
  async ARTICLES({ commit, state, getters}, page = 1, limit = 15) {
    const data = await axios.get(`${getters.baseUrl}/articles/${page}/${limit}`)
    commit('SET_ARTICLES', data);
    return data
  },
  async LOGIN({ commit, state, getters }, user) {
    const { data } = await axios.post(`${getters.baseUrl}/login`, user);
    commit('SET_TOKEN', data.data.token)
    return data
  },
  async LOGOUT({ commit, state, getters }) {
    const { data } = await axios.post(`${getters.baseUrl}/logout`)
    return data
  }
}