import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import MenuSider from '../component/menu/MenuSider';

const { Header, Sider, Content } = Layout;

const MenuView = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* 侧边logo */}
                <div className='menu_logo'>
                    <img src="http://xawn.f3322.net:8002/distremote/static/img/logo.png" alt="" />
                    <h1 className='menu_logo_title'>赤兔养车</h1>
                </div>
                {/* 侧边导航菜单 */}
                <MenuSider></MenuSider>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default MenuView