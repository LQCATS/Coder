import React, { Component } from 'react'

export default class ClickComponents extends Component {
    sayHello = (name) => {
        console.log('Hello', name);
    }
    render() {
        return (
            <div>
                <button onClick={(event) => {
                    console.log('绑定事件', event);
                }}>按钮</button>

                <button onClick={this.sayHello}>按钮</button>

                <button onClick={() => {
                    this.sayHello('张三');
                }}>张三</button>
                <button onClick={() => {
                    this.sayHello('李四');
                }}>李四</button>

                <button onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}>按钮</button>
            </div >
        )
    }
}
