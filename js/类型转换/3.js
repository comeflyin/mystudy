// 一元运算符
+ '1'

// 二元运算符
1 + '1'

// console.log(1 + {}); // 1[object Object]
// console.log([] + []); // 空字符串
// console.log([] + {}); // [object Object]

// console.log({} + {}); // [object Object][object Object] 浏览器里直接写 {} + {} 会得到NaN
console.log(+[] + {}); // [object Object]
