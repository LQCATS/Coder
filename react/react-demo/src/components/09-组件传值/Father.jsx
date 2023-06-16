import React, { Component } from 'react'
import Child from './Child';

export default class Father extends Component {
    getChildData = (data) => {
        console.log('输出子传父的参数', data);
    }

    render() {
        return (
            <div>
                <Child name='张三' age={20} getChildData={this.getChildData}></Child>
                {/* <Child age={30}></Child> */}
            </div>
        )
    }
}
