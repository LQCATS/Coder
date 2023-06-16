import React, { Component } from 'react';
import events from './events';
import GrandSon from './GrandSon';

export default class ChildA extends Component {
    state = {
        user: [
            { id: 1, name: '李四' },
            { id: 2, name: '张三' },
            { id: 3, name: '王五' },
        ]
    }
    render() {
        return (
            <div>
                ChildA
                <button onClick={() => {
                    events.emit('getData', '张三')
                }}>传参</button>

                <GrandSon></GrandSon>
            </div>
        )
    }
}
