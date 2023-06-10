import request from '../utils/request.js';

export default {
	//最新推荐
	getRecommendMenuList: params => request.get('/vip/getRecommendMenuList', params),
	//限时免费
	getisFreeMenuList: params => request.get('/vip/getisFreeMenuList', params),
	//猜你喜欢
	likeMenu: params => request.get('/vip/likeMenu', params),
	//精品名厨(会员专享)
	vipExclusive: params => request.get('/vip/vipExclusive', params),
}