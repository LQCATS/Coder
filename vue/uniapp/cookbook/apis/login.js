import request from '../utils/request.js';

export default {
	//微信授权登录
	wxLogin: params => request.post('/user/wxLogin', params),
	//获取用户信息
	getUserInfo: params => request.get('/user/getUserInfo', params),
	//授权后更新用数据库信息
	auth: params => request.post('/user/auth', params),
}