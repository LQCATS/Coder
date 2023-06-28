import React, { Component, createRef } from 'react'
import styles from './ToDoList.module.css';

export default class ToDoList extends Component {
    state = {
        list: [
            { id: 1, name: '学习js', status: 0 },
            { id: 2, name: '学习java', status: 0 },
            { id: 3, name: '学习jweb', status: 0 }
        ],
        btnList: [
            { id: 1, name: '全部', tag: 1 },
            { id: 2, name: '已完成', tag: 0 },
            { id: 3, name: '未完成', tag: 0 }
        ],
        currentId: 1,

    }
    inputRef = createRef();
    addList = () => {
        const inputValue = this.inputRef.current.value;
        const { list } = this.state;
        this.setState({
            list: [
                ...list,
                {
                    id: list.length + 1,
                    name: inputValue,
                    status: 0
                }
            ],

        })
    }
    doWork = (id) => {
        const { list } = this.state;
        this.setState({
            list: list.map(item => {
                if (id == item.id) {
                    return {
                        ...item,
                        status: !item.status
                    }
                }
                return item;
            })
        })
    }
    get filterList() {
        const { list, currentId } = this.state;
        switch (currentId) {
            case 1:
                return list;
            case 2:
                return list.filter(item => item.status);
            case 3:
                return list.filter(item => !item.status)
        }
    }
    get total() {
        return this.filterList.length;
    }
    get doTotal() {
        return this.filterList.filter(item => item.status).length
    }
    render() {
        const { list, btnList, currentId } = this.state
        return (
            <div>
                <div>
                    <input type="text" ref={this.inputRef} />
                    <button onClick={this.addList}>新增</button>
                </div>
                <ul>
                    {
                        this.filterList.map(item => (
                            <li key={item.id} className={item.status ? styles.done : ''} onClick={() => this.doWork(item.id)}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>

                <div>
                    {
                        btnList.map(item => {
                            if (currentId == item.id) {
                                return <span key={item.id}>{item.name}</span>
                            } else {
                                return <a href="#" key={item.id} onClick={(e) => {
                                    //默认阻止a链接的跳转行为
                                    e.preventDefault();
                                    this.setState({
                                        currentId: item.id
                                    })
                                }}>{item.name}</a>
                            }
                        })
                    }
                    <span>{this.doTotal}/{this.total}</span>
                </div>
            </div>
        )
    }
}
