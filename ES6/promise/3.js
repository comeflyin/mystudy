function a (){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('a');
      resolve('a')
    },500)
  })
}

function b (){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('b');
      resolve('b')
    },1500)
  })

} 

function c (){

  console.log('c');

}

Promise.all([a(),b()]).then(c)

// all 必须要接收到的所有的promise对象都是resolve的状态，才会执行then方法