# 网易云音乐

- 界面
  npm init vite 开发脚手架
- 后台
  netsea 
  :3000
- 前后端分离全栈
- npm 换源
  npm config set registry https://registry.npmmirror.com
- npm i -D 开发阶段 devDependencies
- tailwindcss 60% css 开发 原子化css开发 
  - npm i -D tailwindcss postcss autoprefixer   
  - npx tailwindcss init -p  初始化
      npx 执行安装或者未安装的包
  - 声明开发目录下的所有层级中 .vue等格式文件支持tailwindcss
  - tailwind.css
    可以使用tailwind 类名
- 切页面
- 组件化思维
    - 根组件 App.vue 
    - layout 组件
      - Menu
      - Header

- vite.config.js 是 vite 工程化的配置文件
    - alias 短路径 
        @ -> ./src 回城卷轴 

- 企业级vue开发框架 element-plus PC版
    好多组件拿来就用 
    vue 是渐进式的MVVM 开发框架 开发模式 
    elemnt-plus 组件库 找到想要的组件

- vite 写了一段让Element plus 自动引入的代码

- 通用组件
    /components/common/
    不属于特定的组件，有极高的复用性 在多个项目中可以复用 
- 图标字体库
    - 要用到哪些图标？
      import {} from '@icon-park/vue-next'