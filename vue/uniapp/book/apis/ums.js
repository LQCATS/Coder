import request from '../utils/request.js';

export default {
	//微信登录
	wxLogin: (params) => request.post("/api/wxLogin", params),
}