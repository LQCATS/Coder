import { useRoutes } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";

import useRequest from "../hook/useRequest";

import { useEffect, useMemo, lazy, Suspense } from 'react';


const routes = [
    {
        path: '/login',
        element: <LoginPage />
    }
]

const RouterConfig = () => {

    useEffect(() => {
        getMenusDataAsync();
    }, []);

    //状态机的异步方法获取菜单数据（用户拥有的菜单权限）
    const { getMenusDataAsync, menusData } = useRequest();

    //这里的路径用了./*/*就是加载所有当前文件平级的文件夹下的所有文件
    const modules = import.meta.glob('../**/**');
    
    //懒加载用户的路由(通过后端返回的路径格式拼接需要的内容)
    const lazyLoad = (componentName: string) => {
        const componentPath = `../pages/${componentName}.tsx`;
        const Component = lazy(modules[componentPath] as any);

        return (
            <Suspense>
                <Component />
            </Suspense>
        )
    }

    //递归获取需要的children的数据
    const childrenRoutes = (childrenData: any) => {
        return childrenData.reduce((data: any, item: any) => {
            if (item.children) {
                return [
                    ...data,
                    ...childrenRoutes(item.children)
                ];
            }
            return [
                ...data,
                {
                    path: item.path,
                    element: lazyLoad(item.component),
                }
            ]
        }, []);
    };

    //计算属性，获取需要的菜单数据
    const routesData = useMemo(() => {

        return menusData.reduce((data: any, item: any) => {
            return [
                ...data,
                {
                    path: item.path,
                    element: lazyLoad(item.component),
                    children: childrenRoutes(item.children || [])
                }
            ]

        }, routes);

    }, [menusData]);

    const router = useRoutes(routesData);

    return (
        <div>
            {router}
        </div>
    )
}

export default RouterConfig;