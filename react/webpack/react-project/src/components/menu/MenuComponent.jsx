import React from 'react';
import Header from '../../components/header/HeaderComponent';
import Content from '../../components/content/ContentComponent';

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
const { Sider } = Layout;


const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'black',
    height: '100vh',
};



const MenuComponent = () => {

    const [collapsed, setCollapsed] = useState(false);

    //点击菜单显示后者隐藏，函数传递给header子组件，点击按钮触发事件
    function showMenu() {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header collapsed={collapsed} showMenu={showMenu}></Header>
                <Content></Content>
            </Layout>

        </>
    )
}

export default MenuComponent