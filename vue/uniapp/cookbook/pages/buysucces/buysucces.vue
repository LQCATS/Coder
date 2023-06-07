<template>
	<view>
		<view class="header_warp">
			<myheader title="支付完成" color="background-color:#ffae25">
				<view class="goback_icon">
					<u-icon name="arrow-left" color='#fff' @tap='goback'></u-icon>
				</view>
			</myheader>
			<view class="header_msg_warp">
				<image src="../../static/bgimages/buysuccess2.png" mode="widthFix" class="successimg"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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

		}
	}
</style>