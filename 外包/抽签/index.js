const token = document.getElementById('token')
const count = document.getElementById('count')
const btn = document.getElementById('btn')
let link = document.querySelector('#btn')
const originalContent = link.innerHTML

console.log(btn);
console.log(link);

function handleClick(){
  // 替换为加载图像
  link.innerHTML = '<img src="./loading.gif" alt="加载中...">'
}

btn.addEventListener('click', handleClick);

// 防抖
function debounce(fn, delay) {
  let timer

  return function () {
    // arguments
    let args = arguments

    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
}

btn.addEventListener('click', debounce(() => {
  if (token.value === '' || count.value === '') {
    generateError('请输入','icon-cuowu')
   }else {
   fetch(`https://eupick.laf.run/gacha?token=${token.value}&count=${count.value}`)
   .then(data => data.json())
   .then(res => {
    console.log(res)
    if(res.code){
      console.log('success')
      console.log(res.data)
      pop(res)
    }
    else generateError(res.msg,'icon-cuowu')
   })
  }
}, 1000))


let pop = ((res) => {
  let div = document.createElement('div')
  div.innerHTML = `<div class="output">
                    <table class="table table-bordered table-striped">
                      <thead id="thead">
                        <tr>
                          <th>序号</th>
                          <th>姓名</th>
                          <th>电话</th>
                        </tr>
                      </thead>
                      <tbody id="tbody">                      
                      </tbody>
                    </table>
                  </div>`
  document.body.appendChild(div)

  // 加载结束，替换回原来的链接
  link.innerHTML = originalContent;
  // 重新绑定事件监听器
  btn.addEventListener('click', handleClick);

  // 添加事件监听器
  document.addEventListener('click', function (event) {
    var isClickInside = div.contains(event.target)
    if (!isClickInside) {
      // 用户点击了 div 之外的地方，移除 div
      div.remove()
      // 移除事件监听器
      document.removeEventListener('click', arguments.callee)
    }
  });

  for (let i = 0; i < res.data.length; i++) {
    let tr = document.createElement('tr')
    tr.innerHTML = `<td>${i + 1}</td>
                  <td>${res.data[i].name}</td>
                  <td>${res.data[i].id}</td>`
    document.getElementById('tbody').appendChild(tr)
  }

})

let generateError = ((str, i) => {
  let div = document.createElement('div')
  div.innerHTML = `<div class="generateError" >
                      <i class="iconfont ${i}"></i>
                      ${str}  
                  </div>`
  document.body.appendChild(div)

  // 加载结束，替换回原来的链接
  link.innerHTML = originalContent;
  // 重新绑定事件监听器
  btn.addEventListener('click', handleClick);

  setTimeout(() => {
    document.querySelector('.generateError').remove()
  }, 2000)

})





