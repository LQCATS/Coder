import React, { Component } from 'react'
import './index.css';

export default class CoverModal extends Component {
    render() {
        return (
            <div className='cover'>
                <div className='form'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
