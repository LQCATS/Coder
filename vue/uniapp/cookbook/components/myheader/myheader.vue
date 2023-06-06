<template>
	<view>
		<view class="header">
			<view class="header_title">
				{{title}}
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
		justify-content: center;
		align-items: flex-end;
		

		.header_title {
			color: #fff;
			font-size: 36rpx;
			line-height: 50rpx;
		}
	}
</style>