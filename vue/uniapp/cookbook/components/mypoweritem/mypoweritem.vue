<template>
	<view>
		<view class="vippower_item" v-for="item in powerlist" :key="item.title">
			<image :src="item.src" mode="widthFix"></image>
			<view class="power_msg_warp">
				<view class="power_msg_title">
					{{item.title}}
				</view>
				<view class="power_msg">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			powerlist: {
				type: Array,
				default: () => []
			}
		},
		name: "mypoweritem",
		data() {

			return {

			};
		}
	}
</script>

<style lang="scss">
	.vippower_item {
		width: 100%;
		display: flex;
		align-items: center;
		margin-bottom: 50rpx;

		image {
			width: 90rpx;
			height: 90rpx;
		}

		.power_msg_warp {
			flex: 1;
			margin-left: 44rpx;
			border-bottom: 1rpx solid #dbdbdb;

			.power_msg_title {
				color: #484848;
				font-size: 32rpx;
				font-weight: 700;
				margin-bottom: 15rpx;
			}

			.power_msg {
				color: #aaaaaa;
				font-size: 24rpx;
				margin-bottom: 15rpx;
			}


		}
	}
</style>