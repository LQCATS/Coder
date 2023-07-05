

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import * as Icons from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

import useRequest from '../../hook/useRequest';

import React, { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom'


type MenuItem = Required<MenuProps>['items'][number];


const MenuSider = () => {

    useEffect(() => {
        getMenusDataAsync();
    }, []);

    //状态机获取菜单数据
    const { getMenusDataAsync, menusData } = useRequest();

    // console.log('menusData', menusData);

    //获取需要在左侧渲染的菜单数据
    const childrenMenus = (menusData: any) => {
        return menusData.reduce((data: any, item: any) => {
            if (item.children) {
                return [
                    ...item.children
                ]
            }
            return [
                ...data
            ]
        }, [])
    }

    //递归获取菜单组件需要的数据
    const menus = (menusData: any) => {
        return menusData.reduce((data: any, item: any) => {

            //处理图标名字的格式
            const iconName = item.icon?.replace(/-o$/, '').replace(/^[a-z]/, (letter: string) => {
                return letter.toUpperCase();
            }).replace(/-[a-z]/, (letter: string) => {
                return letter[1].toUpperCase();
            })


            if (item.children) {
                return [
                    ...data,
                    {
                        key: item.path,
                        label: item.name,
                        icon: iconName && React.createElement((Icons as any)[iconName + 'Outlined'] || UserOutlined),
                        children: menus(item.children)
                    }
                ]
            }
            return [
                ...data,
                {
                    key: item.path,
                    label: <Link to={item.path}>{item.name}</Link>,
                    icon: iconName && React.createElement((Icons as any)[iconName + 'Outlined'] || UserOutlined)
                }
            ]
        }, [])
    };

    const items: MenuItem[] = menus(childrenMenus(menusData))
    console.log('items', items);

    const { pathname } = useLocation();

    return (
        <div>
            <Menu
                defaultSelectedKeys={[pathname]}
                mode="inline"
                theme="dark"
                items={items}
            />
        </div>
    );
}

export default MenuSider