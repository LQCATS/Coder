import React from 'react';
import { Link } from 'react-router-dom';

//引入antd的内容
import {
    PayCircleOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: <Link to={'/home'}>首页</Link>
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: <Link to={'/users'}>用户管理</Link>
    },
    {
        key: '3',
        icon: <UserOutlined />,
        label: <Link to={'/roles'}>角色管理</Link>
    },
    {
        key: '4',
        icon: <PayCircleOutlined />,
        label: '商品管理',
        children: [
            { key: '4-1', label: <Link to={'/goodsList'}>商品列表</Link> },
            { key: '4-2', label: <Link to={'/goodsType'}>商品分类</Link> }
        ]
    },
];

const SiderMenu = () => {

    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
            items={items}
        />
    )
}

export default SiderMenu