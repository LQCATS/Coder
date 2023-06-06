<template>
	<view class="menu_item">
		<image src="../../static/bgimages/wode3.png" mode="widthFix"></image>
		<view class="title">
			蜜豆鲷鱼烧
		</view>
	</view>
</template>

<script>
	export default {
		name:"mymenuitem",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.menu_item {
	min-width: 172rpx;
	min-height: 260rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	image {
		width: 100%;
	}
	
	.title {
		font-size: 22rpx;
		color: #5a5a5a;
		margin-top: 10rpx;
	}
}
</style>