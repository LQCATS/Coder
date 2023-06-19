import React, { Component } from 'react';
import Dialog from './Dialog';
import Context from './Context';
import events from './events';

export default class AddCoupon extends Component {
    state = {
        //新增的数据
        form: {
            title: '',
            price: '',
            imgSrc: "https://pic.616pic.com/ys_bnew_img/00/06/12/6QLoLGyq3C.jpg",
            receiveType: '通用券',
            state: '',
            useTime: '',
        }
    }
    onChange = (event) => {
        //获取当前输入的自定义input框的名字
        let getKey = event.target.getAttribute('data-name');
        //定义一个新的对象
        let newForm = {}
        //将新增的数据放入新的对象
        for (let item in this.state.form) {
            newForm[item] = this.state.form[item];
            newForm[getKey] = event.target.value;
        }
        console.log(newForm);
        this.setState({
            form: newForm
        })
    }
    render() {
        const { showAdd } = this.props;
        const { form } = this.state;
        // console.log(form);
        return (
            <Context.Consumer>
                {
                    (value) => {
                        return (
                            <div style={value.isShowAdd ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <Dialog>
                                    <h3>新增</h3>
                                    <div className='input_warp'>
                                        <div>名字</div>
                                        <input type="text" data-name='title' value={form.title} onChange={(event) => this.onChange(event)} />
                                    </div>
                                    <div className='input_warp'>
                                        <div>面值</div>
                                        <input type="text" data-name='price' value={form.price} onChange={(event) => this.onChange(event)} />
                                    </div>
                                    <div className='input_warp'>
                                        <div>图片</div>
                                        <input type="text" data-name='imgSrc' value={form.imgSrc} readOnly />
                                    </div>
                                    <div className='input_warp'>
                                        <div>时间</div>
                                        <input type="text" data-name='useTime' value={form.useTime} onChange={(event) => this.onChange(event)} />
                                    </div>
                                    <div className='input_warp'>
                                        <div>类型</div>
                                        <select data-name='receiveType' value={form.receiveType} onChange={(event) => this.onChange(event)}>
                                            <option value="通用券">通用券</option>
                                            <option value="商品券">商品券</option>
                                        </select>
                                    </div>
                                    <div className='radio_warp'>
                                        <div>状态</div>
                                        开启<input type="radio" checked={form.state === true} onChange={() => {
                                            this.setState({
                                                form: {
                                                    ...form,
                                                    state: true
                                                }
                                            })
                                        }} />
                                        关闭<input type="radio" checked={form.state === false} onChange={() => {
                                            this.setState({
                                                form: {
                                                    ...form,
                                                    state: false
                                                }
                                            })
                                        }} />
                                    </div>
                                    <button className='add_btn' onClick={() => {
                                        //触发事件，向原数组添加新增的数据
                                        events.emit('addCoupon', form);
                                        showAdd(false);
                                    }}>添加</button>
                                    <button onClick={() => {
                                        showAdd(false);
                                    }}>关闭</button>
                                </Dialog>
                            </div>
                        )
                    }
                }

            </Context.Consumer>

        )
    }
}
