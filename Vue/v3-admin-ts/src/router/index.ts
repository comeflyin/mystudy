// 后台系统 History html5.pushState 公司内部, chrome
// 用户端 移动项目没这个问题- PC 端 ，政府、企业 需要考虑兼容性 Hash
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { usePermissStore } from '../store/permiss.ts'
import Home from '../views/Home.vue' // 直接引入 会有开销 会拖慢页面的加载速度

// 路由的配置 后台管理系统
// 设置数组
// admin [1,2,3]
// user [1]
// useRoute 拿到当前路由对象找到 meta.permiss 你要访问的页面的权限 includes true 

// const data = usePermissStore() // 路由启动前不能使用pinia 
// console.log(data);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard' // 重定向 30x
  },
  {
    path: '/',
    name: 'Home', // useRoute(拿到一个对象，任何一个路由都是一个对象) push
    component: Home, // layout
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { // 标题信息
          title: '系统首页', // 路由守卫 设置标题
          permiss: '1', // 权限: 哪些页面可以看？
        },
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
          title: '登录', // 路由守卫 设置标题
        },
      },
      {
        path: '/table',
        name: 'BaseTable',
        meta: { // 标题信息
          title: '表格', // 路由守卫 设置标题
          permiss: '2', // 权限: 哪些页面可以看？
        },
        // 动态挂载路由 异步加载
        component: () => import('../views/Table.vue')
      },
    ]
  },
  {
    path: '/403',
    name: '403',
    meta: { // 标题信息
      title: '没有权限', // 路由守卫 设置标题
    },
    // 动态挂载路由 异步加载
    component: () => import('../views/403.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => { // 路由守卫
  document.title = `${to.meta.title} | 后台管理系统`;
  // 登录后的用户角色
  const role = localStorage.getItem('ms_username');
  // const role = 'admin';
  const permiss = usePermissStore();
  if(!role && to.path !== '/login'){
    next('/login');
  }else if(to.meta.permiss && !permiss.roleList[role].includes(to.meta.permiss)){
    next('/403')
  }else{
    next();
  }
})

export default router