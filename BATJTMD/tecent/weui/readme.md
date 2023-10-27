# 企业级界面开发规划

- html css js 功能分离
- css 架构
    - reset.css 样式重置
        去除浏然器之间的样式区别，无差别页面显示
        box-sizing 盒子大小的计算方式
        浏览器好多家 edge chrome 内核
        文档流 body开始
        盒子在页面上占了多少呢？ 
        公摊
        标准盒子模型 = content + padding + border + margin
        IE盒模型 = content（自动缩放） + padding + border + margin
        两种盒模型 
    - base.css 通用样式

- css命名套路
    - page
        __hd __bd __ft
    - btn panel cell 
    - 框架组件 BEM
- css + 兄弟选择器
- google 图片格式
    base64 图片 小一点简单的  在css文件里 
    jpg|png|jpeg|wtt|webp 比较大 请求的并发