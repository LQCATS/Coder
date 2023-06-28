import React, { Component } from 'react'
import events from './events';

export default class ChildB extends Component {
    componentDidMount() {
        //往 events 身上添加了一个 getData 的方法，后续谁调用该方法，就可以传值给组件B
        events.addListener('getData', (data) => {
            this.setState({
                data: data
            })
            console.log('接收兄弟组件传递的参数', data);
        })
    }
    state = {
        data: ''
    }
    render() {
        return (
            <div>
                ChildB
                <div>
                    {this.state.data}
                </div>
            </div>
        )
    }
}
