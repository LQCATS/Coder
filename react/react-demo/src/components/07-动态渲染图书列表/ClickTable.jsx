import React, { Component } from 'react'

export default class ClickTable extends Component {

    state = {
        list: [
            { id: 1, name: "《算法导论》", date: "2021-8-1", price: 85, count: 1 },
            { id: 2, name: "《UNIX编程艺术》", date: "2021-8-2", price: 69, count: 1 },
            { id: 3, name: "《编程珠玑》", date: "2021-8-3", price: 35, count: 1 },
            { id: 4, name: "《DOM编程艺术》", date: "2021-8-4", price: 75, count: 1 },
            { id: 5, name: "《nodejs深入浅出》", date: "2021-8-5", price: 105, count: 1 }
        ]
    }
    //删除
    del = (id) => {
        //数组删除使用fliter
        this.setState({
            list: this.state.list.filter(item => item.id != id)
        })
    }
    //增加
    increase = (id) => {
        //数组修改map
        this.setState({
            list: this.state.list.map(item => {
                if (id == item.id) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })
        })
    }
    //减少
    decrease = (id) => {
        //减少到0 就删除
        let bookItem = this.state.list.find(item => id == item.id);
        //当数量等于0的时候点击减少，删除数据
        if (bookItem.count == 1) {
            this.del(id);
        } else {
            this.setState({
                list: this.state.list.map(item => {
                    if (id == item.id) {
                        return {
                            ...item,
                            count: item.count - 1
                        }
                    }
                    return item
                })
            })
        }
    }
    //求和
    get toalPrice() {
        return this.state.list.reduce((data, item) => {
            return data + (item.count * item.price);
        }, 0)
    }


    render() {
        const { list } = this.state;
        return (
            <div>
                <table style={{ border: "1px solid red", textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th colSpan='2'>书籍名称</th>
                            <th>出版日期</th>
                            <th>价格</th>
                            <th>购买数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => this.decrease(item.id)}>-</button>
                                            {item.count}
                                            <button onClick={() => this.increase(item.id)}>+</button>
                                        </td>
                                        <td>
                                            <button onClick={() => this.del(item.id)}>移出</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div style={{ fontWeight: 700 }}>总价格：￥{this.toalPrice}</div>
            </div>
        )
    }
}
