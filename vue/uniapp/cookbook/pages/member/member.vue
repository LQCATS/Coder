<template>
	<view>
		<view class="header_warp">
			<!-- header -->
			<myheader title="VIP会员"></myheader>
			<!-- nav -->
			<mytabs :tabslist='tabslist'></mytabs>
		</view>

		<!-- banner -->
		<view class="banner">
			<view class="banner_bg">
				<view class="banner_top">
					<view class="top_left">
						<image :src="userInfo.avatarUrl" mode="widthFix" v-if="islogin"></image>
						<image src="../../static/bgimages/member_banner4.png" mode="widthFix" v-else></image>
					</view>
					<!-- 未开通会员 -->
					<view class="top_right" v-if="!isvip">
						<view class="right_top">
							<view class="title">
								欢迎你，新朋友
							</view>
							<view class="member_status" @tap="gobuymember">
								开通
							</view>
						</view>
						<view class="right_bottom">
							8元开通VIP，畅学明初独家菜谱
						</view>
					</view>
					<!-- 已开通会员 -->
					<view class="top_right" v-else>
						<view class="right_top">
							<view class="title">
								{{userInfo.nickName}}
							</view>
							<view class="member_status" @tap="gobuymember">
								续费
							</view>
						</view>
						<view class="right_bottom">
							会员有效期至{{userInfo.vipdate}}
						</view>
					</view>


				</view>
				<view class="banner_bootom">
					<view class="icon_warp" v-for="icon in iconlist" :key="icon.text">
						<image :src="icon.src" mode=""></image>
						<text>{{icon.text}}</text>
					</view>

				</view>
			</view>
		</view>
		<!-- content -->
		<view class="content_warp">
			<!-- VIP最新推荐 -->
			<view class="menu_warp" v-if="isvip">
				<view class="warp_title">
					VIP最新推荐
				</view>
				<myscroll class="scroll_wrap">

					<myvideo class="item" v-for="item in vipmenulist" :key="item._id" :text="item.name" :src="item.vid"
						:collection="item.collections" :pageview="item.pageview" @tap='godetial(item)'></myvideo>

				</myscroll>
				<!-- <myscroll class="scroll_wrap">

					<myvipmenu class="item" v-for="item in vipmenulist" :key="item._id" :text="item.name"
						:src="item.coverpic" :collection="item.collections" :pageview="item.pageview"></myvipmenu>

				</myscroll> -->
			</view>
			<!-- 限时免费 -->
			<view class="menu_warp">
				<view class="warp_title">
					限时免费体验
				</view>
				<myscroll class="scroll_wrap">
					<myvipmenu class="item" v-for="item in freemenulist" :key="item._id" :text="item.name"
						:src="item.coverpic" :collection="item.collections" :pageview="item.pageview" @tap='godetial(item)'></myvipmenu>

					<!-- <myvideo class="item" v-for="item in freemenulist" :key="item._id" :text="item.name" :src="item.vid"
						:collection="item.collections" :pageview="item.pageview"></myvideo> -->
				</myscroll>
			</view>

			<!-- 猜你喜欢 -->
			<view class="menu_warp">
				<view class="warp_title">
					猜你喜欢
				</view>
				<mycard>
					<mymenu class="like" v-for="item in likemenulist" :key="item._id" :text="item.name"
						:src="item.coverpic" :collection="item.collections" :pageview="item.pageview" @tap='godetial(item)'></mymenu>

				</mycard>
			</view>
		</view>
	</view>
</template>

<script>
	import logintools from '../../utils/logintools.js';
	export default {
		data() {
			return {
				tabslist: [{
						name: '推荐'
					},
					{
						name: '免费体验'
					},
					{
						name: '小白入门'
					},
					{
						name: '快手菜'
					},
					{
						name: '家常菜'
					},
					{
						name: '面食'
					},
					{
						name: '川湘菜'
					},
					{
						name: '凉菜'
					},
				],
				iconlist: [{
						src: '../../static/bgimages/member_banner1.png',
						text: '名厨课程'
					},
					{
						src: '../../static/bgimages/member_banner2.png',
						text: '无广告打扰'
					},
					{
						src: '../../static/bgimages/member_banner3.png',
						text: '身份标识'
					},
				],
				//vip最新推荐
				vipmenulist: [],
				//限时免费体验
				freemenulist: [],
				//猜你喜欢
				likemenulist: [],
				isvip: false,
				islogin: false,
				userInfo: null,
			};
		},
		methods: {
			gobuymember() {
				uni.navigateTo({
					url: '/pages/buymember/buymember'
				});
			},
			godetial(menu) {
				console.log('menu',menu);
				uni.navigateTo({
					url: `/pages/detials/detials?id=${menu._id}`
				})
			}
		},
		async onLoad() {
			if (logintools.islogin()) {
				//获取VIP最新推荐
				this.$service.vipService.getRecommendMenuList().then(res => {
					console.log('getRecommendMenuList', res);
					if (200 == res.meta.status) {
						this.vipmenulist = res.menus;
					}
				});

				//获取限时免费菜单
				this.$service.vipService.getisFreeMenuList().then(res => {
					console.log('getisFreeMenuList', res);
					if (200 == res.meta.status) {
						this.freemenulist = res.menus;
					}
				});

				//猜你喜欢
				this.$service.vipService.likeMenu().then(res => {
					console.log('likeMenu', res);
					if (200 == res.meta.status) {
						this.likemenulist = res.menus;
					}
				});

				//获取用户信息，是否是会员
				this.userInfo = await logintools.getuserinfo();
				console.log('this.userInfo', this.userInfo);
				this.isvip = this.userInfo.vip;

				//是否登录
				this.islogin = logintools.islogin();
			}

		}
	}
</script>

<style lang="scss">
	.header_warp {
		position: fixed;
		top: 0;
		z-index: 999;
	}

	.banner {
		width: 750rpx;
		height: 324rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 270rpx;

		.banner_bg {
			width: 686rpx;
			height: 324rpx;
			background-color: #33353d;
			border-radius: 16rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			.banner_top {
				display: flex;
				margin-top: 32rpx;

				.top_left {
					width: 128rpx;
					height: 129rpx;

					image {
						width: 100%;
						border-radius: 65rpx;

					}
				}

				.top_right {
					width: 482rpx;
					padding-left: 18rpx;
					box-sizing: border-box;

					.right_top {
						display: flex;
						justify-content: space-between;
						margin-top: 20rpx;


						.title {
							color: #939393;
							font-size: 24rpx;

						}

						.member_status {
							width: 108rpx;
							height: 34rpx;
							line-height: 34rpx;
							text-align: center;
							color: #76401f;
							font-size: 22rpx;
							background-color: #ebc3a7;
							border-radius: 20rpx;

						}
					}

					.right_bottom {
						color: #e6e6e6;
						font-size: 28rpx;
						margin-top: 26rpx;
					}

				}
			}

			.banner_bootom {
				width: 100%;
				height: 96rpx;
				background-color: #181818;
				border-bottom-left-radius: 16rpx;
				border-bottom-right-radius: 16rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;

				.icon_warp {
					height: 75rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;

					image {
						width: 40rpx;
						height: 40rpx;
					}

					text {
						color: #f9d9b3;
						font-size: 22rpx;
					}
				}

			}
		}
	}


	.content_warp {
		padding-left: 32rpx;
		box-sizing: border-box;

		.menu_warp {
			margin-top: 40rpx;

			.warp_title {
				margin-bottom: 28rpx;
				color: #303030;
				font-size: 40rpx;
				font-weight: 700;
			}
		}
	}

	.scroll_wrap {

		.item {
			flex-shrink: 0;
			margin-right: 12rpx;
		}
	}

	.like {
		margin-bottom: 35rpx;
	}
</style>