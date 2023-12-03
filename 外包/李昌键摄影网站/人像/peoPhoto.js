const divs = document.querySelectorAll('.box div');
const box = document.querySelector('.box');

const mid = (divs.length - 1) / 2
var angle = 5
var radius = 300; // 圆的半径

function toRotate(k) {
  let rotate = -angle * k
  for (var i = 0; i < divs.length; i++) {

    if (i < k) {
      divs[i].style.transform = ` translateZ(${radius - (k - i) * 40 }px)`;
    } else if (i == k) {
      divs[i].style.transform = ` translateZ(${radius}px)`;
    }
    else {
      divs[i].style.transform = ` translateZ(${radius + (k - i) * 40}px)`;
    }
    
  }
}

toRotate(3);

// 给div设置点击样式，点击后box移动让点击的div居中
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function () {
    toRotate(i)
    if(i < mid) box.style.transform = `translate(${-600 + 275 * (mid - i)}px,-50%)`
    else box.style.transform = `translate(${-600 - 275 * (i - mid)}px,-50%)`
    
  })
}