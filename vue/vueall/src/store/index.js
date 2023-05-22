
import Vue from 'vue'

//! 1.导入状态机
import Vuex from 'vuex'
//! 导入子仓库
import userModule from './modules/userModule';

//! 2.安装状态机到Vue实例中
Vue.use(Vuex)

//! 状态机的主仓库
export default new Vuex.Store({
  //!保存数据用的容器，固定写法
  state: {
    //页签数组
    listTabs: [
      { name: '主页', path: '/layout/home' }
    ],
    count: 1,
    userName: '张三',
    isBoy: false,
    curTime: new Date().getTime(),
    objUser: {
      id: 1,
      name: '李四',
    },
    listUser: [
      { id: 2, name: '麻子' },
      { id: 3, name: '老刘' }
    ]
  },
  //! 计算属性，用于获取state中的数据，它可以再获取数据时进行计算，把计算后的值返回
  getters: {
    //! 函数的形式定义，只有一个参数state，用于获取state中的变量
    getName(state) {
      return state.userName;
    },
    setName(state) {
      state.userName = '张大师';
      return state.userName;
    },
    getTabs(state) {
      return state.listTabs;
    }
  },
  //! 同步方法：用于获取或者设置state中的数据
  mutations: {
    CURTIME(state, val) {
      state.count = state.count + val;
    },
    PUSH_TAB(state, objTab) {
      let tab = state.listTabs.find(item => item.name == objTab.name);
      if (!tab) {
        state.listTabs.push(objTab);
      }
    },
    DEL_TAB(state, curTab) {
      let index = state.listTabs.findIndex(item => item.path == curTab.path);
      if (-1 != index) {
        state.listTabs.splice(index, 1);
      }
    }
  },
  //! 异步方法：用于获取或者设置state中的数据，在actions中可以执行一些异步的任务，例如调用接口，setTimeout
  actions: {
    setCurTime(context, val) {
      //* context代表当前的store，也是当前的上下文
      setTimeout(() => {
        context.state.curTime = val;
      }, 3000);
      //* 可以在异步方法中调用同步的方法
      context.commit('CURTIME', 3);
    }
  },
  //! 用于定义子仓库的：模块化状态机
  modules: {
    //* user是子仓库的名字，userModule是子仓库的实例
    user: userModule,
  }
})
