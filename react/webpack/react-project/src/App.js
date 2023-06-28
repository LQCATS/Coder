import { React, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

//引入antd
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import RouterConfig from './router/RouterConfig';



const App = () => {
	return (
		<div>
			<ConfigProvider theme={{ token: { colorPrimary: 'pink' } }} locale={zhCN}>
				<Suspense fallback={<p>页面加载中</p>}>
					<BrowserRouter>
						<RouterConfig></RouterConfig>
					</BrowserRouter>
				</Suspense>
			</ConfigProvider>


		</div>
	)
}

export default App