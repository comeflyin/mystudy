function add(a,b,c){
  return a + b + c
}

// 函数的柯里化
function curry(fn){
  // 收集参数 闭包 arr 
  // 到位了 运行 arr.length === fn.length fn(...arr)
  // 返回收集参数的函数
  // rest 运算符 args是数组 闭包空间 自由变量
  // args
  let judge = (...args) => {
    // let a = 1
    if(args.length === fn.length){
      return fn(...args)
    }
    // 返回函数，继续收集参数
    return (...arg) => judge(...args,...arg)
  }
  return judge
}

// 有时候不会一次性给到，前端的交互
// js curry 柯里化
// 每次接受一个参数
console.log(add.length);
// add(1)(2)(3)
const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3));