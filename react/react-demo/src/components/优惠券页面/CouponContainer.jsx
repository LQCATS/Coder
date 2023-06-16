import React, { Component } from 'react';
import AllCouponComponents from './AllCouponComponents';
import Menu from './Menu';
import AddCoupon from './AddCoupon';
import EditCoupon from './EditCoupon';
import Context from './Context';

export default class CouponContainer extends Component {
    state = {
        isShowAdd: false,
        isShowEdit: false
    }
    render() {
        const { isShowAdd, isShowEdit } = this.state;
        return (
            <>

                <div className='coupon_warp'>
                    <Context.Provider value={{ isShowAdd: isShowAdd }}>
                        <Menu></Menu>
                        <AllCouponComponents></AllCouponComponents>
                        <AddCoupon></AddCoupon>
                        <EditCoupon></EditCoupon>
                    </Context.Provider>

                </div>
            </>
        )
    }
}
