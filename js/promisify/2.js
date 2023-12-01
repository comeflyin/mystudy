// fs 读取文件
// promise + then / async + await 解决方案
const fs = require('fs')
function readFileByPromise(filePath){
  return new Promise((resolve,reject) => {
    fs.readFile(filePath,'utf-8',(err,data) => {
      if(err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}
// readFileByPromise('./a.txt').then(data => {
//   console.log(data)
//   return readFileByPromise('./b.txt')
// }).then(data => {
//   console.log(data)
//   return readFileByPromise('./c.txt')
// }).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })
(async function() {
  try{
    const f1 = await readFileByPromise('./a.txt')
    const f2 = await readFileByPromise('./b.txt')
    const f3 = await readFileByPromise('./c.txt')
    console.log(f1,f2,f3)
  }catch(err){
    console.log(err)
  }
    
})()