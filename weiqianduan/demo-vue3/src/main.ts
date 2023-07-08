import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
let app: any = null;
function render(props: any) {
    const { container } = props;
    app = createApp(App);
    app.use(router);
    app.mount(container ? container.querySelector('#app') : '#app')
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({ container: null })
} else {
    renderWithQiankun({
        mount(props) {
            render(props);
        },
        bootstrap() {
            // console.log('Vue3 子应用初始化');
        },
        update() {
            // console.log('Vue3 子应用更新');
        },
        unmount() {
            // console.log('Vue3子应用卸载');
            app.mount();
        },
    })
}