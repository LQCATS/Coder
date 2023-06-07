<template>
	<view class="search">
		<u-icon name="search" color="#f2a063" size="20"></u-icon>
		<input type="text" class="header_input" placeholder="想吃什么搜这里，如麻婆豆腐" placeholder-style="color: #bfbfbf;font-size: 22rpx;">
	</view>

</template>

<script>
	export default {
		name: "mysearch",
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		width: 686rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f1f1f1;
		border-radius: 10rpx;
		border: 1rpx solid #f9f9f9;
		margin: 23rpx 0;

		.header_input {
			height: 90%;
			box-sizing: border-box;

		}

	}
</style>