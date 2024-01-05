import shop from '../../api/shop'
// 单纯的想数据
const state = {
  all: []
}
const getters = {

}
const actions = {
  getAllProducts({commit}){
    // api
    // 调用接口
    // commit
    // 读取商品列表
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
  
}
// 规则 同步的 可变的
const mutations = {
  setProducts(state, products){
    state.all = products
  }
}
export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}