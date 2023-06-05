<template>
	<view class="swiper_warp">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			indicator-active-color="#d86f32">
			<swiper-item v-for="item in swiperlist" :key="item">
				<image :src="item" mode="widthFix" class="banner_image"></image>
				<view class="image_title">
					{{text}}
				</view>
			</swiper-item>

		</swiper>

	</view>
</template>

<script>
	export default {
		props: {
			swiperlist: {
				type: Array,
				default: () => []
			},
			text: {
				type: String,
				default: ''
			}
		},
		name: "myfloorbig",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.swiper_warp {
		width: 334rpx;
		height: 362rpx;

		.swiper {
			width: 100%;
			height: 100%;
		}
	}

	image {
		width: 100%;
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
</style>