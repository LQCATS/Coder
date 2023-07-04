
import { BrowserRouter } from 'react-router-dom';

import RouterConfig from './router/routerConfig';
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<RouterConfig />
			</BrowserRouter>
		</div>
	)
}

export default App