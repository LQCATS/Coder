import Vue from 'vue'
import App from './App.vue'
//引入路由数组
import routes from './router'
import store from './store'
import './plugins/element.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


Vue.config.productionTip = false;

if (window.__POWERED_BY_QIANKUN__) {
  //进入if是作为qiankun的子应用使用
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


let instance = null;  // Vue 实例对象
let router = null;   // Router 实例对象

// 渲染函数
function render() {

  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '/',
    routes
  })


  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
};

// 进入 if，则表示当前应用独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 生命周期函数
export async function bootstrap() {
  // console.log('Vue2 子应用初始化');
};

export async function mount(props) {
  // console.log('Vue2 子应用挂载');
  render(props);
};

export async function unmount() {
  // console.log('Vue2 子应用卸载');
  instance.$destroy();
  instance = null;
  router = null;
};
