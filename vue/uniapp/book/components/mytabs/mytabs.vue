<template>
	<view>
		<u-tabs :list="tablist" :scrollable="true" lineColor='orange' :activeStyle="{color: 'orange'}" lineWidth="50"
			:inactiveStyle='{color:"#fff"}' itemStyle='width:100rpx;height:100rpx'></u-tabs>
	</view>
</template>

<script>
	export default {
		props: {
			tablist: {
				type: Array,
				default: () => []
			}
		},
		name: "mytabs",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>