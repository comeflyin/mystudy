const state = {
  items: []
}
const getters = {
  
}
const actions = {
  addProductToCart({state, commit}, product){
    // 1. 判断购物车中是否已经存在该商品
    if(product.inventory > 0){
      // 2. 存在
      const cartItem = state.items.find(item => item.id === product.id)
      if(!cartItem){
        // 2.1 不存在
        commit('pushProductToCart', {id: product.id})
      }else{
        // 2.2 存在
        commit('incrementItemQuantity', cartItem)
      }
      commit('decrementProductInventory', {id: product.id})
    }
  }
}
const mutations = {
  pushProductToCart(state, {id}){
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, {id}){
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  decrementProductInventory(state, {id}){
    const product = state.items.find(item => item.id === id)
    product.inventory--
  }
}

// store.cart.state.
export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}