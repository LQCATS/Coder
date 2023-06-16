import React, { Component } from 'react'

export default class Dialog extends Component {
    render() {
        return (
            <div className='dialog'>
                <div className='dialog_warp'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
