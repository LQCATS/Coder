<template>
	<view>
		<u-tabs :list="tabslist" lineColor="transparent" 
		:activeStyle="{
		            color: '#fff',
		            fontWeight: 'bold',
		            transform: 'scale(1.05)',
					fontSize: '36rpx'
		        }" 
		:inactiveStyle="{
					fontSize: '22rpx',
		            color: '#fff',
		            transform: 'scale(1)'
		        }" 
		itemStyle="padding-left: 32rpx; padding-right: 60rpx; height: 34px;">
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
/deep/ .u-tabs__wrapper {
    background-color: #ee7b2d !important;
}
</style>