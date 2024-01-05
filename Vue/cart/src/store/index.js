import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

// 返回的是 store 单例对象 树状结构 ： 单一状态树
export default createStore({
  modules:{
    cart,
    products
  },
  plugins: [createLogger()] // vuex 调试工具
})