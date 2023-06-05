<template>
	<view>
		<!-- header -->
		<myheader title="VIP会员"></myheader>
		<!-- nav -->
		<mytabs :tabslist='tabslist'></mytabs>
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
							<view class="member_status">
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
				]
			};
		}
	}
</script>

<style lang="scss">
	.banner {
		width: 750rpx;
		height: 324rpx;
		margin-top: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;

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
</style>