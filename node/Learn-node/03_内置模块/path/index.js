const { log } = require('console');
const path = require('path');

// console.log(path.join('a', 'b', 'c'));
// console.log(process.cwd()); // 所在项目的路径
// console.log(path.join(process.cwd(), 'Learn-node', '03_内置模块', 'path', 'index.js'));

// console.log(path.resolve('a', 'b', 'c'));

// console.log(path.dirname(process.cwd())); // 返回路径的目录名
// console.log(path.dirname('/a/b/c')); // /a/b

// console.log(path.basename('/a/b/c.js')); // c.js
// console.log(path.basename(__filename, '.js')); // index

// console.log(path.extname('a/b/c.js')); // .js

// console.log(path.normalize('/a//b/c.j'));
// console.log(path.normalize(__filename)); // 将路径格式化成标准的路径

// console.log(path.parse(__filename)); // 将路径转换成对象

console.log('foo\\bar\\baz'.split(path.sep));