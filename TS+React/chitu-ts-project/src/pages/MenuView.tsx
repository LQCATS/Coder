import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    KeyOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Avatar, Dropdown, Space, Breadcrumb } from 'antd';

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import MenuSider from '../component/menu/MenuSider';
import useRequest from '../hook/useRequest';

const { Header, Sider, Content } = Layout;



const MenuView = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [titleIsShow, setTitleIsShow] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { avatar, username } = JSON.parse(localStorage.User || '{}');

    const navigate = useNavigate();
    //获取本地的路由路径
    const { pathname } = useLocation();
    //面包屑--------------------------------------------------------------------------------------------------
    //获取用户的菜单权限数据
    const { menusData } = useRequest();
    const routerList: any = menusData[0]['children'];

    //找到当前菜单对应的路由对象
    const curPath1 = (menusData: any) => {
        return menusData.find((item: any) => {
            if (item.children) {
                return curPath1(item.children);
            }
            return item.path.includes(pathname);
        });
    }

    const curPathArr = [curPath1(routerList)];

    const curNameArr = (curPathArr: any) => {
        return curPathArr.reduce((data: any, item: any) => {
            if (item.children) {
                if (pathname.includes(item.path)) {
                    return [
                        ...data,
                        {

                            title: item.name,

                        },
                        ...curNameArr(item.children)
                    ];
                }
            } else {
                if (pathname.includes(item.path)) {
                    return [
                        ...data,
                        {

                            title: item.name,
                        }

                    ];
                }
            }
            return data;
        }, []);
    }

    // console.log(curNameArr(curPathArr));

    const breadcrumb = [{
        title: <span onClick={() => {
            navigate('/home')
        }}>首页</span>
    }];
    breadcrumb.push(...curNameArr(curPathArr));

    //-----------------------------------------------------------------------------------------------------------
    const items: {
        key: string,
        label: React.ReactElement,
    }[] = [
            {
                key: '1',
                label: (
                    <>
                        <Space size={'large'}>
                            <UserOutlined />
                            <Link to='/profile'>个人中心</Link>
                        </Space>


                    </>
                )
            },
            {
                key: '2',
                label: (
                    <>
                        <Space size={'large'}>
                            <KeyOutlined />
                            <span>密码修改</span>
                        </Space>

                    </>
                )
            },
            {
                key: '3',
                label: <>
                    <Space size={'large'}>
                        <SettingOutlined />
                        <span>系统定制</span>
                    </Space>
                </>,
            },
            {
                key: '4',
                label: <>
                    <Space size={'large'}>
                        <LogoutOutlined />
                        <span onClick={() => {
                            //清空本地储存
                            localStorage.removeItem('Token');
                            localStorage.removeItem('User');
                            //跳转到登录页面
                            navigate('/login');
                        }}>退出登录</span>
                    </Space>
                </>,
            },

        ]

    return (
        <>
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
                        <Dropdown menu={{ items }} placement="bottom" overlayStyle={{ width: '150px' }}>
                            <div>
                                <Avatar src={`http://xawn.f3322.net:8002/distremote/static/avatar/${avatar}`} />
                                <span className='userName'>{username}</span>
                            </div>
                        </Dropdown>


                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {/* 面包屑 */}
                        <Breadcrumb
                            items={breadcrumb}
                            style={{ cursor: 'pointer' }}
                        />
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>

        </>
    );
}

export default MenuView;