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
import StateComponents from './components/05-类组件的状态/StateComponents';
import ClickComponents from './components/06-类组件的事件/ClickComponents';
import ClickTable from './components/07-动态渲染图书列表/ClickTable';
import ToDoList from './components/08-数组新增todolist/ToDoList';
import AllCouponComponents from './components/优惠券页面/AllCouponComponents';

export default class App extends Component {
	render() {
		return (
			<div className='root_warp'>
				{/* 第一天学习 */}
				{/* <div>App</div>
				<HelloWorld></HelloWorld>
				<MyComponents></MyComponents>
				<MyCss></MyCss> */}

				{/* 优惠券页面 */}
				{/* <Header></Header>
				<Tabs></Tabs>
				<Search></Search>
				<Tables></Tables>
				<PageSize></PageSize>
				<AddCoupon></AddCoupon>
				<EditCoupon></EditCoupon> */}
				<AllCouponComponents></AllCouponComponents>

				{/* 第二天学习 */}
				{/* <StateComponents></StateComponents> */}
				{/* <ClickComponents></ClickComponents> */}
				{/* <ClickTable></ClickTable> */}
				{/* <ToDoList></ToDoList> */}
			</div>

		)
	}
}

