var front = document.querySelector('.front-cover')
var hlod = false
var book = document.querySelector('.book')
var card = document.querySelector('.card')
var shadow = document.querySelector('.shadow')

var clamp = function(val,min,max){
  return Math.max(min,Math.min(val,max))
}

// onmousedown为监听鼠标是否按下
front.onmousedown = function(){
  hlod = true
}

//鼠标松开
window.onmouseup = function(){
  hlod = false
}

window.onmousemove = function(e){
  if(hlod){
    // console.log(e.x);
    //修改左半边书角度，卡片旋转，阴影倾斜
    var deg = clamp((window.innerWidth/2 - e.x + 300)/300*-90,-180,0)
    front.style.transform = `rotateY(${deg}deg)`
    //整本书立起来 deg / 8
    //卡片 立起来 deg/2
    //阴影倾斜 deg/8
    book.style.transform = `rotateX(${60 + deg / 8}deg)`
    card.style.transform = `rotateX(${deg/2}deg)`
    shadow.style.transform = `skew(${deg/8}deg,0)`

  }
}

// console.log(front)