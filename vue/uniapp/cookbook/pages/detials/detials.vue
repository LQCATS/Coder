<template>
	<view>
		<!-- header -->
		<view class="header">
			<view class="myheader">
				<myheader :title="menudetialobj.name">
					<view class="goback_icon">
						<u-icon name="arrow-left" color='#fff' @tap='goback'></u-icon>
					</view>
				</myheader>
			</view>

			<view class="icon_warp">
				<!-- 收藏 -->
				<u-icon name="heart-fill" color='red' size="50rpx" @tap='docollect' v-if='iscollect'></u-icon>
				<u-icon name="heart" color='#fff' size="50rpx" @tap='docollect' v-else="iscollect"></u-icon>

				<!-- 分享 -->
				<u-icon name="share-square" color='#fff' class="icon2" size="50rpx"></u-icon>
			</view>
		</view>

		<!-- banner -->
		<view class="banner">
			<image :src="menudetialobj.coverpic" class="banner_img"></image>
			<view class="banner_btn">
				会员低至2元/月，免广告、看10000+名厨视频
			</view>
			<view class="menu_title">
				{{menudetialobj.name}}
			</view>
			<view class="mypageview">
				<mypageview :pageview="menudetialobj.pageview" :ollection="menudetialobj.collections"></mypageview>
			</view>

			<!-- 遮罩 -->
			<view class="overlay">
				<view class="overlay_title">
					开通会员观看视频做法
				</view>
				<button type="default" class="overlay_btn">立即开通</button>
				<view class="go_login">
					已是会员，立即登录
					<u-icon name="arrow-right" color='#fff' size="32rpx" style="margin-left: 4rpx;"></u-icon>
				</view>
			</view>
		</view>

		<mybg></mybg>

		<!-- content -->
		<view class="content_warp">
			<!-- 心得 -->
			<view class="comprehend_warp">
				<view class="comprehend_title">
					心得
				</view>
				<view class="comprehend_text">
					鲷鱼烧是日本的传统小吃，皮外酥里嫩，再加上自己喜欢的馅料，特别好吃。以前在日本每天都吃，现在想吃，.自己动手做，设备材料齐全的话,其实很简单
				</view>

				<view class="comprehend_title">
					养身必读
				</view>
				<view class="comprehend_text">
					鸡蛋：护眼明目
				</view>
			</view>

			<mybg></mybg>

			<!-- 材料 -->
			<view class="ingredients_warp">
				<view class="ingredients_grade">
					<u-icon name="clock" color='#ee7b2d' size="36rpx"></u-icon>
					<view class="time">30分钟以上</view>
					<view class="star_warp">
						<view class="top">
							<u-icon name="star-fill" color='#f7cbae' size="16rpx"></u-icon>
						</view>
						<view class="bottom">
							<u-icon name="star-fill" color='#ee7b2d' size="16rpx"></u-icon>
							<u-icon name="star-fill" color='#f7cbae' size="16rpx"></u-icon>
						</view>
					</view>
					<text class="grade">切墩（初级）</text>
				</view>

				<view class="table_title">
					<text>用料</text>
					<text class="add_buy">加入采购清单</text>
				</view>
				<mytable :menulist='menulist' class="mytable"></mytable>

				<!-- 步骤 -->
				<view class="course_warp">
					<view class="course_item" v-for="(item,index) in menudetialobj.method" :key="index">
						<view class="course_title">
							步骤{{index}}
						</view>
						<image :src="item.img" class="course_img"></image>
						<view class="course_msg">
							{{item.describe}}
						</view>
					</view>


				</view>


			</view>

			<!-- 小贴士 -->
			<view class="tips_warp">
				<view class="tips_title">
					小贴士
				</view>
				<view v-for="item in menudetialobj.tips" :key="item.tipname">
					<view class="tips_text">
						{{item.tipname}}
					</view>
					<view class="tips_text" v-for="tip in item.tipdescribe" :key="tip">
						{{tip}}
					</view>
				</view>

			</view>

			<!-- 相关菜谱 -->
			<view class="correlation_menu">
				<view class="correlation_title">
					相关菜谱
				</view>
				<mycard>
					<mymenu text="日式火锅" v-for="item in recommendlist" :key="item._id" :src="item.coverpic"
						:pageview="item.pageview" :collection="item.collections" class="correlation_mymenu"
						@click='godetial(item)'></mymenu>


				</mycard>
			</view>
		</view>


	</view>
</template>

<script>
	import logintools from '../../utils/logintools.js';
	export default {
		potions: {
			styleIsolation: 'shared'
		},
		data() {
			return {
				menulist: [],
				//首页传参菜单id
				menuobj: {},
				//菜单详情
				menudetialobj: {},
				//相关推荐
				recommendlist: [],
				//是否收藏
				iscollect: false,
				//用户信息
				userInfo: '',

			};
		},
		methods: {
			goback() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			godetial(menu) {
				//跳转详情页面
				console.log('godetial', menu);
				uni.navigateTo({
					url: `/pages/detials/detials?menu=${JSON.stringify(menu)}`
				})
			},
			async docollect() {
				//登录才可以收藏
				if (logintools.islogin()) {
					//获取用户信息
					this.userInfo = await logintools.getuserinfo();
					// console.log(userInfo);

					this.$service.userService.collect({
						user_id: this.userInfo._id,
						menu_id: this.menuobj._id,
					}).then(res => {
						console.log('docollect', res);
						if (1 == res.code) {
							this.iscollect = true;
						} else if (0 == res.code) {
							this.iscollect = false;
						}

					})
				} else {
					this.iscollect = false;
				}


			}
		},
		async onLoad(options) {
			console.log('options', this.options);
			this.menuobj = JSON.parse(options.menu);
			console.log('menuobj', this.menuobj);

			//菜单详情
			await this.$service.searchService.menuDetail({
				_id: this.menuobj._id
			}).then(res => {
				if (200 == res.meta.status) {
					this.menudetialobj = res.message[0];
					this.menulist = res.message[0].ingredient;
					// console.log('menuDetail', this.menudetialobj);
				}
			});

			//相关推荐
			await this.$service.searchService.memberRecommend().then(res => {
				if (200 == res.meta.status) {
					this.recommendlist = res.message;
					// console.log('memberRecommend', this.recommendlist);
				}
			});

			//我的收藏
			let collectList = await logintools.getUserCollect();
			// console.log('collectList', collectList);
			let iscollectList = collectList.filter(item => item._id == this.menuobj._id);
			// console.log('iscollectList', iscollectList);
			if (iscollectList.length > 0) {
				this.iscollect = true;
			}
		}

	}
</script>

<style lang="scss">
	.header {
		background-color: #ee7b2d;
		width: 750rpx;
		height: 250rpx;
		position: fixed;
		top: 0;
		z-index: 999;

		.myheader {
			width: 100%;
			height: 170rpx;
		}

		.icon_warp {
			width: 100%;
			height: 80rpx;
			display: flex;
			justify-content: flex-end;

			.u-icon {
				margin-right: 20rpx;
			}
		}
	}

	.banner {
		width: 750rpx;
		height: 686rpx;
		margin-top: 250rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.banner_img {
			width: 750rpx;
			height: 386rpx;
		}

		.banner_btn {
			width: 686rpx;
			height: 88rpx;
			line-height: 88rpx;
			background-color: #f0c379;
			margin-top: 28rpx;
			margin-bottom: 52rpx;
			border-radius: 16rpx;
			color: #fff;
			font-size: 28rpx;
			text-align: center;

		}

		.menu_title {
			color: #2c2c2c;
			font-size: 32rpx;
		}

		.mypageview {
			margin-top: 32rpx;
			margin-bottom: 42rpx;
		}

		.overlay {
			width: 750rpx;
			height: 385rpx;
			background-color: rgba(0, 0, 0, .3);
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #fff;
			font-size: 32rpx;

			.overlay_title {
				margin-top: 88rpx;
				margin-bottom: 32rpx;
			}

			.overlay_btn {
				width: 224rpx;
				height: 68rpx;
				line-height: 68rpx;
				background-color: #edd6b2;
				border-radius: 34rpx;
				color: #76401f;
				font-size: 32rpx;
			}

			.go_login {
				display: flex;
				margin-top: 36rpx;
			}
		}
	}

	.content_warp {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		// background-color: pink;

		.comprehend_warp {
			width: 686rpx;
			padding-bottom: 30rpx;

			.comprehend_title {
				color: #2c2c2c;
				font-size: 28rpx;
				font-weight: 700;
				margin: 24rpx 0 36rpx 0;
			}

			.comprehend_text {
				color: #686868;
				font-size: 28rpx;

			}
		}

		.ingredients_warp {
			width: 686rpx;
			margin-top: 40rpx;

			.ingredients_grade {
				display: flex;
				justify-content: center;
				align-items: center;

				.time {
					color: #686868;
					font-size: 24rpx;
					margin: 0 40rpx 0 12rpx;
				}

				.star_warp {
					width: 36rpx;
					height: 36rpx;

					.top {
						width: 100%;
						height: 18rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.bottom {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
						height: 18rpx;
					}
				}

				.grade {
					color: #686868;
					font-size: 24rpx;
					margin-left: 14rpx;
				}
			}

			.table_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 686rpx;
				font-size: 28rpx;
				margin: 34rpx 0;

				.add_buy {
					color: #ee7b2d;
				}
			}

			.course_warp {
				width: 686rpx;
				margin-top: 46rpx;
				border-bottom: 1rpx solid #dfdfdf;

				.course_item {
					width: 100%;
					color: #686868;
					font-size: 28rpx;
					margin-bottom: 48rpx;

					.course_title {
						color: #2c2c2c;
						font-weight: 700;
					}

					.course_img {
						width: 100%;
						height: 440rpx;
						margin: 26rpx 0 34rpx 0;
					}
				}

			}
		}

		.tips_warp {
			width: 686rpx;
			color: #686868;
			font-size: 24rpx;
			margin-top: 40rpx;
			margin-bottom: 46rpx;
			background-color: #eaeaea;
			padding-bottom: 30rpx;
			border-radius: 8rpx;

			.tips_title {
				color: #2c2c2c;
				font-size: 28rpx;
				font-weight: 700;
				margin: 46rpx 0 28rpx 40rpx;
			}

			.tips_text {
				margin: 0 0 18rpx 40rpx;
			}
		}

		.correlation_menu {
			width: 686rpx;

			.correlation_title {
				margin-bottom: 26rpx;
				font-size: 28rpx;
				color: #2c2c2c;
				font-weight: 700;
			}

			.correlation_mymenu {
				width: 334rpx;
				margin-bottom: 40rpx;
			}
		}
	}
</style>