import React, { Component } from 'react'

export default class EditCoupon extends Component {
    render() {
        return (
            <div className='dialog'>
                <div className="dialog_warp">
                    <h3>修改</h3>
                    <div className='input_warp'>
                        <div>编号</div>
                        <input type="text" />
                    </div>
                    <div className='input_warp'>
                        <div>名字</div>
                        <input type="text" />
                    </div>
                    <div className='input_warp'>
                        <div>面值</div>
                        <input type="text" />
                    </div>
                    <div className='input_warp'>
                        <div>图片</div>
                        <input type="text" />
                    </div>
                    <div className='input_warp'>
                        <div>类型</div>
                        <select name="" id="">
                            <option value="">通用券</option>
                            <option value="">商品券</option>
                        </select>
                    </div>
                    <div className='radio_warp'>
                        <div>状态</div>
                        开启<input type="radio" name='status' />
                        关闭<input type="radio" name='status' />
                    </div>
                    <button className='add_btn'>修改</button>
                    <button>关闭</button>
                </div>
            </div>
        )
    }
}
