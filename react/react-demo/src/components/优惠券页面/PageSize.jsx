import React, { Component } from 'react'

export default class PageSize extends Component {
    render() {
        return (
            <div className='page_warp'>

                <div>
                    第1页/共3页
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
