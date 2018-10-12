import shop from '../../api/shop'


// Store 里的一间库房 modules 
// 搬运 actions 动作
// state 状态数据 
// getters 获取状态的get方法 
// mutations 改变 会计 计账

const state = {
  all: []
}

const getters = {}
const actions = {
  getAllProducts ({ commit }) {
    console.log('货车发动了');
    shop.getProducts(products => {
      console.log('货车带着货回来了');
      commit('setProducts', products)
    })
  }
}
const mutations = {
  setProducts (state, products) {
    console.log('入库被验收，mutation改变库存状态,卸货');
    state.all = products
  },
  decrementProductInventory (state, { id } ) {
    const product = state.all.find(product => product.id === id);
    product.inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}