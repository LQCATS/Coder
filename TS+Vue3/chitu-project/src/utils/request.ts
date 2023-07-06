import axios from "axios";

const request = axios.create({
    baseURL: 'http://xawn.f3322.net:8012'
});

//请求拦截器
request.interceptors.request.use(config => {
    config.headers["Content-Type"] = 'application/x-www-form-urlencoded';
    config.headers.Authentication = localStorage.Token;
    return config;
});

//响应拦截器
request.interceptors.response.use(res => res.data);


export default request;