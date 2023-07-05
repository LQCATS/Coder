

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import * as Icons from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

import useRequest from '../../hook/useRequest';

import { Link, useLocation } from 'react-router-dom'
import React, { useMemo } from 'react';



type MenuItem = Required<MenuProps>['items'][number];


const MenuSider = () => {

    //状态机获取菜单数据
    const { menusData } = useRequest();

    //递归获取菜单组件需要的数据
    const authItem = (data: any) => {
        return data.map((item: any) => {
            //处理图标名字的格式
            const iconName = item.icon?.replace(/-o$/, '').replace(/^[a-z]/, (letter: string) => {
                return letter.toUpperCase();
            }).replace(/-[a-z]/, (letter: string) => {
                return letter[1].toUpperCase();
            })

            if (item.children) {
                return {
                    key: item.path,
                    label: item.name,
                    icon: iconName && React.createElement((Icons as any)[iconName + 'Outlined'] || UserOutlined),
                    children: authItem(item.children)
                }
            }

            return {
                key: item.path,
                label: <Link to={item.path}>{item.name}</Link>,
                icon: iconName && React.createElement((Icons as any)[iconName + 'Outlined'] || UserOutlined),
            }
        });
    };


    //获取需要在左侧渲染的菜单数据
    const menusComponent = useMemo(() => {
        const menusChildren = menusData.find((item: any) => item.path === '/');
        return authItem((menusChildren as any).children);
    }, [menusData])

    const items: MenuItem[] = menusComponent;

    const { pathname } = useLocation();

    return (
        <div>
            <Menu
                defaultSelectedKeys={[pathname]}
                defaultOpenKeys={[pathname]}
                mode="inline"
                theme="dark"
                items={items}
            />
        </div>
    );
}

export default MenuSider;