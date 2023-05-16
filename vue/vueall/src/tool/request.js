import axios from "axios";

//*设置接口请求的基础地址，接口调用时不需要再写前面的基础地址
axios.defaults.baseURL = 'http://127.0.0.1:3000';

//*配置响应拦截器，可以拦截接口的返回值
axios.interceptors.response.use((res) => {
    // console.log('响应拦截器', res.data);
    return res.data;
});

//*设置post和get方式的axios请求函数
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