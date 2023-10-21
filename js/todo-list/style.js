// 监听用户敲击Entry键
var input = document.getElementById('list-input')
var ul = document.getElementById('list')

// var span = document.querySelector('.span')

// input.onkeyup = function (e) {
//   if (e.keyCode === 13) {

//     // 读取input中的值
//     // 生成li结构
//     // 将input中的值添加到li中

//     var todoList = `
//     <li>
//         <input type="checkbox">
//         <span>${input.value}</span>
//     </li>
//     `

//     // 将li添加到ul中
//     ul.insertAdjacentHTML('afterbegin',todoList)

//   }
// }

//新建一个数组储存输入的内容
var todoItem = []

//当输入不为空并回车时调用makeList
input.onkeyup = function (e) {

  if (e.keyCode === 13 && input.value !== '') {
    todoItem.push(input.value)
    input.value = ''
    makeList()
    //点击chocbox后span字体变灰并且添加文本中横线
    var check = document.querySelectorAll('.check')
    check.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        var span = checkbox.nextElementSibling; // 获取相邻的 <span> 元素
        if (checkbox.checked) {
          span.style.textDecoration = "line-through"; /* 添加中间横线 */
          span.style.color = "#464646"; /* 将字体颜色变为灰色 */
        } else {
          span.style.textDecoration = "none"; /* 移除中间横线 */
          span.style.color = "initial"; /* 恢复默认字体颜色 */
        }
      })
    })
  }
}


//li列表打印函数
function makeList() {
  // 清空ul中的内容
  ul.innerHTML = '';
  // 循环数组todoItem，生成多份li结构添加到ul中
  for (var i = 0; i < todoItem.length; i++) {
    var todoList = `
    <li>
         <input type="checkbox"  class="check">
         <span class="span">${todoItem[i]}</span>
    </li>
     `
    // 将li添加到ul中
    ul.insertAdjacentHTML('afterbegin', todoList)

  }
}




