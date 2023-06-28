import { React, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
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
import { useMemo } from 'react';
//路由懒加载
const NotFound = lazy(() => import('@p/404/NotFound'));

const router = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <IndexPage />,
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

    //定义全局变量保存用户的菜单权限
    const [authPath, setAuthPath] = useState([]);
    //获取本地存储的菜单权限,保存在全局变量中
    useEffect(() => {
        const { role } = JSON.parse(localStorage.UserInfo || '{}');
        if (role) {
            setAuthPath(role.menus);
        }
    }, [])


    //递归算法，将含有authKey属性的数组进行筛选
    const filterRouter = (router) => {

        return router.reduce((data, item) => {
            if (authPath.includes(item.authKey)) {
                if (item.children) {
                    return [
                        ...data,
                        {
                            path: item.path,
                            element: item.element,
                            children: filterRouter(item.children),
                        }
                    ];
                } 
                return [
                    ...data,
                    {
                        path: item.path,
                        element: item.element
                    }
                ];

            }

            return data;

        }, []);
    };

    //计算属性
    const authRouter = useMemo(() => {

        //先找到所有用户共有的，不需要设置权限的，再筛选需要设置权限的
        return router.reduce((data, item) => {
            if (item.children) {
                return [
                    ...data,
                    {
                        path: item.path,
                        element: item.element,
                        children: filterRouter(item.children)
                    }

                ];
            }
            return [
                ...data,
                {
                    path: item.path,
                    element: item.element
                }
            ];

        }, []);

        // eslint-disable-next-line
    }, [authPath])

    //利用路由的hook方法生成路由组件
    const routes = useRoutes(authRouter);

    return (
        <>
            {routes}
        </>
    )
}

export default RouterConfig