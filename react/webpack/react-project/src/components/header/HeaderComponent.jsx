import React from 'react';

//引入antd需要的组件
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

import { Button, Layout, theme } from 'antd';
const { Header } = Layout;

//当前组件函数
const HeaderComponent = (props) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    //结构父级传递的参数
    const { collapsed, showMenu } = props;
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => {
                        //点击切换是否显示菜单，父级传递的函数
                        showMenu()
                    }}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </Header>
        </>
    )
}

export default HeaderComponent