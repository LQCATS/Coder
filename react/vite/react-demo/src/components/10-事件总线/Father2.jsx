import React, { Component } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import Context from './context';
export default class Father2 extends Component {
    state = {
        user: [
            { id: 1, name: '李四' },
            { id: 2, name: '王五' }
        ]
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state.user}>
                    <ChildA></ChildA>
                </Context.Provider>
                <ChildB></ChildB>
            </div>
        )
    }
}
