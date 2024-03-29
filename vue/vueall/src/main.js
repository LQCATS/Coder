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

//!全局注册接口
import order from '@/apis/order';
Vue.prototype.$order = order;
import managers from '@/apis/managers';
Vue.prototype.$managers = managers;
import goods from '@/apis/goods';
Vue.prototype.$goods = goods;
import dictionary from '@/apis/dictionary';
Vue.prototype.$dictionary = dictionary;
import article from '@/apis/article';
Vue.prototype.$article = article;
import power from '@/apis/power';
Vue.prototype.$power = power;
import role from '@/apis/role';
Vue.prototype.$role = role;
import login from '@/apis/login';
Vue.prototype.$login = login;

//!全局注册组件
import SingleUpload from '@/components/form/SingleUpload';
Vue.component('CSUpload', SingleUpload);
import Paging from '@/components/common/Paging';
Vue.component('CPaging', Paging);
import Radio from '@/components/form/Radio';
Vue.component('CRadio', Radio);
import Input from '@/components/form/Input';
Vue.component('CInput', Input);
import Select from '@/components/form/Select';
Vue.component('CSelect', Select);
import DeptControl from '@/components/form/DeptControl';
import sessionTool from './tool/sessionTool';
Vue.component('CDept', DeptControl);

/**
 * 自定义权限按钮指令
 */

Vue.directive('btnPower', {
  inserted(el, binding, vnode, oldnode) {
    let curPath = vnode.context.$route.path;
    let btnPower = sessionTool.getLocalItem('BtnPower');
    if (btnPower) {
      btnPower = JSON.parse(btnPower);
      let btnName = binding.value;
      let isFind = false;
      for (let powerBtn of btnPower) {
        let key = curPath;
        let exist = powerBtn[key].find(item => btnName == item);
        if (exist) {
          isFind = true;
          break;
        }
      }
      if (!isFind) {
        el.remove();
      }
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
