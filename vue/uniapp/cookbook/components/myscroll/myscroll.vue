<template>
	<view class="item_warp">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "myscroll",
		data() {
			return {

			}
		}

	}
</script>

<style lang="scss">
	.item_warp {
		width: 100%;
		min-height: 260rpx;
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	
</style>