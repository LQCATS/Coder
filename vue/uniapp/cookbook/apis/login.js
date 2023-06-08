import request from '../utils/request.js';

export default {
	//微信授权登录
	wxLogin: params => request.post('/user/wxLogin', params),
}