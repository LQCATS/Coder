import request from "../utils/request";
import { loginData } from "../types/usersTypes";

//登录
export const loginAPI = (data: loginData) => {
    return request({
        url: '/login',
        method: 'POST',
        data
    });
};

//根据用户名获取权限菜单
export const getMenusAPI = (username: string) => {
    return request({
        url: `/menu/${username}`
    });
};

export const getHomeInfoAPI = () => {
    return request({
        url:'/index/bobo'
    })
}