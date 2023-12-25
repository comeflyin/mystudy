const fs = require('fs');

// const info = fs.readdirSync('./text');
// console.log(info);

// fs.mkdirSync('./text-dir/data/list',{ recursive:true }); // 创建目录 recursive:true 可以创建多层级

// fs.rmdirSync('./text-dir',{ recursive:true }); // 删除目录包含里面的子文件和子目录

fs.watch('./', { recursive: true }, (eventType, filename) => {
  console.log(`当前文件夹下${filename}文件变更为：${eventType}`);
});