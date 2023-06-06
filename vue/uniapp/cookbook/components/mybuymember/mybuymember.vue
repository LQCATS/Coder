<template>
	<view>
		<view class="buy_member_warp">
			<view class="mycard">
				<slot></slot>
			</view>
			<view class="discount_msg">
				<view class="discount_msg_btn">
					恭喜
				</view>
				<view class="discount_msg_text">
					{{text}}
				</view>
			</view>

			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: ''
			}
		},
		name: "mybuymember",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.buy_member_warp {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 750rpx;

	}

	.discount_msg {
		width: 686rpx;
		display: flex;
		align-items: center;
		margin: 26rpx 0 34rpx 0;

		.discount_msg_btn {
			width: 92rpx;
			height: 42rpx;
			line-height: 42rpx;
			font-size: 28rpx;
			text-align: center;
			color: #deb264;
			background: url(../../static/bgimages/member2_card1.png) no-repeat;
			background-size: cover;
		}

		.discount_msg_text {
			color: #7b5b21;
			font-size: 24rpx;
		}
	}

	

	.mycard {
		width: 686rpx;
		min-height: 50rpx;
		border-radius: 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>