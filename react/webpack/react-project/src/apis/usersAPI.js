import { get, post } from "../utils/request";

//删除用户
export const delUserAPI = params => get('/users/delAccount', params);

//获取用户列表
export const getUsersAPI = params => post('/users/getAccountList', params);

//添加用户
export const addUsersAPI = params => post('/users/accountadd', params);

//修改用户
export const updateUsersAPI = params => post('/users/updateAccount', params);

//用户登陆
export const loginAPI = params => post('/users/login', params);

// import request from "../utils/request";
// //获取用户列表
// export const getUsersAPI = () => {
//     return request({
//         url: '/users/getAccountList',
//         method: 'POST',
//     });
// };
// //删除用户
// export const delUserAPI = (params) => {
//     return request({
//         url: '/users/getAccountList',
//         method: 'GET',
//         params
//     });
// };