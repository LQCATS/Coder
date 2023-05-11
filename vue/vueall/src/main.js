import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/filter';

Vue.config.productionTip = false;

// !配置elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// !加载elementui组件，也可以称为安装elementui组件到vue框架中。
Vue.use(ElementUI);


import order from '@/apis/order';
Vue.prototype.$order = order;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
