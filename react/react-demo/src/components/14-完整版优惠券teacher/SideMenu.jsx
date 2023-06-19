import React, { Component } from 'react'

export default class SideMenu extends Component {
    state = {
        menuData: [
            { id: 1, title: '首页' },
            {
                id: 2, title: '商品管理',
                children: [
                    { id: '2-1', title: '商品分类' },
                    { id: '2-2', title: '商品列表' }
                ]
            },
            {
                id: 3, title: '营销管理',
                children: [
                    { id: '3-1', title: '优惠券' },
                    {
                        id: '3-2', title: '拼团管理',
                        children: [
                            { id: '3-2-1', title: '拼团商品' },
                            { id: '3-2-2', title: '拼团记录' },
                        ]
                    },
                    { id: '3-3', title: '积分' }
                ]
            }
        ]
    }

    // 递归函数（渲染多级菜单）
    menuRender = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <li key={item.id}>
                        {item.title}
                        <ul>
                            {
                                this.menuRender(item.children)
                            }
                        </ul>
                    </li>
                )
            }
            // 没有 children
            return (
                <li key={item.id}> {item.title}</li>
            )
        })
    }

    render() {
        const { menuData } = this.state;
        return (
            <ul>
                {
                    this.menuRender(menuData)
                }
            </ul>
        )
    }
}
