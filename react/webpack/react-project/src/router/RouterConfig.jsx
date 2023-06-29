import { React, lazy } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
//引入一级路由页组件
import LoginPage from '@p/login/LoginPage';
import IndexPage from '@p/index/IndexPage';
//引入二级路由组件
import Home from '@p/index/home/Home';
import GoodsList from '@p/index/goods/GoodsList';
import GoodsType from '@p/index/goods/GoodsType';
import Users from '@p/index/users/Users';
import Roles from '@p/index/roles/RolesPage';
import GoodsAdd from '@p/index/goods/components/goodsList/GoodsAdd';
import GoodsUpdate from '@p/index/goods/components/goodsList/GoodsUpdate';
import ShopPage from '@p/index/shops/ShopPage';
import SalePage from '@p/index/data/SalePage';
import ExpendPage from '@p/index/data/ExpendPage';
import { useState } from 'react';
import { useEffect } from 'react';
//路由懒加载
const NotFound = lazy(() => import('@p/404/NotFound'));

const router = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path:'/',
        element:<Navigate to='/home'/>
    },
    {
        path: '/',
        element: <IndexPage />,
        authKey: '/home',
        children: [
            {
                path: 'home',
                element: <Home />,
                authKey: '/home'
            },
            {
                path: 'users',
                element: <Users />,
                authKey: '/home/user'
            },
            {
                path: 'roles',
                element: <Roles />,
                authKey: '/home/role'
            },
            {
                path: 'goodsList',
                element: <GoodsList />,
                authKey: '/home/product/list'
            },
            {
                path: 'goodsType',
                element: <GoodsType />,
                authKey: '/home/product/category'
            },
            {
                path: 'add/goods',
                element: <GoodsAdd />,
                authKey: '/home/product/list'
            },
            {
                path: 'update/goods/',
                element: <GoodsUpdate />,
                authKey: '/home/product/list'
            },
            //动态路由
            {
                path: 'update/goods/:id',
                element: <GoodsUpdate />,
                authKey: '/home/product/list'
            },
            {
                path: 'shops',
                element: <ShopPage />,
                authKey: '/home/shop'
            },
            {
                path: 'sales',
                element: <SalePage />,
                authKey: '/home/datav/sale'
            },
            {
                path: 'expend',
                element: <ExpendPage />,
                authKey: '/home/datav/flowers'
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]


const RouterConfig = () => {

    //获取当前页的路由，侦听路由路劲变化，触发useEffect生命周期
    const { pathname } = useLocation();

    //定义全局变量保存用户的菜单权限
    const [authPath, setAuthPath] = useState([]);

    //获取本地存储的菜单权限,保存在全局变量中
    useEffect(() => {
        const { role } = JSON.parse(localStorage.UserInfo || '{}');
        if (role) {
            setAuthPath(role.menus);
        }
    }, [pathname])


    //递归算法，将数组进行筛选
    const filterRouter = (router) => {

        return router.reduce((data, item) => {
            //如果authKey存在需要筛选
            if (item.authKey) {
                //后端返回的数据包含authKey，返回item的数据
                if (authPath.includes(item.authKey)) {
                    return [
                        ...data,
                        {
                            path: item.path,
                            element: item.element,
                            children: filterRouter(item.children || []),
                        }
                    ]

                }
                //后端返回的数据不包括authKey，直接返回data
                return data;
            }
            //authKey不存在,保留item
            return [
                ...data,
                item
            ]
        }, []);
    };

    
    //利用路由的hook方法生成路由组件
    const routes = useRoutes(filterRouter(router));

    return (
        <>
            {routes}
        </>
    )
}

export default RouterConfig