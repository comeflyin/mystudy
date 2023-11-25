// const { memoize } = require("./memo.js");


var count = 0;

var fibonacci = function (n) {
  count++;
  return n < 2 ? n : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.time("fibonacci");
memoizedFibonacci(20);
console.log(count);
console.timeEnd("fibonacci");

function memoize(fn){
  if(typeof fn != 'function'){
    throw new Error('参数错误')
  } 
  var cache = {}  // key:value O(1) 空间换时间 
  return function(){
    // 唯一性
    var key = arguments.length + Array.prototype.join.call(arguments,',')
    // console.log(key)
    if(key in cache){
      return cache[key]
    }else{
      return cache[key] = fn.apply(this,arguments)
    }
    
  }
}