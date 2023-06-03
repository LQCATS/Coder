const BASE_URL = 'http://localhost:3000';

export default {
	post(url, params) {
		let promise = new Promise((resolve, reject) => {
			// 发送请求前显示load
			uni.showLoading({
				title: '正在请求中...',
				mask: true
			});

			uni.request({
				url: `${BASE_URL}${url}`,
				method: 'POST',
				data: params,
				header: {
					"content-type": 'application/json'
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
		let promise = new Promise((resolve, reject) => {
			// 发送请求前显示load
			uni.showLoading({
				title: '正在请求中...',
				mask: true
			});

			uni.request({
				url: `${BASE_URL}${url}`,
				method: 'GET',
				data: params,
				header: {
					"content-type": 'application/json'
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
	}
}