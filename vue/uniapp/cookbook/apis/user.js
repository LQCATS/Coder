import request from '../utils/request.js';

export default {
	//收藏餐品
	collect: params => request.post('/user/collect', params),
	//我的收藏
	getcollect: params => request.get('/user/getcollect', params),
	//我的浏览记录
	getrecord: params => request.get('/user/getrecord', params),
	//浏览商品
	record: params => request.post('/user/record', params),
	//点赞商品
	mylike: params => request.post('/user/mylike', params),
	//套餐列表
	topupList: params => request.get('/user/topupList', params),
	//开通会员
	openVip: params => request.get('/user/openVip', params),
}