import request from '../utils/request.js';

export default {
	//搜索页面随机推荐 & 精品名厨视频
	memberRecommend: params => request.get('/search/memberRecommend', params),
	//菜单详情
	menuDetail: params => request.post('/search/menuDetail', params),
	
}