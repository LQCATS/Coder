import { createRouter, createWebHistory } from 'vue-router';
// import { useGlobalStore } from '../store/global';
import { useGlobalStore } from '../store/global';
import LoginPage from '../views/LoginPage.vue';

const routes = [
    {
        path: '/login',
        component: LoginPage
    }
]

const router = createRouter({
    routes,
    // history: createWebHashHistory(),// hash 模式
    history: createWebHistory(),// history 模式
});

//全局前置守卫
router.beforeEach((to) => {
    //如果用户访问登录页，直接通过，不需要执行后续的代码
    if (to.path === '/login') {
        return true;
    }

    //用户访问的不是登录页，判断用户是否登录
    const { username } = JSON.parse(localStorage.User || "{}");
    if (!username) {
        // 说明用户未登录
        return '/login';// 跳转到登录页
    }

    //访问其他页面，已登录
    const globalStore = useGlobalStore();

    //处理二级路由
    const childrenRoute = (child: any) => {
        return child.reduce((data: any, item: any) => {
            if (item.children) {
                return [
                    ...data,
                    ...childrenRoute(item.children)
                ]
            }
            return [
                ...data,
                {
                    path: item.path,
                    component: () => import("../views/" + item.component + '.vue'/* @vite-ignore */)
                    // component: () => import(`../views/${item.component}.vue`)
                }
            ]
        }, [])
    }

    //动态配置路由
    if (router.getRoutes().length === 1) {
        globalStore.menusData.forEach((item: any) => {
            if (item.path === '*') {
                router.addRoute({
                    path: '/:pathMatch(.*)',
                    component: () => import('../views/404/NotFound.vue')
                })
            } else {
                router.addRoute({
                    path: item.path,
                    component: () => import(`../views/${item.component}.vue`),
                    children: childrenRoute(item.children)
                })
            }
        })

        return to.fullPath;
    }

})

export default router;