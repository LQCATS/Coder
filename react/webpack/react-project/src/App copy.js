import { React, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//引入antd
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

//引入一级路由页组件
import LoginPage from '@p/login/LoginPage';
import IndexPage from '@p/index/IndexPage';
//引入二级路由组件
import Home from '@p/index/home/Home';
import GoodsList from '@p/index/goods/GoodsList';
import GoodsType from '@p/index/goods/GoodsType';
import Users from '@p/index/users/Users';
import Roles from '@p/index/roles/RolesPage';
import GoodsAdd from '@p/index/goods/components/goodsList/GoodsAdd';
import GoodsUpdate from '@p/index/goods/components/goodsList/GoodsUpdate';
import ShopPage from '@p/index/shops/ShopPage';
import SalePage from '@p/index/data/SalePage';
import ExpendPage from '@p/index/data/ExpendPage';
//路由懒加载
const NotFound = lazy(() => import('@p/404/NotFound'));



const App = () => {
	return (
		<div>
			<ConfigProvider theme={{ token: { colorPrimary: 'pink' } }} locale={zhCN}>
				<Suspense fallback={<p>页面加载中</p>}>
					<BrowserRouter>
						<Routes>
							<Route path='/login' element={<LoginPage />}></Route>
							<Route path='/' element={<IndexPage />}>

								{/* 配置 IndexPage 的子路由 */}
								<Route path='home' element={<Home />}></Route>
								<Route path='users' element={<Users />}></Route>
								<Route path='roles' element={<Roles />}></Route>
								<Route path='goodsList' element={<GoodsList />}></Route>
								<Route path='goodsType' element={<GoodsType />}></Route>
								<Route path='add/goods' element={<GoodsAdd />}></Route>
								<Route path='update/goods/' element={<GoodsUpdate />}></Route>
								<Route path='shops' element={<ShopPage />}></Route>
								<Route path='sales' element={<SalePage />}></Route>
								<Route path='expend' element={<ExpendPage />}></Route>

								{/* 动态路由 */}
								<Route path='update/goods/:id' element={<GoodsUpdate />}></Route>

							</Route>
							<Route path='*' element={<NotFound />}></Route>
						</Routes>
					</BrowserRouter>
				</Suspense>
			</ConfigProvider>


		</div>
	)
}

export default App