import axios from "axios";

const request = axios.create({
    baseURL: 'http://xawn.f3322.net:8012',
    timeout: 3000
});


//请求拦截器
request.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    return config;

})

//响应拦截器
request.interceptors.response.use(res => {
    return res.data;
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