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
						<image src="" mode=""></image>
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
					</view>
				</view>
				<view class="banner_bootom">


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
				]
			};
		}
	}
</script>

<style lang="scss">
	.banner {
		width: 750rpx;
		height: 324rpx;
		background-color: palegoldenrod;
		margin-top: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.banner_bg {
			width: 686rpx;
			height: 324rpx;
			background-color: #33353d;
			border-radius: 16rpx;

			.banner_top {
				display: flex;
				margin: 32rpx 0 0 32rpx;

				.top_left {
					width: 128rpx;
					height: 129rpx;
					background-color: skyblue;
				}

				.top_right {
					background-color: yellow;
					width: 482rpx;

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

				}
			}
		}
	}
</style>