const fs = require('fs');

fs.appendFileSync('./data.txt', '举头望明月，低头写代码。'); // 原有的文件上追加内容

// fs.renameSync('./data1.txt', './data.md'); // 重命名文件

// fs.renameSync('./data.md', './pic/data.md'); // 移动文件

// fs.unlinkSync('./pic/data.md'); // 删除文件

// fs.rmSync('pic',{ recursive:true }); // 删除目录包含里面的子文件和子目录