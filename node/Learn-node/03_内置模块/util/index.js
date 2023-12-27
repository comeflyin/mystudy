const util = require('util');

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [1, 2, 3],
    e: () => {
      console.log(6)
    }
  }
}

// console.log(util.inspect(obj,{depth: 1})); // depth: Infinity 是全展开（展开层级）


// console.log(util.format('%s:%s', 'foo', 'bar')); // foo:bar
// console.log(util.format('%d + %d = %d', 1, 2, 3)); // 1 + 2 = 3
// console.log(util.format('hello %j',{name: 'Tom'})); 

// console.log(util.types.isAnyArrayBuffer([]));
// console.log(util.types.isDate(new Date()));

