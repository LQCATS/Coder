import React, { Component } from 'react'

export default class FormCompoments extends Component {
    state = {
        msg: '您好',
        page: 2,
        gender: '女',
        hobby: ['eating', 'play']
    }
    render() {
        const { msg, page, gender, hobby } = this.state;
        return (
            <div>
                <p>输入框</p>
                <input type="text" value={msg} onChange={(event) => {
                    this.setState({
                        msg: event.target.value
                    })
                }} />

                <p>下拉框</p>
                <select value={page} onChange={(e) => {
                    this.setState({
                        page: e.target.value
                    }, () => {
                        console.log(this.state.page);
                    })
                }}>
                    <option value="1">第一页</option>
                    <option value="2">第二页</option>
                    <option value="3">第三页</option>
                </select>


                <p>单选框</p>
                <input type="radio" checked={gender == '男'} onChange={() => {
                    this.setState({
                        gender: '男'
                    })
                }} />
                <label>男</label>
                <input type="radio" checked={gender == '女'} onChange={() => {
                    this.setState({
                        gender: '女'
                    })
                }} />
                <label>女</label>

                <p>复选框</p>
                <input type="checkbox" checked={hobby.includes('eating')} onChange={(e) => {
                    if (e.target.checked) {
                        this.setState({
                            hobby: [
                                ...hobby,
                                'eating'
                            ]
                        })
                    } else {
                        this.setState({
                            hobby: hobby.filter(item => item != 'eating')
                        })
                    }

                }} />吃饭
                <input type="checkbox" checked={hobby.includes('sleep')} onChange={(e) => {
                    if (e.target.checked) {
                        this.setState({
                            hobby: [
                                ...hobby,
                                'sleep'
                            ]
                        })
                    } else {
                        this.setState({
                            hobby: hobby.filter(item => item != 'sleep')
                        })
                    }

                }}/>睡觉
                <input type="checkbox" checked={hobby.includes('play')} onChange={(e) => {
                    if (e.target.checked) {
                        this.setState({
                            hobby: [
                                ...hobby,
                                'play'
                            ]
                        })
                    } else {
                        this.setState({
                            hobby: hobby.filter(item => item != 'play')
                        })
                    }

                }}/>打豆豆

            </div>
        )
    }
}
