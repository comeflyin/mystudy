let arr = ['a', 'b' , 'c']
let obj = {
  a: 1,
  b: 2,
  c: 3
}
let str = 'abc'

let set = new Set([1, 2, 3, 4])

// for(let item of arr){  // 数组有迭代器属性可以for of 遍历
//     console.log(item);
//   }


// for(let item of str){  // 字符串有迭代器属性可以for of 遍历
//     console.log(item);
//   }


// for(let item of obj){ // 没有迭代器属性不能for of 遍历
//   console.log(item);
// }

for(let item of set){  // set有迭代器属性可以for of 遍历 set.keys()和set.values()都可以 set.entries()返回的是键值对也可以
    console.log(item);
  }