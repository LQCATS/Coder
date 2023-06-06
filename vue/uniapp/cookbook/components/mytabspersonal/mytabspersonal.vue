<template>
	<view>
		<u-tabs :list="tabslist" lineColor="transparent" 
		:activeStyle="{
		            color: '#ee7b2d',
		            fontWeight: 'bold',
		            transform: 'scale(1.05)',
					fontSize: '28rpx'
		        }" 
		:inactiveStyle="{
					fontSize: '22rpx',
		            color: '#5a5a5a',
		            transform: 'scale(1)'
		        }" 
		itemStyle=" padding-right: 20rpx; height: 60rpx;">
		</u-tabs>
	</view>
</template>

<script>
	export default {
		props: {
			tabslist: {
				type: Array,
				default: () => []
			}
		},
		name: "mytabs",
		data() {
			return {

			};
		},
		options: { styleIsolation: 'shared' },
	}
</script>

<style lang="scss" scoped>
// /deep/ .u-tabs__wrapper {
//     background-color: #ee7b2d !important;
// }
</style>