const ImgCotainer = document.querySelector('.ImgContainer')
const Imgs = document.querySelectorAll('.ImgContainer img')

const prebtn = document.querySelector('#pre-btn')
const nextbtn = document.querySelector('#next-btn')

const bonnerLi = document.querySelectorAll('.banner-control li')

const startColor = 'white'
const endColor = 'red'

console.log(bonnerLi);

let counter = 1

const size = Imgs[0].clientWidth

ImgCotainer.style.transform='translateX('+(-size*counter)+'px)'
bonnerLi[0].style.backgroundColor = 'red'

// 右按钮
nextbtn.addEventListener('click',()=>{
    if(counter>=Imgs.length-1) return // 溢出图为最后一张图时不再移动
    ImgCotainer.style.transition = 'transform 0.5s ease-in-out';
    if(counter<=Imgs.length - 3){
        bonnerLi[counter - 1].style.backgroundColor = startColor
        bonnerLi[counter].style.backgroundColor = endColor
    }
    
    counter++;  
    ImgCotainer.style.transform='translateX('+(-size*counter)+'px)'
})

// 左按钮
prebtn.addEventListener('click',()=>{
    if(counter<=0) return // 溢出图为第一张图时不再移动
    ImgCotainer.style.transition = 'transform 0.5s ease-in-out';

    if(counter>=2){
        bonnerLi[counter - 1].style.backgroundColor = startColor
        bonnerLi[counter - 2].style.backgroundColor = endColor
    }
   
    counter--;
   
    ImgCotainer.style.transform='translateX('+(-size*counter)+'px)'
})

// 无缝轮播
ImgCotainer.addEventListener('transitionend',()=>{
    // 溢出图为最后一张图时移到最后
    if(Imgs[counter].id==='lastClone'){
        ImgCotainer.style.transition = 'none' // 去掉过渡效果瞬间移动
        counter = Imgs.length - 2
        bonnerLi[0].style.backgroundColor = startColor
        bonnerLi[3].style.backgroundColor = endColor
        ImgCotainer.style.transform='translateX('+(-size*counter)+'px)'
    }
    // 溢出图为第一张图时移到最前
    else if(Imgs[counter].id==='firstClone'){
        ImgCotainer.style.transition = 'none'
        counter = Imgs.length - counter
        bonnerLi[3].style.backgroundColor = startColor
        bonnerLi[0].style.backgroundColor = endColor
        ImgCotainer.style.transform='translateX('+(-size*counter)+'px)'
    }
})

// 为 bonnerLi 中的每个元素添加点击事件
for (let i = 0; i < bonnerLi.length; i++) {
    bonnerLi[i].addEventListener('click', () => {
      // 更新 counter 的值
      counter = i + 1;
  
      // 更新 ImgCotainer 的 transform 属性
      ImgCotainer.style.transition = 'transform 0.5s ease-in-out';
      ImgCotainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
      // 更新 bonnerLi 中的元素的背景颜色
      for (let j = 0; j < bonnerLi.length; j++) {
        bonnerLi[j].style.backgroundColor = startColor;
      }
      bonnerLi[i].style.backgroundColor = endColor;
    });
  }
