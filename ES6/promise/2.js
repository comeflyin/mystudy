function xq(){
  
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('龙哥相亲了');
      resolve('相亲成功')
    }, 2000)
  })   
}

function marry(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('龙哥结婚了');
      resolve('结婚成功')
    }, 1000)
  })
}

function baby(){
  setTimeout(()=>{
    console.log('小龙女出生了');
  },500)

  
}

xq()
.then((res) => {
  console.log(res)
  return marry()
})
.then((res) => {
  console.log(res)
  baby()
})