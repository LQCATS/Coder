import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrderList from './pages/OrderList'
const App = () => {
  return (
    <div>
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
        <Routes>
          <Route path='/list' element={<OrderList></OrderList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App