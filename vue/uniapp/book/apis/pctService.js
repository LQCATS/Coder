import request from '../utils/request.js';

export default {
	//分页查询书籍
	searchInfoBook: (params) => request.post("/api/searchInfoBook", params),
}