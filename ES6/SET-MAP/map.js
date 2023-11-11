// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// let arr = []
// obj[arr] = 3 // 对象的key只能是字符串或者symbol类型

let map = new Map([
  ['name', '老王']
])
// map.set({a:1}, 'hello')
// console.log(map.get({a:1})); // 取不到，因为引用类型的地址不一样

obj = {a:1} // 替换为obj就可以了

map.set(obj, 'hello')
console.log(map.get(obj))

// map.forEach((item, index, map) => {
//   console.log(item, index, map);
// })  // 老王    name   Map(2) { 'name' => '老王', { a: 1 } => 'hello' }
//     // hello { a: 1 } Map(2) { 'name' => '老王', { a: 1 } => 'hello' } // 这里的item 是 value ,index是key值 map是整个map对象

console.log(...map); // [ 'name', '老王' ] [ { a: 1 }, 'hello' ]  // 可以被解构，这里的...map是展开运算符，展开的是map的迭代器，map的迭代器是一个数组，数组里面有两个元素，第一个是key值，第二个是value值