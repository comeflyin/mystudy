// 读取用户屏幕第一行放了多少张图
// 操作下一张图，找到上一行最矮的高度，将图片排放到其下方

imgLocation('.container', 'box')

function imgLocation(parent, content) { //当前有多少张图片

  var cparent = document.querySelector(parent) //取到container
  var ccontent = getChildElement(cparent, content) //调用函数取出其中所有照片放在ccontent
  var imgWidth = ccontent[0].offsetWidth  //取出每个图片的宽度（宽度都相同取第一个）
  var num = Math.floor(document.documentElement.clientWidth / imgWidth) // document.documentElement.clientWidth查询屏幕宽度得到一行能放置几张图片
  // console.log(num); //检查
  cparent.style.cssText = `width: ${imgWidth * num}px` //设置container的宽度为第一行图片的宽度

  var BoxHeightArr = []
  for (var i = 0; i < ccontent.length; i++) {
    if (i < num) {
      BoxHeightArr[i] = ccontent[i].offsetHeight //记录图片高度
    } else {
      var minHeight = Math.min.apply(null, BoxHeightArr) //找到最矮处,Math.min.apply(null, array)方法为找到数组中的最小值
      var minIndex = BoxHeightArr.indexOf(minHeight) //最矮处下标

      ccontent[i].style.position = 'absolute'
      ccontent[i].style.top = minHeight + 'px' //距离顶部距离为最小高度px
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px' //同理距离左边为最小高度图片距离左边距离

      BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight //放置后更新原位置最小高度为原最小高度加增加的图片高度
    }
  }
  console.log(num);
}

//取出所有照片在contentArr中
function getChildElement(parent, content) {
  var contentArr = []
  var allContent = parent.getElementsByTagName('*') //getElementByTagName根据标签名取 ‘*’为所有
  for (var i = 0; i < allContent.length; i++) {
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }
  //console.log(contentArr); //检查
  return contentArr
}

