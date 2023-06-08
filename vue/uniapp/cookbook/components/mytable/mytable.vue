<template>
	<view>
		<u-list height="minHeight:328rpx;" style="border-bottom: 1rpx solid #dbdbdb;">
			<u-list-item v-for="(item, index) in menulist" :key="index">
				<view class="menu_item">
					<view class="title">
						{{item.name}}
					</view>
					<view class="msg">
						{{item.number}}
					</view>
				</view>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		props: {
			menulist: {
				type: Array,
				default: () => []
			}
		},
		name: "mytable",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.menu_item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 686rpx;
		height: 70rpx;
		margin: 0 auto;
		border-top: 1rpx solid #dbdbdb;
		color: #686868;
		font-size: 28rpx;
	
		.msg {
			margin-right: 152rpx;
		}
	}
</style>