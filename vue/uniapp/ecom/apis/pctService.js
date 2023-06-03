import request from '../utils/request.js';

export default {
	searchInfoProducttype: (params) => request.post("/api/searchInfoProducttype", params),
}