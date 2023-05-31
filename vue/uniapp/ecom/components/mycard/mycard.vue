<template>
	<view class="mycard">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "maycard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.mycard {
		width: 700rpx;
		min-height: 100rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
</style>