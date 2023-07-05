import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    KeyOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Avatar, Popover, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import MenuSider from '../component/menu/MenuSider';

const { Header, Sider, Content } = Layout;

const items: {
    key: string,
    lable: any,
    icon: any,
    children?: []
}[] = [
        {
            key: '1',
            lable: <Link to='/profile'>个人中心</Link>,
            icon: <UserOutlined />
        },
        {
            key: '2',
            lable: <span>密码修改</span>,
            icon: <KeyOutlined />
        },
        {
            key: '3',
            lable: <span>系统定制</span>,
            icon: <SettingOutlined />
        },
        {
            key: '4',
            lable: <span>退出登录</span>,
            icon: <LogoutOutlined />
        },

    ]

const content = (
    <div>
        <Menu
            defaultSelectedKeys={['1']}
            style={{ width: '200px' }}
            mode="inline"
            items={items}
        />
    </div>
);

const MenuView = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [titleIsShow, setTitleIsShow] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { avatar, username } = JSON.parse(localStorage.User);

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* 侧边logo */}
                <div className='menu_logo'>
                    <img src="http://xawn.f3322.net:8002/distremote/static/img/logo.png" alt="" />
                    <h1 className='menu_logo_title' style={{ display: titleIsShow ? 'block' : 'none' }}>赤兔养车</h1>
                </div>
                {/* 侧边导航菜单 */}
                <MenuSider></MenuSider>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => {
                            setCollapsed(!collapsed);
                            setTitleIsShow(!titleIsShow);
                        }}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    {/* 用户头像 */}
                    <Popover content={content} trigger="hover">
                        <div>
                            <Avatar src={`http://xawn.f3322.net:8002/distremote/static/avatar/${avatar}`} />
                            <span className='userName'>{username}</span>
                        </div>
                    </Popover>

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