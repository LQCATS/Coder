import service from '../apis/index.js';
export default {
	// #ifdef MP
	//微信登录获取token
	gologin() {

		//1.判断用户是否登录getUserProfile
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
			// console.log('userRes', userRes);

			loginPromise.then(loginRes => {
				// console.log('loginRes', loginRes);

				service.loginService.wxLogin({
					code: loginRes.code,
					appId: 'wxe15e38290cf35d4e',
					appSecret: '11ad6a08e492439b5bc157738c2c55c2'
				}).then(res => {
					console.log('wxLogin', res);
					//将token保存在本地储存中
					this.setToken(res.token);
					//将用户信息储存在本地
					this.setUserInfo(userRes.userInfo);

					//授权修改用户信息
					service.loginService.auth({
						token: res.token,
						avatarUrl: userRes.userInfo.avatarUrl,
						nickName: userRes.userInfo.nickName,
						gender: userRes.userInfo.gender,
						province: userRes.userInfo.province,
					}).then(async res => {
						console.log('updateUserInfo', res);
						// if (200 == res.code) {
						// 	let userInfo = await this.getuserinfo();
						// 	console.log('000userInfo', userInfo);
						// 	return userInfo;
						// }

						return res;
					})

				})
			})

		})

	},

	//2.调取后端接口获取用户信息
	getuserinfo() {
		let token = this.getToken();

		if (token) {
			return new Promise((resolve, reject) => {
				service.loginService.getUserInfo({
					token: token
				}).then(res => {
					// console.log('getuserinfo', res);
					resolve(res[0]);
				}).catch(err => {
					reject(err);
				})
			});
		} else {
			return {};
		}
	},

	//3.授权后更新用数据库信息
	updateUserInfo() {
		//获取本地用户信息
		let userInfo = this.getUserInfo();
		//获取本地token
		let token = this.getToken();

		service.loginService.auth({
			token,
			avatarUrl: userInfo.avatarUrl,
			nickName: userInfo.nickName,
			gender: userInfo.gender,
			province: userInfo.province,
		}).then(res => {
			console.log('updateUserInfo', res);
			return res
		})
	},

	//4.我的收藏
	async getUserCollect() {
		//获取用户_id
		let userInfo = await this.getuserinfo();

		return new Promise((resolve, reject) => {
			service.userService.getcollect({
				_id: userInfo._id
			}).then(res => {
				console.log('getUserCollect', res.mycollect);
				resolve(res.mycollect);
			}).catch(err => {
				reject(err);
			})
		})

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
	//判断是否是vip
	async isVip() {
		let userInfo = await this.getuserinfo();
		if (userInfo.vip) {
			return true;
		} else {
			return false;
		}
	},

	//获取本地token
	getToken() {
		let token = uni.getStorageSync('Token');
		if (token) {
			token = JSON.parse(token);
			return token;
		} else {
			return '';
		}
	},
	//存储本地token
	setToken(token) {
		uni.setStorageSync('Token', JSON.stringify(token));
	},
	//储存本地用户信息
	setUserInfo(userInfo) {
		uni.setStorageSync('UserInfo', JSON.stringify(userInfo));
	},
	//获取本地用户信息
	getUserInfo() {
		let userInfo = uni.getStorageSync('UserInfo');
		if (userInfo) {
			userInfo = JSON.parse(userInfo);
			return userInfo;
		} else {
			return '';
		}
	},
	//本地储存信息
	setMsg(key, val) {
		uni.setStorageSync('key', JSON.stringify(val));
	}

	// #endif
}