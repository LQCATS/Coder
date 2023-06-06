import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

//引入uView主JS库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

//挂载接口到Vue实例上
import service from './apis/index.js';
Vue.prototype.$service = service;


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif