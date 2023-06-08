<template>
	<view>
		<!-- hearder -->
		<view class="header_warp">
			<myheader title="支付完成" color="background-color:#ffae25">
				<view class="goback_icon">
					<u-icon name="arrow-left" color='#fff' @tap='goback'></u-icon>
				</view>
			</myheader>
			<view class="header_msg_warp">
				<image src="../../static/bgimages/buysuccess2.png" mode="widthFix" class="successimg"></image>
				<view class="success_title">
					支付成功
				</view>
				<view class="pay">
					已支付￥45
				</view>
				<view class="img_bg">
					<image class="img2" src="../../static/bgimages/buysuccess.png" mode="widthFix"></image>
				</view>
			</view>
		</view>

		<!-- content -->
		<view class="content_warp">
			<view class="content_title">
				<text class="content_title_left">立即分享</text>
				<text>领取豪礼</text>
			</view>
			<button type="default" class="btn frist_btn">立即分享</button>
			<button type="default" class="btn second_btn">返回首页</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goback() {
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.header_warp {
		width: 100%;
		height: 624rpx;
		background: url(../../static/bgimages/buysuccess1.png) no-repeat;
		background-size: cover;

		.header_msg_warp {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.successimg {
				width: 96rpx;
				height: 96rpx;
				margin-top: 40rpx;
			}

			.success_title {
				margin: 28rpx 0 16rpx 0;
				color: #ffffff;
				font-size: 36rpx;
			}

			.pay {
				color: #ffc37e;
				font-size: 32rpx;
				margin-bottom: 36rpx;
			}

			.img_bg {
				width: 250rpx;
				height: 250rpx;
				background-color: #ffa543;
				border-radius: 250rpx;
				box-shadow: 0 0 0 20rpx #ff921e;
				display: flex;
				align-items: center;
				justify-content: center;

				.img2 {
					width: 100%;
				}
			}

		}
	}

	.content_warp {
		margin-top: 158rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.content_title {
			color: #5f5f5f;
			font-size: 40rpx;

			.content_title_left {
				margin-right: 20rpx;
			}
		}

		.btn {
			width: 542rpx;
			height: 90rpx;
			line-height: 90rpx;
			font-size: 36rpx;
			border-radius: 86rpx;
			color: #ffffff;
			background-color: #ffa543;
			margin-top: 48rpx;
		}

		.second_btn {
			background-color: #fff;
			color: #ffa543;
			border: 1rpx solid #ffa543;
		}
	}
</style>