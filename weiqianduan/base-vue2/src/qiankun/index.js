//*主应用qiankun配置文件
import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from 'qiankun';
import { message } from 'element-ui';

//注册子应用
const apps = [
    // 其他子应用
    {
        name: 'demo-vue2',
        entry: 'http://localhost:8001',
        container: '#container',
        activeRule: '/vue2'
    },
    {
        name: 'demo-react',
        entry: 'http://localhost:8002',
        container: '#container',
        activeRule: '/react'
    },
    {
        name: 'demo-vue3',
        entry: 'http://localhost:8003',
        container: '#container',
        activeRule: '/vue3'
    },
    {
        name: 'demo-umi',
        entry: 'http://localhost:8004',
        container: '#container',
        activeRule: '/umi'
    }
];

registerMicroApps(apps, {
    //*生命周期函数：子应用挂载前
    beforeLoad(app) {
        // console.log(app.name);
        return Promise.resolve();
    },
    //*生命周期函数：子应用挂载完成
    afterMount(app) {
        return Promise.resolve();
    }
});

//*添加一个全局错误处理器
addGlobalUncaughtErrorHandler((event) => {
    const { message: msg } = event;
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        message.error('子应用加载失败，请检查子应用是否可运行。')
    }
});

export default start;