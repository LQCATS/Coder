import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//引入一级路由
import LoginPage from './pages/login/LoginPage';


const App = () => {
	return (

		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App