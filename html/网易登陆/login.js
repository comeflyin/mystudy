const email = document.getElementById('email')
const password = document.getElementById('password')
const login = document.getElementById('login')

login.addEventListener('click',  () => {
  if (email.value === '' || password.value === '') {
    pop('请输入','icon-cuowu')
   }else {
   fetch(`http://192.168.31.45:3000/login?username=${email.value}&password=${password.value}`)
   .then(data => data.json())
   .then(res => {
    if(res.message === '登录成功'){
      pop(res.message,'icon-chenggong')
    }else pop(res.message,'icon-cuowu')
   })
  }
})


let pop = ((str,i) => {
  let div = document.createElement('div')
  div.innerHTML =`<div class="success" >
                      <i class="iconfont ${i}"></i>
                      ${str}  
                  </div>`
  document.body.appendChild(div)

  setTimeout(() => {
   document.querySelector('.success').remove()
  },2000)

})


