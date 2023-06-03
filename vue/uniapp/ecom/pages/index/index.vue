<template>
	<view class="content">
		<!-- 头部导航 -->
		<view class="nav">
			<view class="login">
			</view>
			<view class="nav_search">
				<u-search placeholder="请输入商品" v-model="keyword" :showAction="false"></u-search>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="banner_wrap">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="banner_img">
						<image class="_image" src="http://localhost:3000/public/img/banner.png" mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="banner_img">
						<image class="_image" src="http://localhost:3000/public/img/banner1.png" mode="widthFix">
						</image>
					</view>
				</swiper-item>

			</swiper>
		</view>

		<!-- 新闻简报 -->
		<view class="news_warp">
			<view class="news_title">
				<text class="red">新闻</text>
				<text>简报</text>
			</view>
			<view class="border"></view>
			<view class="news_type">
				百货
			</view>
			<view class="right">
				&gt;
			</view>
		</view>

		<!-- card -->
		<mycard>
			<mybtn></mybtn>
		</mycard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			}
		},
		onLoad() {

		},
		onTabItemTap() {
			let app = getApp();
			// app.globalData.goodsdetial = null;
			app.globalData.prepage = '';
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		width: 750rpx;
		height: 100vh;
		background: linear-gradient(red 20%, #ccc 50%);
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.nav {
		width: 750rpx;
		height: 80rpx;
		position: absolute;
		top: 50rpx;
		z-index: 99;
		display: flex;
		align-items: center;

		.login {
			width: 200rpx;
			height: 70rpx;
			background: url(http://localhost:3000/public/img/logo.png) no-repeat;
			background-size: contain;
		}

		.nav_search {
			width: 400rpx;
			height: 70rpx;
		}

	}

	.u-search__content {
		height: 60rpx;
	}

	.banner_wrap {
		margin-top: 180rpx;
		width: 750rpx;
		height: 300rpx;

		.swiper {
			width: 100%;
			height: 100%;
		}

		.banner_img {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 750rpx;
			height: 300rpx;

			._image {
				width: 700rpx;
				border-radius: 20rpx;
			}
		}

	}

	.news_warp {
		width: 700rpx;
		height: 100rpx;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		margin-bottom: 30rpx;

		.news_title {
			font-weight: 700;
			margin-left: 20rpx;

			.red {
				color: red;
			}
		}

		.border {
			margin: 0 30rpx;
			width: 1rpx;
			height: 35rpx;
			border-left: 2rpx solid gray;
		}

		.right {
			margin-left: auto;
			margin-right: 20rpx;
		}
	}
</style>