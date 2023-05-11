import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login';
import Order from '@/views/Order';
import RoleManagement from '@/views/RoleManagement';
import Managers from '@/views/Managers';
import Power from '@/views/Power';
import NotFound from '@/views/NotFound';

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
  {
    name: 'Layout',
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        name: 'Order',
        path: 'order',
        //!懒加载订单页面
        component: () => import('@/views/Order'),
      },
      {
        name: 'RoleManagement',
        path: 'roleManagement',
        component: () => import('@/views/RoleManagement'),
      },
      {
        name: 'Managers',
        path: 'managers',
        component: () => import('@/views/Managers'),
      },
      {
        name: 'Power',
        path: 'power',
        component: () => import('@/views/Power'),
      },
      {
        name: 'OrderDetails',
        path: 'orderDetails',
        component: () => import('@/views/OrderDetails'),
      },
      //动态路由传参
      // {
      //   name: 'OrderDetails',
      //   path: 'orderDetails/:id/:name?',
      //   component: () => import('@/views/OrderDetails'),
      //   props: true
      // },

    ]
  },

]

// ! 实例化路由实例
const router = new VueRouter({
  routes
})

export default router
