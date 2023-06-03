<template>
	<view class="search">
		<view class="search_icon">
			<image src="http://localhost:3000/public/img/search.png" mode="widthFix"></image>
		</view>
		<input type="text" class="header_input" placeholder="请输入关键字">
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

<style lang="scss">
	.search {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		.header_input {
			background-color: #f0faff;
			width: 95%;
			height: 50rpx;
			border-radius: 30rpx;
			padding-left: 100rpx;
			box-sizing: border-box;

		}

		.search_icon {
			height: 50rpx;
			width: 40rpx;
			position: absolute;
			top: 0;
			left: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				width: 90%;
			}
		}
	}

	.uni-input-placeholder {
		color: #ccc;
		font-size: 25rpx;
	}
</style>