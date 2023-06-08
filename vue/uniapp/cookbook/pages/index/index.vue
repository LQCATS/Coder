<template>
	<view class="content">
		<!-- header -->
		<view class="header">
			<view class="header_title">
				香哈菜谱大全
			</view>
			<view class="header_title_msg">
				小白学做菜必备烹饪助手
			</view>
			<view class="header_search">
				<mysearch></mysearch>
			</view>
		</view>
		<!-- banner -->
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
				indicator-active-color="#d86f32">
				<swiper-item v-for="banner in bannerlist" :key="banner._id">
					<view class="banner_image">
						<image :src="banner.image_src" mode="widthFix" class="_image"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- nav -->
		<view class="nav">
			<mycard>
				<myicon class="myicon" v-for="icon in iconlist" :key="icon._id" :src="icon.image_src" :text="icon.name"
					@click="gosearch(icon)">
				</myicon>
			</mycard>
		</view>

		<!-- content -->
		<view class="content_warp">
			<!-- 内容部分上面的推荐菜谱 -->
			<mycard>
				<view class="recommend_left">
					<myfloorbig :text="floorsbiglist.floor_title" :swiperlist='floorsbiglist.floor_imgs'></myfloorbig>
				</view>
				<view class="recommend_right">
					<myfloorsmall v-for="img in floorssmalllist" :key="img._id" :src='img.floor_imgs[0]'
						:text="img.floor_title"></myfloorsmall>
				</view>

			</mycard>

			<!-- 内容部分下面的推荐菜谱 -->
			<mycard class="card_bottom">
				<mymenu v-for="menu in recommendlist" :key="menu._id" :text="menu.name" :src="menu.coverpic"
					:pageview="menu.pageview" :collection="menu.collections" class="recommend_item"
					@click='godetial(menu)'></mymenu>
			</mycard>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerlist: [],
				iconlist: [],
				floorsbiglist: [],
				floorssmalllist: [],
				recommendlist: [],
			}
		},
		onLoad() {
			//获取banner图片
			this.$service.homeService.swiperdata().then(res => {
				if (200 == res.meta.status) {
					this.bannerlist = res.message;
				}
			});

			//获取菜单导航
			this.$service.homeService.catitems().then(res => {
				if (200 == res.meta.status) {
					this.iconlist = res.message;
				}
			});

			//获取楼层图片
			this.$service.homeService.floorsdata().then(res => {
				if (200 == res.meta.status) {
					let floorList = [];

					res.message.forEach(item => {
						floorList.push({
							floor_imgs: item.floor_imgs,
							floor_title: item.floor_title.substring(1, item.floor_title.length -
								1),
							_id: item._id
						})
					})

					this.floorssmalllist = floorList.slice(1);
					this.floorsbiglist = floorList[0];
				}
			})

			//获取首页推荐商品
			this.$service.homeService.recommend().then(res => {
				if (200 == res.meta.status) {
					this.recommendlist = res.message;
				}
			})

		},
		methods: {
			gosearch(icon) {
				// console.log(333, icon.name);
				if ('分类' != icon.name) {
					//跳转搜索页面
					uni.navigateTo({
						url: `/pages/search/search?icon=${JSON.stringify(icon)}`
					})
				} else {
					//跳转分类页面
					uni.navigateTo({
						url: `/pages/classify/classify?icon=${JSON.stringify(icon)}`
					})
				}

			},
			godetial(menu) {
				//跳转详情页面
				uni.navigateTo({
					url: `/pages/detials/detials?menu=${JSON.stringify(menu)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 220rpx;
		background: url('../../static/bgimages/home_header.png') no-repeat;
		background-size: cover;
		position: fixed;
		top: 0;
		z-index: 999;
		box-sizing: border-box;


		.header_title {
			width: 240rpx;
			color: #fff;
			font-size: 40rpx;
			margin-left: 12rpx;
			margin-top: 78rpx;
		}

		.header_title_msg {
			color: #fff;
			font-size: 22rpx;
			margin-left: 12rpx;
			letter-spacing: 2rpx;
		}

		.header_search {
			height: 74rpx;
			width: 750rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: -35rpx;
			z-index: 9999;

		}
	}

	.banner {
		width: 750rpx;
		height: 304rpx;
		margin-top: 282rpx;


	}

	// banner 的 swiper样式开始
	.uni-swiper-dots-horizontal {
		bottom: 0px;
	}

	.swiper {
		width: 750rpx;
		height: 304rpx;
	}



	.banner_image {
		width: 750rpx;
		height: 304rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		._image {
			width: 686rpx;
			border-radius: 16rpx;
		}
	}

	// banner 的 swiper样式结束

	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 32rpx;

		.myicon {
			margin: 0 80rpx 28rpx 0;
			color: #444444;
			font-size: 22rpx;

			&:nth-child(5n) {
				margin-right: 0;
			}
		}
	}

	.content_warp {
		width: 100%;
		display: flex;
		margin-top: 10rpx;
		flex-direction: column;
		align-items: center;

		.recommend_left {
			width: 334rpx;
			height: 362rpx;
			border-radius: 8rpx;
			margin-right: 20rpx;
			position: relative;
		}

		.recommend_right {
			width: 332rpx;
			height: 362rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

		}
	}

	.card_bottom {
		margin-top: 26rpx;

		.recommend_item {
			margin-bottom: 30rpx;
			width: 334rpx;
			height: 334rpx;

		}
	}
</style>