import React, { Component } from 'react'

export default class Menu extends Component {
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
    render() {
        return (
            <div className='menu_warp'>Menu</div>
        )
    }
}
