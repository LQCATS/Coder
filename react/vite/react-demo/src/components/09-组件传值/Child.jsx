import React, { Component } from 'react'
import pt from 'prop-types';
export default class Child extends Component {

    //设置传值数据默认值
    //static静态属性,绑定在class类上面的
    static defaultProps = {
        age: 18
    }
    //设置传值数据类型
    static propTypes = {
        age: pt.number
    }
    render() {
        const { age, name, getChildData } = this.props;
        return (
            <div>
                <p>{age}</p>
                <p>{name}</p>
                <button onClick={() => {
                    getChildData('李四')
                }}>传参</button>
            </div>
        )
    }
}
