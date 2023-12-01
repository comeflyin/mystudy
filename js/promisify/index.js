//node 内置的模块化系统 commonJS
// fs 文件模块 内置的
const { LOADIPHLPAPI } = require('dns')
const fs = require('fs')
// - 硬盘到内存
// - 文件大小
fs.readFile('./a.txt',(err,data) => {
  // 后端 稳定性第一
  if(err) {
    console.log(err);
    return
  }
  // Buffer 二进制流
  console.log(data.toString());
  fs.readFile('./b.txt','utf-8',((err,data2) => {
    if(err) {
      console.log(err);
      return
    }
    // Buffer 二进制流
  console.log(data2);
  }))
  fs.readFile('./c.txt','utf-8',((err,data3) => {
    if(err) {
      console.log(err);
      return
    }
    // Buffer 二进制流
  console.log(data3);
  }))
}) 

// fs.readFile('./a.txt','utf-8',((err,data) => {
//   // 后端 稳定性第一
//   if(err) {
//     console.log(err);
//     return
//   }
//   // Buffer 二进制流
//   console.log(data); // 第二个参数是utf-8就不用toString了
// })) 