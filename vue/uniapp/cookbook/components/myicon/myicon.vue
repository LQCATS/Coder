<template>
	<view class="icon_warp" @click="test">
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
		},
		methods: {
			test() {
				console.log(222);
				this.$emit("click")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.icon_warp {
		min-width: 70rpx;
		min-height: 96rpx;
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