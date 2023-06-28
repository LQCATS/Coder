import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className='serach_warp'>
                <div>
                    <select name="" id="">
                        <option value="">请选择搜素的数据</option>
                    </select>
                    <input type="text" placeholder='请输入搜索的值'/>
                    <button className='search_btn'>搜索</button>
                </div>
            </div>
        )
    }
}
