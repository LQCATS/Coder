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

<style lang="scss">
	.card {
		width: 686rpx;
		min-height: 50rpx;
		border-radius: 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		// background-color: palegoldenrod;
	}
</style>