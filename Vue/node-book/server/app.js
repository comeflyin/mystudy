const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); // 让koa能解析post参数

const user = require('./routes/user')

app.use(bodyParser()) // 使用bodyParser中间件

// 主要逻辑
// const main = (ctx) => {
//   ctx.body = 'hello world'
// } 

app.use(user.routes(),user.allowedMethods())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})


