// shop？
// 大型项目 index.js 入口
// 每个模块的接口一个文件

// vuex 读|写 不能随便更改，流程
// A B 竞争 _products 中央的vuex 统一
// -> action(api) -> mutations(回溯，记账一样) -> state -> getters -> view
// 设计模式 难理解，复杂 pinia

// _xx 私有，只在本模块，不对外暴露
const _products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
  // 阅读后端接口文档,actions 要调用的方法
  // 读取商品列表
  getProducts (cb) {
    // 模拟ajax异步请求 花时间 
    // callback await getProducts()
    // return promise
    setTimeout(() => cb(_products), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // 模拟随机结帐失败。
      (Math.random() > 0.5)
        ? cb()
        : errorCb()
    }, 100)
  }
}