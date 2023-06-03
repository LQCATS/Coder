<template>
	<view class="icon_warp">
		<image :src="src" mode="widthFix" class="icon_image"></image>
		<text>{{text}}</text>
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
		name: "myicon",
		data() {
			return {

			};

		},
		onShow() {
			console.log(this.src, this.text);
		}
	}
</script>

<style lang="scss" scoped>
	.icon_warp {
		width: 70rpx;
		height: 96rpx;
		// background-color: yellowgreen;
		display: flex;
		flex-direction: column;
		align-items: center;

		.icon_image {
			width: 66rpx;
			height: 60rpx;
		}
		
		text {
			font-size: 20rpx;
		}
	}
</style>