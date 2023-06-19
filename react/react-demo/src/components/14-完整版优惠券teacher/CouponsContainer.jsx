import React, { Component } from 'react'
import SideMenu from './SideMenu'
import CouponsList from './CouponsList'
import CouponsAdd from './CouponsAdd'
import CouponsUpdate from './CouponsUpdate'

// 父组件
export default class CouponsContainer extends Component {
    state = {
        couponsData: [
            {
                time: '30天',
                id: "1",
                title: "测试优惠券",
                receiveType: "商品券",
                price: 300,
                state: false,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                time: '30天',
                id: "2",
                title: "跨店满减",
                receiveType: "通用券",
                price: 300,
                state: true,
                imgSrc: "https://pic2.zhimg.com/v2-12943651b8b7fb48144151e638c8ed81_1440w.jpg?source=172ae18b"
            },
            {
                time: '30天',
                id: "3",
                title: "新用户券",
                receiveType: "新人券",
                price: 300,
                state: true,
                imgSrc: "https://pic2.zhimg.com/v2-12943651b8b7fb48144151e638c8ed81_1440w.jpg?source=172ae18b"
            },
            {
                time: '30天',
                id: "4",
                title: "满100减20",
                receiveType: "新人券",
                price: 300,
                state: true,
                imgSrc: "https://pic2.zhimg.com/v2-12943651b8b7fb48144151e638c8ed81_1440w.jpg?source=172ae18b"
            },
            {
                time: '30天',
                id: "5",
                title: "数码产品券",
                receiveType: "商品券",
                price: 300,
                state: true,
                imgSrc: "https://pic2.zhimg.com/v2-12943651b8b7fb48144151e638c8ed81_1440w.jpg?source=172ae18b"
            },
            {
                time: '30天',
                id: "6",
                title: "跨店满减",
                receiveType: "通用券",
                price: 300,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                time: '30天',
                id: "7",
                title: "中秋现礼券",
                receiveType: "新人券",
                price: 300,
                state: true,
                imgSrc: "https://pic2.zhimg.com/v2-12943651b8b7fb48144151e638c8ed81_1440w.jpg?source=172ae18b"
            }
        ],
        // 新增弹窗的状态
        addOpen: false,
        // 修改弹窗的状态
        updateOpen: false,

        newId: 8
    }

    // 新增
    addCoupon = (addData) => {
        this.setState({
            couponsData: [
                ...this.state.couponsData,
                {
                    id: this.state.newId,
                    ...addData
                }
            ],
            newId: this.state.newId + 1,
            addOpen: false
        })
    }
    // 修改
    updateCoupon = (updateData) => {
        this.setState({
            couponsData: this.state.couponsData.map(item => {
                if (item.id == updateData.id) {
                    return {
                        ...updateData
                    };
                }
                return item;
            }),
            updateOpen: false
        })
    }

    // 打开修改弹窗
    openUpdateModal = () => {
        this.setState({
            updateOpen: true
        })
    }

    render() {
        const { couponsData, addOpen, updateOpen } = this.state;
        return (
            <div>
                <SideMenu></SideMenu>
                <div>
                    <h1>优惠券页面</h1>
                    <button onClick={() => {
                        this.setState({
                            addOpen: true
                        })
                    }}>新增</button>
                    {addOpen ? <CouponsAdd addCoupon={this.addCoupon}></CouponsAdd> : null}

                    {/* 修改弹窗 */}
                    <CouponsUpdate updateOpen={updateOpen} updateCoupon={this.updateCoupon}></CouponsUpdate>


                    <CouponsList couponsData={couponsData} openUpdateModal={this.openUpdateModal}></CouponsList>
                </div>
            </div>
        )
    }
}
