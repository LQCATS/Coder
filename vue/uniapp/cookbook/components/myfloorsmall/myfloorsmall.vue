<template>
	<view class="right">
		<image :src="src" mode="widthFix"></image>
		<view class="image_title">
			{{text}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			}
		},
		name: "myfloorsmall",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.right {
		width: 100%;
		height: 176rpx;
		border-radius: 8rpx;
		position: relative;

		image {
			width: 100%;
			height: 176rpx;
		}

		.image_title {
			color: #fff;
			font-size: 28rpx;
			letter-spacing: 2rpx;
			height: 56rpx;
			text-align: center;
			line-height: 56rpx;
			padding: 0 12rpx;
			background-color: rgba(216, 111, 50, .7);
			border-radius: 8rpx;
			position: absolute;
			top: 12rpx;
			left: 12rpx;
		}
	}
</style>