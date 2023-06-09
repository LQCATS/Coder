import request from '../utils/request.js';

export default {
	//收藏餐品
	collect: params => request.post('/user/collect', params),
	//我的收藏
	getcollect: params => request.get('/user/getcollect', params),
}