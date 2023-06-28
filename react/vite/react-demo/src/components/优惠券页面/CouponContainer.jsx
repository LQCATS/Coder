import React, { Component } from 'react';
import AllCouponComponents from './AllCouponComponents';
import Menu from './Menu';
import AddCoupon from './AddCoupon';
import EditCoupon from './EditCoupon';
import Context from './Context';

export default class CouponContainer extends Component {
    state = {
        isShowAdd: false, //控制新增模态框
        isShowEdit: false,//控制修改模态框
    }
    //新增模态框是否显示，组件传参函数，修改true or false
    showAdd = (isShow) => {
        this.setState({
            isShowAdd: isShow
        })
    }
    //修改模态框是否显示，组件传参函数，修改true or false
    showEdit = (isShow) => {
        this.setState({
            isShowEdit: isShow
        })
    }
    render() {
        const { isShowAdd, isShowEdit, addObj } = this.state;
        return (
            <>

                <div className='coupon_warp'>
                    <Context.Provider value={{ isShowAdd, isShowEdit }}>
                        <Menu></Menu>
                        <AllCouponComponents showAdd={this.showAdd} showEdit={this.showEdit}></AllCouponComponents>
                        <AddCoupon showAdd={this.showAdd}></AddCoupon>
                        <EditCoupon showEdit={this.showEdit}></EditCoupon>
                    </Context.Provider>

                </div>
            </>
        )
    }
}
