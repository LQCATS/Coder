import React, { Component } from 'react';



export default class Tables extends Component {
    state = {
        list: [
            {
                useTime: '30天',
                _id: "63bd14c40d58511b7c6b6b18",
                title: "测试优惠券",
                receiveType: "商品券",
                price: 30,
                state: false,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                "useTime": '730天',
                _id: "63ec3510aac28814ac2068ef",
                title: "测试优惠券",
                receiveType: '通用券',
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
            {
                useTime: '730天',
                _id: "6408742473fc62162ce86053",
                title: "测试优惠券",
                receiveType: "商品券",
                price: 30,
                state: true,
                imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg"
            },
        ]
    }
    del = (id) => {
        this.setState({
            list: this.state.list.filter(item => item._id != id),
        })
    }
    render() {
        const { list } = this.state;
        return (
            <div className='table_warp'>
                <button className='add_btn'>新增</button>
                <table>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>优惠券名称</th>
                            <th>优惠券图片</th>
                            <th>优惠券类型</th>
                            <th>面值</th>
                            <th>使用时间</th>
                            <th>是否开启</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(item => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <img src={item.imgSrc} alt="" />
                                        </td>
                                        <td>{item.receiveType}</td>
                                        <td>{item.price}</td>
                                        <td>{item.useTime}</td>
                                        <td>{item.state ? '开启' : '关闭'}</td>
                                        <td className='btn_td'>
                                            <button onClick={() => this.del(item._id)}>删除</button>
                                            <button>修改</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
