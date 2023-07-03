import { get, post } from '../utils/request';

//登录
export const loginAPI = params => post('/login', params);

//验证用户名
export const checkAPI = params => get('/user/check', params);
