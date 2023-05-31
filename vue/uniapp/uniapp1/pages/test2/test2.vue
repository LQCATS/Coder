<template>
	<view>
		<view class="warp">
			<view class="defaul" :class="{active: curpos == 0}" @click="curpos = 0">菜单1</view>
			<view class="defaul" :class="{active: curpos == 1}" @click="curpos = 1">菜单2</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curpos: 0,
			};
		}
	}
</script>

<style lang="scss">
	.warp {
		display: flex;

		.defaul {
			width: 100rpx;
			height: 50rpx;
			background-color: #ccc;
			border: 1px solid #000;
			text-align: center;
			line-height: 50rpx;
		}

		.active {
			background-color: pink;
			color: #fff;
		}
	}
</style>