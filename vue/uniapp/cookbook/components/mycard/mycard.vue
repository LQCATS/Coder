<template>
	<view class="card">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "mycard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scopeds>
	.card {
		width: 686rpx;
		min-height: 100rpx;
		border-radius: 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>