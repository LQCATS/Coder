import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login';
import Order from '@/views/Order';
import RoleManagement from '@/views/RoleManagement';
import Managers from '@/views/Managers';
import Power from '@/views/Power';
import NotFound from '@/views/NotFound';
import sessionTool from '@/tool/sessionTool';

//!安装路由插件到Vue中，也可以叫注册到vue中
Vue.use(VueRouter);

const routes = [
  //!404友好界面配置
  {
    path: '*',
    component: NotFound
  },
  //!首页配置
  {
    path: '/',
    redirect: '/login'
  },
  //!在routers中配置路由项
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  // {
  //   name: 'Layout',
  //   path: '/layout',
  //   component: () => import('@/views/Layout'),
  //   beforeEnter(to, from, next) {
  //     console.log('路由独享守卫beforeEnter');
  //     next();
  //   },
  //   children: [
  //     {
  //       name: 'Order',
  //       path: 'order',
  //       //!懒加载订单页面
  //       component: () => import('@/views/Order'),
  //     },
  //     {
  //       name: 'RoleManagement',
  //       path: 'roleManagement',
  //       component: () => import('@/views/RoleManagement'),
  //     },
  //     {
  //       name: 'Managers',
  //       path: 'managers',
  //       component: () => import('@/views/Managers'),
  //     },
  //     {
  //       name: 'Power',
  //       path: 'power',
  //       component: () => import('@/views/Power'),
  //     },
  //     {
  //       name: 'OrderDetails',
  //       path: 'orderDetails',
  //       component: () => import('@/views/OrderDetails'),
  //     },
  //     //动态路由传参
  //     // {
  //     //   name: 'OrderDetails',
  //     //   path: 'orderDetails/:id/:name?',
  //     //   component: () => import('@/views/OrderDetails'),
  //     //   props: true
  //     // },
  //     {
  //       name: 'GoodsType',
  //       path: 'goodsType',
  //       component: () => import('@/views/GoodsType'),
  //     },
  //     {
  //       name: 'Dictionary',
  //       path: 'dictionary',
  //       component: () => import('@/views/Dictionary'),
  //     },
  //     {
  //       name: 'Article',
  //       path: 'article',
  //       component: () => import('@/views/Article'),
  //     },
  //     {
  //       name: 'ArticleType',
  //       path: 'articleType',
  //       component: () => import('@/views/ArticleType'),
  //     },
  //     {
  //       name: 'Member',
  //       path: 'member',
  //       component: () => import('@/views/Member'),
  //     },
  //     {
  //       name: 'GoodsManage',
  //       path: 'goodsManage',
  //       component: () => import('@/views/GoodsManage'),
  //     },
  //   ]
  // },

]

//!动态加载路由项，layout
//获取本地储存的菜单权限数组ListMenu
let listMenu = sessionTool.getSysMenu();

if (listMenu && listMenu.length > 0) {
  // listMenu = JSON.parse(listMenu);
  // console.log(listMenu);

  //调用封装的动态加载路由方法
  sessionTool.loadRoute(listMenu, null, routes);


} else {
  console.log('未获取到路由');
}




// ! 实例化路由实例
const router = new VueRouter({
  routes
})

/**
 * 前置守卫
 * to：去到哪里的路由配置项
 * from：从哪里来的路由配置项
 * next：放行函数
 */
router.beforeEach((to, from, next) => {
  // console.log('前置守卫beforeEach');
  // let loginUser = localStorage.getItem('LoginUser');

  if (sessionTool.isLogin()) {
    //已经登录
    next();
  } else {
    //未登录
    if ('/login' == to.path) {
      next();
    } else {
      next('/login');
    }
  }
});

/**
 * 解析守卫
 */
router.beforeResolve((to, from, next) => {
  // console.log('解析守卫beforeResolve');
  next();
});

/**
 * 后置守卫
 */
router.afterEach((to, from) => {
  // console.log('后置守卫afterEach');
})
export default router
