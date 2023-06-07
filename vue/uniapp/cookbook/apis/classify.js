import request from '../utils/request.js';

export default {
	//分类信息
	categories: params => request.get('/categories', params),
}