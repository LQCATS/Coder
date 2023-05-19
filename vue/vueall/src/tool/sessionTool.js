export default {
    loadRoute(listMenu, router, routes) {
        if (
            //登录画面进来的情况
            (router && !router.options.routes.find(item => 'Layout' == item.name)) ||
            //route/index.js进来的情况
            (!router && routes)
        ) {
            //先配置layout固定的路由
            let layoutRoute = {
                name: 'Layout',
                path: '/layout',
                component: () => import('@/views/Layout'),
                children: []
            }

            layoutRoute.children.push({
                name: 'Home',
                path: 'home',
                component: () => import('@/views/Home'),
            })

            //循环遍历菜单权限数组，动态渲染路由
            for (let first of listMenu) {
                for (let second of first.children) {
                    //添加动态路由项
                    let path = second.path.replace(/\/layout\//g, '');
                    layoutRoute.children.push({
                        path: path,
                        component: () => import(`@/views${second.component}`),
                    })
                }
            }

            // console.log('layoutRoute', layoutRoute);

            if (router) {
                //将路由配置放入路由配置数组中
                router.options.routes.push(layoutRoute);
                //让路由实例加载新的路由项
                router.addRoute(layoutRoute);
            } else {
                routes.push(layoutRoute);
            }

        }
    },

    
    //封装localStorage得操作
    setLocalItem(key, val) {
        if (key && val) {
            localStorage.setItem(key, val);
        }
    },
    getLocalItem(key) {
        if (key) {
            return localStorage.getItem(key);
        }
    },

    //封装判断是否登录
    isLogin() {
        let loginUser = this.getLocalItem('LoginUser');
        if (loginUser) {
            return true;
        } else {
            false;
        }
    },
    //取得登录用户的信息
    getLoginUser() {
        let loginUser = this.getLocalItem('LoginUser');
        if (loginUser) {
            loginUser = JSON.parse(loginUser);
            return loginUser
        } else {
            return {}
        }
    },

    //取得权限菜单
    getSysMenu() {
        let listMenu = this.getLocalItem('ListMenu');
        if (listMenu) {
            listMenu = Json.parse(listMenu);
            return listMenu
        } else {
            return [];
        }
    },

    //保存登录用户信息
    setLoginUser(userInfo) {
        this.setLocalItem('LoginUser', JSON.stringify(userInfo));
    },

    //保存权限菜单
    saveSysMenu(menu) {
        this.setLocalItem('ListMenu', JSON.stringify(menu));
    }
}