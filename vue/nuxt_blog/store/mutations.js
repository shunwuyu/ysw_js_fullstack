export default {
  SET_ARTICLES(state, data) {
    state.articles = state.articles.concat(data)
    state.total = data.total
  },
  SET_USER(state, data) {
    state.user = data.data
  }
}