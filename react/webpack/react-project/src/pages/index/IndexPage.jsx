import React from 'react';
//引入路由出口组件
import { Outlet } from 'react-router-dom';
//引入局部样式
import styles from './indexPage.module.less';
//引入子组件
import SiderMenu from '@c/menu/SiderMenu';

//引入antd的内容
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;



const IndexPage = () => {

    //antd的内容
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (

        <Layout className={styles.indexLayout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={styles.log} />
                {/* 侧边导航菜单组件 */}
                <SiderMenu></SiderMenu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
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
                    {/* 路由出口 */}
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>

    )
}

export default IndexPage