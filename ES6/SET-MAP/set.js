// let arr = [1,1,2,3,3]

// let obj = {
//   a: 1,
//   b: 1,
//   c: 1
// }

// 成员唯一性  Set

// let set = new Set([ 1, 2, 3, 4])

// console.log(set.values());

// 数组去重

// var arr = [1, 2, 1, 1, '1'];

// function unique(arr){
//   return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)];  // 注意set去重不能有对象，不能去重相同对象

// console.log(unique(arr));

let set = new Set([ 1, 2, 3, 4])
// set.delete(1)
// console.log(set);

// set.forEach((item, index, set) => {
//   console.log(item, index, set);
// })

// console.log(srt.has(1));

console.log(set.keys()); // Set Iterator { 1, 2, 3, 4 } 返回的是迭代器(Iterator是迭代器的意思)没有迭代器属性就不能遍历