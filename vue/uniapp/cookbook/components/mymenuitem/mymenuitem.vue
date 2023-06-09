<template>
	<view class="menu_item">
		<image :src="src" class="menu_img"></image>
		<view class="title">
			{{title}}
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
			src: {
				type: String,
				default: ''
			}
		},
		name: "mymenuitem",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.menu_item {
		min-width: 172rpx;
		min-height: 260rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.menu_img {
			width: 100%;
			height: 208rpx;
		}

		.title {
			font-size: 22rpx;
			color: #5a5a5a;
			margin-top: 10rpx;
		}
	}
</style>