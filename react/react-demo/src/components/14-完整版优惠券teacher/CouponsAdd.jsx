import React, { Component } from 'react'
import CoverModal from './CoverModal'

export default class CouponsAdd extends Component {
    state = {
        coupon: {
            title: '',
            state: '',
            receiveType: '新人券'
        }
    }
    render() {
        const { coupon } = this.state;
        const { addCoupon } = this.props;
        return (
            <div>
                <CoverModal>
                    <h3>新增优惠券</h3>
                    <div>
                        <label>优惠券名称</label>
                        <input type="text" value={coupon.title} onChange={(e) => {
                            this.setState({
                                coupon: {
                                    ...coupon,
                                    title: e.target.value
                                }
                            })
                        }} />
                    </div>
                    <div>
                        <label>优惠券面值</label>
                        <input type="text" value={coupon.price || ''} onChange={(e) => {
                            this.setState({
                                coupon: {
                                    ...coupon,
                                    price: e.target.value
                                }
                            })
                        }} />
                    </div>
                    <div>
                        <label>优惠券类型</label>
                        <select value={coupon.receiveType} onChange={(e) => {
                            this.setState({
                                coupon: {
                                    ...coupon,
                                    receiveType: e.target.value
                                }
                            })
                        }}>
                            <option value="新人券">新人券</option>
                            <option value="通用券">通用券</option>
                            <option value="商品券">商品券</option>
                        </select>
                    </div>
                    <div>
                        <label>优惠券状态：</label>
                        <input type="radio" checked={coupon.state === true} onChange={() => {
                            this.setState({
                                coupon: {
                                    ...coupon,
                                    state: true
                                }
                            })
                        }} /><label>开启</label>
                        <input type="radio" checked={coupon.state === false} onChange={() => {
                            this.setState({
                                coupon: {
                                    ...coupon,
                                    state: false
                                }
                            })
                        }} /><label>关闭</label>
                    </div>
                    <div>
                        <button onClick={() => {
                            // 调用父组件传递的回调函数，并传值给父组件
                            addCoupon(this.state.coupon);
                        }}>确认新增</button>
                    </div>
                </CoverModal>
            </div>
        )
    }
}
