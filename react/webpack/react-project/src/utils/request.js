import { Modal } from "antd";
import axios from "axios";

//克隆一个新的axios
const request = axios.create({
    baseURL: 'http://nocat.life:8002', //请求地址共同的部分
    // timeout: 3000 //请求时间超过 timeout 会停止发送请求
});

//请求拦截器
request.interceptors.request.use((config) => {
    config.headers.token = localStorage.Token;
    return config;
});

//响应拦截器
request.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    console.log(err);
    if (err && err.response && err.response.status) {
        if (401 === err.response.status) {
            Modal.warning(({
                title: '警告！',
                content: '登录已失效，请重新登录',
                afterClose: () => {
                    window.location.href = '/login';
                }
            }))
        }

    }

    // 继续抛出报错
    return Promise.reject(err.message);
});


export const post = (url, params) => {
    return request({
        url,
        method: 'POST',
        data: params
    })
}
export const get = (url, params) => {
    return request({
        url,
        method: 'GET',
        params
    })
}

// export default request;