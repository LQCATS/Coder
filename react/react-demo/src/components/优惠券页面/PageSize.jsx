import React, { Component } from 'react'

export default class PageSize extends Component {
    render() {
        return (
            <div className='page_warp'>

                <div>
                    <span>1页</span>/<span>共3页</span>
                </div>

                <select name="" id="">
                    <option value="">3条/每页</option>
                </select>

                <div className='btn'>1</div>
                <div className='btn'>2</div>
                <div className='btn'>3</div>

            </div>
        )
    }
}
