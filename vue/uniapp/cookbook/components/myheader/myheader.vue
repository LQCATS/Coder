<template>
	<view>
		<view class="header" :style="color">
			<view class="header_title_warp">
				<slot></slot>
				<view class="header_title">
					{{title}}
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			}
		},
		name: "myheader",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 150rpx;
		background-color: #ee7b2d;
		border-bottom: 1rpx solid #dbdbdb;
		display: flex;
		align-items: flex-end;
		padding-bottom: 20rpx;


		.header_title_warp {
			color: #fff;
			font-size: 36rpx;
			// line-height: 50rpx;
			display: flex;
			align-items: center;
			padding-left: 20rpx;

			.header_title {
				margin-left: 252rpx;
			}
		}
	}
</style>