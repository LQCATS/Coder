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
						<view class="title" v-if="userInfo">
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
					<view>升级为VIP</view>
					<u-icon name="arrow-right" color='#b4853f' :size='12' @tap='gomember'></u-icon>
				</view>
			</view>
		</view>

		<mybg></mybg>
		<view class="my_menu">
			<mycard>
				<view class="menu_item">
					<u-icon name="star-fill" color='#cccccc' :size='18'></u-icon>
					<text>我的收藏</text>
				</view>
				<view class="menu_item">
					<u-icon name="clock-fill" color='#cccccc' :size='18'></u-icon>
					<text>浏览记录</text>
				</view>
				<view class="menu_item" style="margin-right: 20rpx;">
					<u-icon name="thumb-up-fill" color='#cccccc' :size='18'></u-icon>
					<text>点赞</text>
				</view>
			</mycard>
		</view>
		<mybg></mybg>
		<!-- 食材 -->
		<view class="tabs_warp">
			<mycard>
				<mytabspersonal :tabslist='tabslist' @change='changemenu'></mytabspersonal>
			</mycard>
		</view>




		<view class="smalltanle" v-if="!isshowmore">
			<mytable :menulist='smallmenulist'></mytable>

			<view class="more" @tap="isshowmore = true">
				展开更多
				<u-icon name="arrow-down" color='#cccccc' :size='10'></u-icon>
			</view>
		</view>

		<view class="bigtable" v-else>
			<mytable :menulist='menulist'></mytable>

			<view class="more" @tap="isshowmore = false">
				收起
				<u-icon name="arrow-up" color='#cccccc' :size='10'></u-icon>
			</view>
		</view>

		<mybg></mybg>
		<view class="mymenu_warp">
			<view class="mymenu_title">
				我的菜谱
			</view>
			<view class="mymenu_scroll">
				<myscroll>
					<mymenuitem class="mymenu_item" v-for="item in collect" :key="item._id" :src="item.coverpic" :title="item.name"></mymenuitem>
				</myscroll>
			</view>
		</view>
		<mybg></mybg>
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
				isshowmore: false
			};
		},
		methods: {
			dologin() {
				//判断是否登录
				if (logintools.islogin()) {
					//2.授权后更新用数据库信息
					logintools.updateUserInfo();
					//3.获取用户信息
					logintools.getuserinfo();
				} else {
					//登录
					logintools.gologin();
				}


			},
			gomember() {
				// console.log('gomember');
				uni.switchTab({
					url: '/pages/member/member'
				})
			},
			changemenu(index) {
				this.menulist = this.collect[index].ingredient;
				// console.log(this.menulist);
				this.smallmenulist = this.menulist.slice(0, 6);

			}

		},
		async onReady() {
			//判断是否登录
			if (logintools.islogin()) {
				//获取用户信息，渲染头像
				this.userInfo = await logintools.getuserinfo();
				// console.log('333userInfo', this.userInfo);

				//获取所有的收藏
				this.collect = await logintools.getUserCollect();
				console.log('getUserCollect', this.collect);

				this.collect.forEach(item => {
					this.tabslist.push({
						name: item.name
					});
				})
				//初始化默认页面渲染第一个收藏菜谱的原材料
				this.menulist = this.collect[0].ingredient;

				this.smallmenulist = this.menulist.slice(0, 6);


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
</style>