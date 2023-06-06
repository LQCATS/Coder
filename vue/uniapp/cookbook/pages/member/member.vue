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
						<image src="../../static/bgimages/member_banner4.png" mode="widthFix"></image>
					</view>
					<view class="top_right">
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
			<view class="menu_warp">
				<view class="warp_title">
					VIP最新推荐
				</view>
				<myscroll class="scroll_wrap">
					<myvipmenu class="item" text="川味凉粉" src="../../static/bgimages/member_content1.png"
						collection="12.3万" pageview="5214"></myvipmenu>

				</myscroll>
			</view>
			<!--  -->
			<view class="menu_warp">
				<view class="warp_title">
					限时免费体验
				</view>
				<myscroll class="scroll_wrap">
					<myvipmenu class="item" text="川味凉粉" src="../../static/bgimages/member_content1.png"
						collection="12.3万" pageview="5214"></myvipmenu>
				</myscroll>
			</view>

			<!-- 猜你喜欢 -->
			<view class="menu_warp">
				<view class="warp_title">
					猜你喜欢
				</view>
				<mycard>
					<mymenu class="like" text="川味凉粉" src="../../static/bgimages/member_content2.png" collection="12.3万"
						pageview="5214"></mymenu>

				</mycard>
			</view>
		</view>
	</view>
</template>

<script>
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
			};
		},
		methods: {
			gobuymember() {
				uni.navigateTo({
					url: '/pages/buymember/buymember'
				});
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
		margin-top: 250rpx;

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