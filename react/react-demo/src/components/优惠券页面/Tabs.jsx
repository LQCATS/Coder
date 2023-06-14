import React, { Component } from 'react'

export default class Tabs extends Component {
    render() {
        return (
            <div className='tabs_warp'>
                <div className='active'>优惠券列表</div>
                <div>领取记录</div>
                <div>额外扩展</div>
            </div>
        )
    }
}
