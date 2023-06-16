import React, { Component } from 'react';
import Dialog from './Dialog';
import Context from './Context';

export default class AddCoupon extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    (value) => {
                        console.log(value);
                        return (
                            <div style={value.isisShowAdd ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <Dialog>
                                    <h3>新增</h3>
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
                                    <button className='add_btn'>添加</button>
                                    <button>关闭</button>
                                </Dialog>
                            </div>
                        )
                    }
                }

            </Context.Consumer>

        )
    }
}
