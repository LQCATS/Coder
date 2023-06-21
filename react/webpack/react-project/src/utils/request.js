import axios from "axios";

//克隆一个新的axios
const request = axios.create({
    baseURL: 'http://nocat.life:8002', //请求地址共同的部分
    // timeout: 3000 //请求时间超过 timeout 会停止发送请求
});

//响应拦截器
request.interceptors.response.use((res) => {
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

// export default request;