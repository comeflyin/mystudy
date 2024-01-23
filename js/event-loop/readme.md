# 进程和线程


# JS 单线程语言

- 进程： CPU运行指令和保存上下文所需要的时间

- 线程： 进程中的更小单位描述了一段指令执行所需的时间

## 浏览器新开一个tab页面 就是新开一个进程 
需要多个线程配合才能完成页面的展示
1. 渲染线程（GPU）
2. http请求线程
3. js引擎线程
4. 。。。

渲染线程(GPU) 和 JS 引擎线程 是互斥的

# JS 单线程
优点: 
1. 节省内存
2. 单线程没有锁的概念, 节约上下文切换的时间

# 异步
- 宏任务 (macrotask):
script
setTimeout
setInterval
setImmediate
I/O
UI-rendering

- 微任务 (microtask):
promise.then()
MutationObserver
Process.nextTick()

# event loop
1. 执行同步代码(这属于宏任务)
2. 当执行栈为空， 查询是否有异步代码需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务(这也叫下一轮的 event loop 的开启)
props
emit
v-model
refs
provide/inject
eventBus
vuex/pinia(状态管理⼯具)