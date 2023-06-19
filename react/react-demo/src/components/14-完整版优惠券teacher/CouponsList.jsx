import React, { Component } from 'react'
import events from './events';

export default class CouponsList extends Component {
    render() {
        const { couponsData } = this.props;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>优惠券名称</th>
                            <th>优惠券图片</th>
                            <th>优惠券类型</th>
                            <th>面值</th>
                            <th>有效期</th>
                            <th>是否开启</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            couponsData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <img width="100" src={item.imgSrc} alt="" />
                                    </td>
                                    <td>{item.receiveType}</td>
                                    <td>{item.price}</td>
                                    <td>{item.time}</td>
                                    <td>{item.state ? '开启' : '关闭'}</td>
                                    <td>
                                        <button onClick={() => {
                                            // 打开弹窗
                                            this.props.openUpdateModal();
                                            events.emit('getUpdateData', item);
                                        }}>修改</button>
                                        <button>删除</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
