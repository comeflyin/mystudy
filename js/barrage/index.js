// 历史弹幕
let data = [
  { value: '今天你听妈妈的话了嘛？',color: 'red',fontSize: 22,time: 5},
  { value: '不听不听，就要恋爱',color: 'green',fontSize: 30,time: 10},
  { value: '周董我男神',color: '#002156',fontSize: 30,time: 10}
]

//整理弹幕数据
CanvasBarrage.prototype.render = function(){
  // 清楚画布
  this.clear()
  this.renderBarrage() // 弹幕绘制在画布上
  if(!this.isPaused){ // 播放状态
    requestAnimationFrame(this.render.bind(this))
  }



}
function CanvasBarrage(canvas,video,opts = {}){
  if(!canvas || !video) return

  this.video = video
  this.canvas = canvas
  // 设置canvas宽高与vedio一致
  this.canvas.width = video.width
  this.canvas.height = video.height
  // 获取画布
  this.ctx = canvas.getContext('2d')
  // 初始化弹幕
  let defOpts = {
    color: '#e91e63',
    speed: 1.5,
    opacity: 0.5,
    fontSize: 20,
    data: []
  }

  // 合并对象全部挂载到this实例上
  Object.assign(this,defOpts,opts)

  // 视屏播放弹幕才出现
  this.isPaused = true
  // 获取所有弹幕消息
  this.barrages = data
  // 移动弹幕
this.render(){
    
  }
  
  
 

}

// let canvas = document.getElementById('canvas')
// new	CanvasBarrage(canvas,video,{data})