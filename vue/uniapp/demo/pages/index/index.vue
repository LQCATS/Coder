<template>
	<view class="carPage">
		<view class="header">
			<view class="headerTitle">
				购物车
			</view>
			<image src="../../static/addbig.png" mode="widthFix" class="headerAdd"></image>
		</view>
		<view class="content">
			<view class="goodsItem">
				<image src="" class="goodsImg"></image>
				<view class="goodsMsg">
					<view>男士格子衬衫</view>
					<view class="numBox">
						<image src="../../static/add.png" class="add"></image>
						<view class="num">
							1
						</view>
						<image src="../../static/subtract.png" class="subtract"></image>
					</view>
				</view>
				<view class="price">
					￥200
				</view>
			</view>
		</view>
		<view class="totalBox">
			<view class="flexBox">
				<view class="total">
					<p>
						总价：
						<text class="totalPrice1">￥500</text>
					</p>
					<text class="send">包邮</text>
				</view>
				<view class="totalPrice">
					￥500
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.carPage {
		width: 100vw;
		height: 100vh;
	}

	.header {
		width: 100%;
		height: 15%;
		background-color: #3366FF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 100rpx 40rpx 0;
		box-sizing: border-box;

		.headerTitle {
			color: #fff;
			font-size: 60rpx;
		}

		.headerAdd {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.content {
		width: 100%;
		/* background-color: pink; */
	}

	.goodsItem {
		margin: 40rpx;
		width: calc(100% - 80rpx);
		height: 200rpx;
		/* background-color: aqua; */
		display: flex;

		.goodsImg {
			width: 200rpx;
			height: 100%;
			background-color: #ccc;
		}

		.goodsMsg {
			margin: 20rpx 40rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.numBox {
				display: flex;
				align-items: center;

				.add {
					width: 30rpx;
					height: 30rpx;
				}

				.num {
					color: #3366FF;
					margin: 0 20rpx;
				}

				.subtract {
					width: 30rpx;
					height: 10rpx;
				}

			}
		}

		.price {
			color: #3366FF;
			margin-top: 20rpx;
			margin-left: auto;
		}
	}

	.totalBox {
		width: 100%;
		position: fixed;
		bottom: 0;
		border-top: 1rpx solid #ccc;
	}

	.flexBox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 40rpx;

		.total {
			.totalPrice1 {
				color: #3366FF;
			}

			.send {
				color: #767676;
				font-size: 30rpx;
			}
		}

		.totalPrice {
			color: #3366FF;
		}

	}
</style>