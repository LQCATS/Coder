import React, { Component } from 'react';

let name = 'zhangsan';
let inputType = 'text';
let age = 22;

function isAge() {
    if (age <= 18) {
        return '未成年'
    }

    return '成年'
}
let arr = [{ id: 1, name: '王五', age: 18 },
{ id: 2, name: '李四', age: 20 }];

let bookArr = [
    { id: 1, name: "《算法导论》", date: "2021-8-1", price: 85, count: 1 },
    { id: 2, name: "《UNIX编程艺术》", date: "2021-8-2", price: 69, count: 1 },
    { id: 3, name: "《编程珠玑》", date: "2021-8-3", price: 35, count: 1 },
    { id: 4, name: "《DOM编程艺术》", date: "2021-8-4", price: 75, count: 1 },
    { id: 5, name: "《nodejs深入浅出》", date: "2021-8-5", price: 105, count: 1 }
]

function getToalPrice() {
    return bookArr.reduce((data, item) => {
        return data + (item.count * item.price);
    }, 0)
}


export default class MyComponents extends Component {
    render() {
        return (
            <div>
                <h1>{name}</h1>
                <input type={inputType} />
                <h1>{age >= 20 ? '青年' : '少年'}</h1>
                <h1>{isAge()}</h1>
                <table className='mytable'>
                    <thead>
                        <tr>
                            <th>名字</th>
                            <th>年龄</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map(item => {
                                return <tr key={item.id}><td>{item.name}</td><td>{item.age}</td></tr>
                            })
                        }
                    </tbody>
                </table>
                <hr />



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
                            bookArr.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button>-</button>
                                            {item.count}
                                            <button>+</button>
                                        </td>
                                        <td>
                                            <button>移出</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div style={{ fontWeight: 700 }}>总价格：￥{getToalPrice()}</div>
                <hr />
            </div>
        )
    }
}
