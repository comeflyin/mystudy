const fs = require('fs');

// console.log(fs.statSync('./data.txt'));

const info = fs.statSync('./target.md');

// console.log(info.isFile());
// console.log(info.isDirectory());