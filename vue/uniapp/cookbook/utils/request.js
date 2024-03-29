import logintools from './logintools.js';

const BASE_URL = 'http://localhost:4000';

export default {
	post(url, params) {

		//发送请求显示load
		uni.showLoading({
			title: '正在请求中...',
			mask: true
		});

		let promise = new Promise((resolve, reject) => {
			//拿到当前登录用户的token
			let token = logintools.getToken();

			uni.request({
				url: `${BASE_URL}${url}`,
				method: 'POST',
				data: params,
				header: {
					"content-type": 'application/json',
					'Authorization': token
				},
				success: (res) => {
					resolve(res.data);
				},
				fail: (err) => {
					reject(err);
				},
				complete: () => {
					//请求失败或者成功都取消load图片
					uni.hideLoading();
				}
			});
		});

		return promise;
	},

	get(url, params) {
		//发送请求显示load
		uni.showLoading({
			title: '正在请求中...',
			mask: true
		});

		let promise = new Promise((resolve, reject) => {
			//拿到当前登录用户的token
			let token = logintools.getToken();
			
			uni.request({
				url: `${BASE_URL}${url}`,
				method: 'GET',
				data: params,
				header: {
					"content-type": 'application/json',
					'Authorization': token
				},
				success: (res) => {
					resolve(res.data);
				},
				fail: (err) => {
					reject(err);
				},
				complete: () => {
					//请求失败或者成功都取消load图片
					uni.hideLoading();
				}
			});
		});

		return promise;
	},
}