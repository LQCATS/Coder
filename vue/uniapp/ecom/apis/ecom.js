import request from '../utils/request.js';

export default {
	//查询所有电商商品
	searchEcomProduct: params => request.post('/api/searchEcomProduct', params),
}