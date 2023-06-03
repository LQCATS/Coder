<template>
	<u-tabs :list="tablist" :scrollable="true" lineColor='transparent'
		:activeStyle="{color: '#fff',backgroundColor:'#2badff',padding:'10rpx 10rpx',borderRadius: '40rpx',fontSize:'25rpx',width:'100'}"
		:inactiveStyle='{color:"#333",fontSize:"25rpx"}' itemStyle='width:100rpx;height:100rpx'></u-tabs>
</template>

<script>
	export default {
		props: {
			tablist: {
				type: Array,
				default: () => []
			}
		},
		name: "myagetab",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>