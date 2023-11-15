
// App -> Page的桥梁
// 微信提供 应用对象
const app = getApp()

Page({
  // 页面数据
  data: {
    // user: {}
    slides: null,
    entities: null
  },
  onReady(){
    console.log('ready GO');
  },
  // 生命周期
  onLoad(){
    // this -> Page
    // console.log(app,'页面显示了');
    // 响应式的页面
    setTimeout(() => {
      // this ?
       this.setData({
       slides: app.globalData.slides,
       entities: app.globalData.vehicles
    })
    }, 2000)
    
  }
})