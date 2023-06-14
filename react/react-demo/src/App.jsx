import React, { Component } from 'react';
// import HelloWorld from './components/01-类组件/HelloWorld';
// import MyComponents from './components/02-jsx语法/MyComponents';
import MyCss from './components/04-css样式/MyCss';

//*引入优惠券页面的全局样式
import './components/优惠券页面/index.css';
//*引入优惠券页面的组件
import Header from './components/优惠券页面/Header';
import Tabs from './components/优惠券页面/Tabs';
import Search from './components/优惠券页面/Search';
import Tables from './components/优惠券页面/Tables';
import PageSize from './components/优惠券页面/PageSize';
import AddCoupon from './components/优惠券页面/AddCoupon';
import EditCoupon from './components/优惠券页面/EditCoupon';

export default class App extends Component {
	render() {
		return (
			<div className='root_warp'>
				{/* <div>App</div>
				<HelloWorld></HelloWorld>
				<MyComponents></MyComponents>
				<MyCss></MyCss> */}

				<Header></Header>
				<Tabs></Tabs>
				<Search></Search>
				<Tables></Tables>
				<PageSize></PageSize>
				<AddCoupon></AddCoupon>
				{/* <EditCoupon></EditCoupon> */}
			</div>

		)
	}
}

