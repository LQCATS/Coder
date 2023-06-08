import service from '../apis/index.js'
export default {
	gologin() {
		console.log('login', 111);
		// #ifdef MP
		//判断用户是否登录getUserProfile
		let userPromise = new Promise((resolve, reject) => {
			uni.getUserProfile({
				desc: '微信登录',
				success: (res) => {
					resolve(res)
				},
				fail: (err) => {
					reject(err)
				}
			})
		});

		//login
		let loginPromise = new Promise((resolve, reject) => {
			uni.login({
				success: (res) => {
					resolve(res)
				},
				fail: (err) => {
					reject(err)
				}
			})
		});

		//wxLogin
		userPromise.then(userRes => {
			console.log('userRes', userRes);

			loginPromise.then(loginRes => {
				console.log('loginRes', loginRes);

				service.loginService.wxLogin({
					code: loginRes.code,
					appId: 'wxe15e38290cf35d4e',
					appSecret: '11ad6a08e492439b5bc157738c2c55c2'
				}).then(res => {
					console.log('wxLogin', res);
					//将token保存在本地储存中
					uni.setStorageSync('token', JSON.stringify(res.token))
				})
			})

		})
		// #endif
	},
	//判断是否登录
	islogin() {
		let token = uni.getStorageSync('token');
		if (token) {
			return true
		} else {
			return false
		}
	}

}