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
				<swiper-item>
					<image src="../../static/bgimages/NoPath-(91).png" mode="widthFix" class="banner_image"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/bgimages/NoPath-(91).png" mode="widthFix" class="banner_image"></image>
				</swiper-item>

			</swiper>
		</view>

		<!-- nav -->
		<view class="nav">
			<mycard>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
				<myicon class="myicon" src="../../static/images/jiachangcia588@3x.png" text="家常菜"></myicon>
			</mycard>

		</view>
		
		<!-- content -->
		<view class="content_warp">
			<!-- 内容部分上面的推荐菜谱 -->
			<mycard>
				<view class="recommend_left">
					
				</view>
				<view class="recommend_right">
					<view class="right">
						
					</view>
					<view class="right right_bottom">
						
					</view>
					
				</view>
				
			</mycard>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 220rpx;
		background: url('../../static/bgimages/home_header.png') no-repeat;
		background-size: cover;
		position: relative;
		border: 1rpx solid transparent;
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
		margin-top: 62rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.swiper {
			width: 686rpx;
			height: 304rpx;
		}

		.swiper-item {
			display: block;
			width: 686rpx;
			height: 304rpx;
			background-color: yellow;

		}
	}

	.uni-swiper-dots-horizontal {
		bottom: 0px;
	}

	.banner_image {
		width: 100%;
		border-radius: 16rpx;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 32rpx;

		.myicon {
			margin: 0 80rpx 28rpx 0;

			&:nth-child(5n) {
				margin-right: 0;
			}
		}
	}
	
	.content_warp {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
		
		.recommend_left {
			width: 334rpx;
			height: 362rpx;
			background-color: skyblue;
			border-radius: 8rpx;
			margin-right: 20rpx;
		}
		
		.recommend_right {
			width: 332rpx;
			height: 362rpx;
			
			.right {
				width: 100%;
				height: 176rpx;
				background-color: yellow;
				border-radius: 8rpx;
				margin-bottom: 10rpx;
			}
			.right_bottom {
				margin-bottom: 0;
			}
		}
	}
</style>