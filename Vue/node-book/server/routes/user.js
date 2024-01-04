const Router = require('koa-router')
const router = new Router()
const { userLogin } = require('../controllers/mysqlControl.js')

// 定义登录接口
router.post('/login',async (ctx) => {
  // 获取到前端传递的账号密码，去数据库中校验账号密码的正确性
  const { username, password } = ctx.request.body
  try{
    const result = await userLogin(username,password)
    console.log(username,password);
    if(result.length){ // 账号密码存在
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
      }
      ctx.body = {
        code: '8000',
        data: data,
        msg: '登录成功',
      }
    }else{
      ctx.body = {
        code: '8004',
        data: 'error',
        msg: '账号或密码错误',
      }
    }
  }catch(error){
    ctx.body = {
      code: '8005',
      data: error,
      msg: '服务器异常'
    }
  }
})

// 定义注册接口
router.post('/register',async (ctx) => {
  // 拿到前端传过来的 username，password，nickname
  // 去数据库中校验 username 是否存在，如果存在，返回用户名已存在，如果不存在，注册成功
  // 往数据库中植入一条新的数据
  const { username, password, nickname } = ctx.request.body
  try{
    
    if(result.length){ // 账号已存在
      ctx.body = {
        code: '8001',
        data: 'error',
        msg: '用户名已存在',
      }
    }else{
      const result = await userRegister(username,password,nickname)
      if(result.affectedRows){
        ctx.body = {
          code: '8000',
          data: 'success',
          msg: '注册成功',
        }
      }else{
        ctx.body = {
          code: '8002',
          data: 'error',
          msg: '注册失败',
        }
      }
    }
  }catch(error){
    ctx.body = {
      code: '8005',
      data: error,
      msg: '服务器异常'
    }
  }
})

module.exports = router
