import service from '../apis/index.js'
export default {
	//微信登录获取token
	gologin() {
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
					this.setToken(res.token);
					//将用户信息储存在本地
					uni.setStorageSync('UserInfo', JSON.stringify(userRes.userInfo));

				})
			})

		})
		// #endif
	},
	//判断是否登录
	islogin() {
		let token = this.getToken();
		if (token) {
			return true
		} else {
			return false
		}
	},
	//获取用户信息
	getuserinfo() {
		let token = this.getToken();
		console.log(token);
		if (token) {
			service.loginService.getUserInfo({
				token: token
			}).then(res => {
				console.log('getuserinfo', res);
			})
		}

	},
	//获取本地token
	getToken() {
		let token = JSON.parse(uni.getStorageSync('Token'));
		if (token) {
			return token;
		} else {
			return '';
		}
	},
	//存储本地token
	setToken(token) {
		uni.setStorageSync('Token', JSON.stringify(token));
	},


}