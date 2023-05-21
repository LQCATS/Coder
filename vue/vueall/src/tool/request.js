import axios from "axios";
import { Message } from 'element-ui';
import sessionTool from "./sessionTool";

//!设置接口请求的基础地址，接口调用时不需要再写前面的基础地址
axios.defaults.baseURL = 'http://127.0.0.1:3000';


//!消息提示开关变量
let isShow = false;
//!配置响应拦截器，可以拦截接口的返回值
axios.interceptors.response.use((res) => {
    // console.log('响应拦截器', res.data);
    return res.data;
}, err => {
    if (401 == err.response.status) {
        //提示登录过期
        if (!isShow) {
            isShow = true;
            Message({
                type: 'error',
                message: '对不起，您的登录已过期',
                onClose: () => {
                    isShow = false;
                    location.href = '/';
                }
            })
        }

    } else {
        //提示错误信息
        if (!isShow) {
            isShow = true;
            Message({
                type: 'error',
                message: '对不起，请求失败',
                onClose: () => {
                    isShow = false;
                }
            })
        }
    }
});

//!配置请求拦截器
axios.interceptors.request.use(req => {
    if (sessionTool.isLogin()) {
        let loginUser = sessionTool.getLoginUser();
        req.headers.Authorization = `Bearer ${loginUser.token}`;
    }
    return req
})

//!设置post和get方式的axios请求函数
export default {
    post(url, params) {
        return axios({
            url,
            method: 'POST',
            data: params
        });
    },

    get(url, params) {
        return axios({
            url,
            method: 'GET',
            params
        });
    }
}