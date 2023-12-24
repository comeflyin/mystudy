// console.log(globalThis === window);

global.useInfo = {
  name: 'zhangsan',
  age:18
}

// console.log(Object.getOwnPropertyNames(global));

// console.log(__dirname);
// console.log(__filename);


// process
// console.log(process);
// console.log(process.argv);
// console.log(process.cwd());
// console.log(process.env);
// console.log(process.pid);
// console.log(process.platform);  // 读取操作系统
// console.log(process.arch); // 读取cpu
// process.stdout.write('hello')
// process.stdout.write(' ')

// process.stdout.write('请输入内容：'); // 输出
// process.stdin.on('data',(data)=>{ // 写入
//   console.log(`用户输入了：${data}`);
// })