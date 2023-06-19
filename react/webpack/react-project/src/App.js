import { React, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.css'

//引入路由页组件
import LoginPage from './pages/login/LoginPage';
import IndexPage from './pages/index/IndexPage';
// import NotFound from './pages/404/NotFound';
const NotFound = lazy(() => import('./pages/404/NotFound'));

const App = () => {
	return (
		<div>
			<Suspense fallback={<p>页面加载中</p>}>
				<BrowserRouter>
					<Routes>
						<Route path='/login' element={<LoginPage />}></Route>
						<Route path='/' element={<IndexPage />}></Route>
						<Route path='*' element={<NotFound />}></Route>
					</Routes>
				</BrowserRouter>
			</Suspense>

		</div>
	)
}

export default App