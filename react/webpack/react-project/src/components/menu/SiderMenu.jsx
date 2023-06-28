import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//引入antd的内容
import {
    PayCircleOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

const items = [
    {
        key: '/home',
        icon: <HomeOutlined />,
        label: <Link to={'/home'}>首页</Link>,
        authKey: '/home'
    },
    {
        key: '/users',
        icon: <UserOutlined />,
        label: <Link to={'/users'}>用户管理</Link>,
        authKey: '/home/user'
    },
    {
        key: '/roles',
        icon: <UserOutlined />,
        label: <Link to={'/roles'}>角色管理</Link>,
        authKey: '/home/role'
    },
    {
        key: '/shops',
        icon: <UserOutlined />,
        label: <Link to={'/shops'}>店铺管理</Link>,
        authKey: '/home/shop'
    },
    {
        key: '/home/product',
        icon: <PayCircleOutlined />,
        label: '商品管理',
        authKey: '/home/product',
        children: [
            { key: '/goodsList', label: <Link to={'/goodsList'}>商品列表</Link>, authKey: '/home/product/list' },
            { key: '/goodsType', label: <Link to={'/goodsType'}>商品分类</Link>, authKey: '/home/product/category' }
        ]
    },
    {
        key: '/home/datav',
        icon: <PayCircleOutlined />,
        label: '数据统计',
        authKey: '/home/datav',
        children: [
            { key: '/sales', label: <Link to={'/sales'}>销售金额</Link>, authKey: '/home/datav/sale' },
            { key: '/expend', label: <Link to={'/expend'}>支出流水</Link>, authKey: '/home/datav/flowers' }
        ]
    },
];

const SiderMenu = () => {
    //获取当前路由地址
    const { pathname } = useLocation();
    //从本地获取用户的菜单权限
    const [authPath, setAuthPath] = useState([]);

    useEffect(() => {
        const { role } = JSON.parse(localStorage.UserInfo || '{}')
        if (role) {
            setAuthPath(role.menus);
        }
    }, [])

    const filterMenus = (items) => {
        return items.reduce((data, item) => {
            if (authPath.includes(item.authKey)) {
                if (item.children) {
                    return [
                        ...data,
                        {
                            key: item.key,
                            icon: item.icon,
                            label: item.label,
                            children: filterMenus(item.children)
                        }
                    ]
                } else {
                    return [
                        ...data,
                        {
                            key: item.key,
                            icon: item.icon,
                            label: item.label,
                        }
                    ]
                }
            }

            return data;
        }, [])
    }

    //计算属性useMome
    const authMenus = useMemo(() => {

        return filterMenus(items);

        // eslint-disable-next-line
    }, [authPath])



    return (
        <Menu
            defaultSelectedKeys={pathname}
            mode="inline"
            theme="dark"
            items={authMenus}
        />
    )
}

export default SiderMenu