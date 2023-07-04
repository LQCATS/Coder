

import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import useRequest from '../../hook/useRequest';

import { useEffect } from 'react';

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
            if (item.children) {
                return [
                    ...data,
                    {
                        key: item.path,
                        label: item.name,
                        // icon: item.icon,
                        children: menus(item.children)
                    }
                ]
            }
            return [
                ...data,
                {
                    key: item.path,
                    label: <Link to={item.path}>{item.name}</Link>,
                    // icon: item.icon
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