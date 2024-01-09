const divs = document.querySelectorAll('.box div');
const box = document.querySelector('.box');

const mid = (divs.length - 1) / 2

// 屏幕宽度
let screenWidth = window.innerWidth;
// div的宽度
let divWidth = divs[0].offsetWidth;

// 圆的半径
let radius = 380; // 越大越近
// 旋转度数
let deg = 5
// div距离
let distance = 15

// 旋转
function toRotate(k) {
  for (var i = 0; i < divs.length; i++) {
    if (i < k) {
      // 位置 以第k个div为中心 距离圆心距离不同
      divs[i].style.transform = `rotateY(${deg}deg) translateZ(${radius - (k - i) * distance }px)`;
    } else if (i == k) {
      divs[i].style.transform = ` translateZ(${radius}px)`;
    }
    else {
      divs[i].style.transform = `rotateY(-${deg}deg) translateZ(${radius + (k - i) * distance}px)`;
    }
  }
}

// 初始化
toRotate(Math.floor(mid));

// 给div设置点击样式，点击后box移动让点击的div居中
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function () {
    // 给点击的div添加样式
    toRotate(i)
    // 让点击的div居中
    // 偏移
    if(i < mid) box.style.transform = `translate(${-screenWidth/2 + screenWidth/4 * (mid - i)}px,-50%)`
    else box.style.transform = `translate(${-screenWidth/2 - screenWidth/4 * (i - mid)}px,-50%)`
    
  })
}