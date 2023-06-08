<template>
	<view>
		<view class="menu_msg">
			<u--text suffixIcon="eye-fill" iconStyle="font-size: 16px;color:#aaa;margin:0 23rpx 0 10rpx;"
				:text="pageview" size="10" color='#aaa'></u--text>
			<u--text suffixIcon="star-fill" iconStyle="font-size: 16px;color:#aaa;margin:0 23rpx 0 10rpx"
				:text="collection" size="10" color='#aaa'></u--text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pageview: {
				type: [Number, String],
				default: 0
			},
			collection: {
				type: [Number, String],
				default: 0
			}
		},
		name: "mypageview",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.menu_msg {
		display: flex;
		align-items: center;
		justify-content: center;
		// min-width: 300rpx;
	}
</style>