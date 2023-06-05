import request from '../utils/request.js';

export default {
	//首页轮播图
	swiperdata: params => request.get('/home/swiperdata', params),
	//首页分类图片
	catitems: params => request.get('/home/catitems', params),
	//首页楼层图片
	floorsdata: params => request.get('/home/floorsdata', params),
	//首页推荐商品
	recommend: params => request.get('/home/recommend', params),
	
	
	
}