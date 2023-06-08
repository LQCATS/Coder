<template>
	<view class="menu_item" @click="godetail">
		<image :src="src" class="menu_image"></image>
		<view class="menu_msg_warp">
			<view class="menu_title">
				{{title}}
			</view>
			<view class="menu_text">
				{{text}}
			</view>
			<view class="menu_msg">
				<u--text suffixIcon="eye-fill" iconStyle="font-size: 16px;color:#aaa;marginLeft:10rpx" :text="pageview" size="10"
					color='#aaa'></u--text>
				<u--text suffixIcon="star-fill" iconStyle="font-size: 16px;color:#aaa;marginLeft:10rpx" :text="collection" size="10"
					color='#aaa'></u--text>
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
		name: "mymenubig",
		data() {
			return {

			};
		},
		methods:{
			godetail() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.menu_item {
		display: flex;
		min-height: 200rpx;

		.menu_image {
			width: 314rpx;
			height: 210rpx;
		}

		.menu_msg_warp {
			margin-left: 18rpx;

			.menu_title {
				color: #3a3a3a;
				font-size: 28rpx;
				margin-top: 20rpx;
			}

			.menu_text {
				color: #b3b3b3;
				font-size: 22rpx;
				margin-top: 20rpx;
			}

			.menu_msg {
				display: flex;
				margin-top: 50rpx;
			}
		}
	}
</style>