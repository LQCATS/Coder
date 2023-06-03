<template>
	<view class="search">
		<u-icon name="search" color="#f2a063" size="20"></u-icon>
		<input type="text" class="header_input" placeholder="请输入关键字" placeholder-style="color: #ccc;font-size: 20rpx;">
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
		height: 85%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		border-radius: 50rpx;
		border: 1rpx solid #f9f9f9;


		.header_input {
			width: 30%;
			height: 100%;
			box-sizing: border-box;

		}

	}
</style>