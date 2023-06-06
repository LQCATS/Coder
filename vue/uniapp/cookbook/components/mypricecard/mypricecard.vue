<template>
	<view class="price_card">
		<view class="time">
			{{time}}个月
		</view>
		<view class="discount">
			<text style="font-size: 36rpx;">￥</text>{{discount}}
		</view>
		<view class="price">
			￥{{price}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			time: {
				type: String,
				default: ''
			},
			discount: {
				type: String,
				default: ''
			},
			price: {
				type: String,
				default: ''
			},
		},
		name: "mypricecard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.price_card {
		width: 212rpx;
		height: 232rpx;
		background-color: #fbfcfe;
		border: 1rpx solid #e0e0e0;
		border-radius: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		.time {
			font-size: 36rpx;
			color: #464646;
			margin-top: 20rpx;
		}

		.discount {
			color: #deb264;
			font-size: 52rpx;
		}

		.price {
			font-size: 36rpx;
			color: #a49fa0;
			text-decoration: line-through;
		}
	}
</style>