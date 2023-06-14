<template>
	<view>
		<!-- header -->
		<view class="header">
			<view class="header_title">
				我的
			</view>
		</view>
		<!-- banner -->
		<view class="banner">
			<view class="banner_top">
				<view class="top_left">
					<image :src="userInfo.avatarUrl" mode="widthFix" v-if="userInfo" class="avatarUrl"></image>
					<image src="../../static/bgimages/wode1.png" mode="widthFix" v-else class="avatarUrl">
					</image>
				</view>
				<view class="top_middle">
					<view class="middle_top">
						<view class="title" v-if="userInfo" @tap="dologin">
							{{userInfo.nickName}}
						</view>
						<view class="title" @tap="dologin" v-else>
							立即登录
						</view>


					</view>
					<view class="middle_bottom">
						登录后可收藏喜欢的菜谱
					</view>
				</view>
				<view class="top_right">
					<u-icon name="arrow-right" color='#dadada'></u-icon>
				</view>
			</view>

			<view class="banner_bottom">
				<view class="banner_bottom_msg">
					<view v-if="isvip">续费</view>
					<view v-else>升级为VIP</view>
					<u-icon name="arrow-right" color='#b4853f' :size='12' @tap='gomember'></u-icon>
				</view>
			</view>
		</view>

		<mybg></mybg>
		<view class="my_menu">
			<u-tabbar :value="value1" :fixed="false" :placeholder="false" :safeAreaInsetBottom="false" :border='false'
				active-color="#da7a35">
				<u-tabbar-item text="我的收藏" icon="star-fill" @click="click1"></u-tabbar-item>
				<u-tabbar-item text="浏览记录" icon="clock-fill" @click="click1"></u-tabbar-item>
				<u-tabbar-item text="点赞" icon="thumb-up-fill" @click="click1"></u-tabbar-item>
			</u-tabbar>
		</view>
		<mybg></mybg>


		<!-- 食材 -->
		<view class="tabs_warp">
			<mycard>
				<mytabspersonal :tabslist='tabslist' :curindex="curtabsmenu" @change='changemenu'></mytabspersonal>
			</mycard>
		</view>



		<!-- 原材料 -->
		<view v-if="collect">
			<view class="smalltanle" v-if="!isshowmore">
				<view class="mytable">
					<mytable :menulist='smallmenulist'></mytable>
				</view>

				<view class="more" @tap="isshowmore = true" v-if="smallmenulist">
					展开更多
					<u-icon name="arrow-down" color='#cccccc' :size='10'></u-icon>
				</view>
			</view>

			<view class="bigtable" v-else>
				<view class="mytable">
					<mytable :menulist='menulist'></mytable>
				</view>


				<view class="more" @tap="isshowmore = false">
					收起
					<u-icon name="arrow-up" color='#cccccc' :size='10'></u-icon>
				</view>
			</view>
			<mybg></mybg>
		</view>

		<!-- 我的菜谱 -->
		<view v-if="islogin && collect">
			<view class="mymenu_warp">
				<view class="mymenu_title">
					我的菜谱
				</view>
				<view class="mymenu_scroll">
					<myscroll>
						<mymenuitem class="mymenu_item" v-for="item in collect" :key="item._id" :src="item.coverpic"
							:title="item.name" @tap='godetial(item)'></mymenuitem>
					</myscroll>
				</view>
			</view>
			<mybg></mybg>
		</view>


		<view class="operate_warp">
			<view class="operate_item">
				<u-icon name="thumb-up-fill" color='#cccccc' :size='22'></u-icon>
				<view class="operate_msg">
					去App Store给菜谱大全评分
				</view>
			</view>

			<view class="operate_item">
				<u-icon name="chat-fill" color='#cccccc' :size='22'></u-icon>
				<view class="operate_msg">
					反馈问题
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import logintools from '../../utils/logintools.js';
	export default {
		data() {
			return {
				tabslist: [
					// 	{
					// 	name: '所有食材',
					// 	disabled: true
					// },
				],
				//原材料列表
				menulist: [],
				smallmenulist: [],
				//是否登录
				islogin: false,
				//用户信息
				userInfo: null,
				//我的收藏
				collect: null,
				//原材料显示更多
				isshowmore: false,
				//nav的下标
				value1: 0,
				//是否是会员
				isvip: false,
				//点击nav是对应的当前菜谱下标
				curtabsmenu: 0,
			};
		},
		methods: {
			//去登陆
			async dologin() {
				//判断是否登录
				if (logintools.islogin()) {
					//登录成功获取用户信息
					this.userInfo = await logintools.getuserinfo();
					console.log('111getuserinfo', this.userInfo);
				} else {
					//登录获取授权后的用户信息，渲染页面
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

							this.$service.loginService.wxLogin({
								code: loginRes.code,
								appId: 'wxe15e38290cf35d4e',
								appSecret: '11ad6a08e492439b5bc157738c2c55c2'
							}).then(res => {
								// console.log('wxLogin', res);
								//将token保存在本地储存中
								logintools.setToken(res.token);
								//将用户信息储存在本地
								logintools.setUserInfo(userRes.userInfo);

								//授权修改用户信息
								this.$service.loginService.auth({
									token: res.token,
									avatarUrl: userRes.userInfo.avatarUrl,
									nickName: userRes.userInfo.nickName,
									gender: userRes.userInfo.gender,
									province: userRes.userInfo.province,
								}).then(async res => {
									console.log('updateUserInfo', res);

									if (200 == res.code) {
										//获取完整的用户信息
										this.userInfo = await logintools
											.getuserinfo();
										//获取用户的收藏
										this.collect = await logintools
											.getUserCollect();
										console.log('000userInfo', this.userInfo,
											this.collect);

										if (this.collect) {
											// this.islogin = logintools.islogin();
											this.tabslist = this.collect;
											//默认渲染第一个收藏菜谱的原材料
											this.menulist = this.collect[0]
												.ingredient;

											this.smallmenulist = this.menulist
												.slice(0, 5);
											console.log("000", this.menulist, this
												.smallmenulist, this.tabslist);
										}
									}

								})
							})
						})
					})
				}
			},
			//去详情
			godetial(menu) {
				//跳转详情页面
				uni.navigateTo({
					url: `/pages/detials/detials?id=${menu._id}&type=${3}`
				})
			},
			//去开会员
			gomember() {
				// console.log('gomember');
				if (this.islogin) {
					uni.navigateTo({
						url: '/pages/buymember/buymember?type=' + 1
					})
				}

			},
			//切换菜谱
			changemenu(item) {
				// console.log('item', item);
				if (item) {
					this.curtabsmenu = item.index;
					this.menulist = item.ingredient;
					// console.log(this.menulist);
					this.smallmenulist = this.menulist.slice(0, 5);
				}


			},
			//切换nav
			async click1(e) {
				this.value1 = e;
				this.curtabsmenu = 0;
				if (0 == e) {
					//获取收藏数据
					this.collect = await logintools.getUserCollect();
					// console.log('111getUserCollect', this.collect);
					if (this.collect) {

						this.tabslist = this.collect;
						//初始化默认页面渲染第一个收藏菜谱的原材料
						this.menulist = this.collect[0].ingredient;

						this.smallmenulist = this.menulist.slice(0, 5);
					}
				} else if (1 == e) {
					//获取浏览数据
					this.$service.userService.getrecord({
						_id: this.userInfo._id
					}).then(res => {
						console.log('getrecord', res);

						if (200 == res.meta.status) {
							this.tabslist = res.record;

							this.menulist = res.record[0].ingredient;

							this.smallmenulist = this.menulist.slice(0, 5);
						} else {
							this.tabslist = null;

							// this.menulist = null;

							// this.smallmenulist = null;
							this.collect = null;
						}
					})

				} else if (2 == e) {

					//获取点赞数据没有接口，暂时使用获取收藏数据
					this.collect = await logintools.getUserCollect();
					// console.log('111getUserCollect', this.collect);
					if (this.collect) {

						this.tabslist = this.collect;
						//初始化默认页面渲染第一个收藏菜谱的原材料
						this.menulist = this.collect[0].ingredient;

						this.smallmenulist = this.menulist.slice(0, 5);
					}
				}
			}
		},
		async onShow() {
			//判断是否登录
			if (logintools.islogin()) {
				this.islogin = true;
				//获取用户信息，渲染头像
				this.userInfo = await logintools.getuserinfo();
				// console.log('333userInfo', this.userInfo);

				//判断是否是会员
				if (this.userInfo.vip) {
					this.isvip = true;
				}


				//获取所有的收藏
				this.collect = await logintools.getUserCollect();
				// console.log('getUserCollect', this.collect);
				if (this.collect) {

					this.tabslist = this.collect;
					//初始化默认页面渲染第一个收藏菜谱的原材料
					this.menulist = this.collect[0].ingredient;

					this.smallmenulist = this.menulist.slice(0, 5);
				}
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 150rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: fixed;
		top: 0;
		z-index: 999;

		.header_title {
			color: #000000;
			font-size: 36rpx;
			font-weight: 700;
			text-align: center;
			margin-bottom: 20rpx;
		}
	}

	.banner {
		width: 750rpx;
		height: 324rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 150rpx;



		.banner_top {
			display: flex;
			width: 686rpx;

			.top_left {
				width: 128rpx;
				height: 129rpx;
				border-radius: 65rpx;

				.avatarUrl {
					width: 100%;
					border-radius: 65rpx;
				}
			}

			.top_middle {
				padding-left: 18rpx;
				box-sizing: border-box;

				.middle_top {
					display: flex;
					justify-content: space-between;
					margin-top: 20rpx;


					.title {
						color: #515151;
						font-size: 30rpx;

					}


				}

				.middle_bottom {
					color: #d1d1d1;
					font-size: 22rpx;
					margin-top: 20rpx;
				}

			}

			.top_right {
				margin-left: auto;
				display: flex;
				align-items: center;
			}
		}

		.banner_bottom {
			width: 686rpx;
			height: 118rpx;
			background: url(../../static/bgimages/wode2.png) no-repeat;
			background-size: cover;
			margin-top: 34rpx;

			.banner_bottom_msg {
				display: flex;
				justify-content: space-between;
				color: #b4853f;
				font-size: 22rpx;
				padding: 20rpx 100rpx;
				box-sizing: border-box;
			}
		}
	}

	.my_menu {
		width: 750rpx;
		height: 122rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.menu_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			height: 122rpx;
			padding-bottom: 10rpx;
			box-sizing: border-box;

			text {
				color: #5a5a5a;
				font-size: 28rpx;
			}
		}
	}

	.tabs_warp {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.more {
		color: #5a5a5a;
		font-size: 22rpx;
		height: 72rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.mymenu_warp {
		width: 100%;


		.mymenu_title {
			color: #5a5a5a;
			font-size: 28rpx;
			margin: 10rpx 0 32rpx 32rpx;

		}

		.mymenu_scroll {
			margin-left: 30rpx;

			.mymenu_item {
				margin-right: 32rpx;
			}
		}


	}

	.operate_warp {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.operate_item {
			width: 686rpx;
			height: 95rpx;
			display: flex;
			align-items: center;

			.operate_msg {
				height: 95rpx;
				line-height: 95rpx;
				margin-left: 26rpx;
				color: #5a5a5a;
				font-size: 28rpx;
				flex: 1;
				border-bottom: 1rpx solid #dbdbdb;
			}
		}
	}

	.mytable {
		border-bottom: 1rpx solid #dfdfdd;
	}
</style>