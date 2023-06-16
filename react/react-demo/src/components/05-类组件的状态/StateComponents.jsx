import React, { Component } from 'react'

export default class StateComponents extends Component {

    state = {
        count: 1,
        msg: 'hello'
    }
    render() {
        const { count, msg } = this.state;

        return (
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.msg}</h1>
                <h2>{count}</h2>
                <h2>{msg}</h2>
                <button onClick={() => {
                    this.setState({
                        msg: '你好',
                        count: count + 1
                    }, () => {
                        console.log(this.state.count, this.state.msg);
                        console.log(count, msg);
                        console.log(this.setState);
                    });
                }}>点击修改</button>
            </div>
        )
    }
}
