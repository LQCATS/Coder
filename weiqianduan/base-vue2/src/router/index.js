import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import indexVue from '../views/index/index.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: 'index',
				name: 'index',
				component: indexVue
			}
		]
	},
	// 给子应用提供的路由
	{
		path: '/*',
		component: HomeView,
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
