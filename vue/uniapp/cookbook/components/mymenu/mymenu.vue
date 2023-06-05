<template>
	<view class="bottom_menu_item">
		<image :src="src"></image>
		<view class="menu_title">
			{{text}}
		</view>
		<view class="menu_msg">
			<u--text suffixIcon="eye-fill" iconStyle="font-size: 16px;color:#aaa" :text="pageview" size="10"
				color='#aaa'></u--text>
			<u--text suffixIcon="star-fill" iconStyle="font-size: 16px;color:#aaa" :text="collection" size="10"
				color='#aaa'></u--text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: ''
			},
			src: {
				type: String,
				default: ''
			},
			pageview: {
				type: [Number, String],
				default: 0
			},
			collection: {
				type: [Number, String],
				default: 0
			}
		},
		name: "mymenu",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.bottom_menu_item {
		width: 334rpx;
		height: 334rpx;
		// background-color: skyblue;

		image {
			width: 100%;
			height: 248rpx;
		}

		.menu_title {
			font-size: 28rpx;
			color: #575757;
			margin-bottom: 10rpx;
		}

		.menu_msg {
			display: flex;
		}
	}
</style>