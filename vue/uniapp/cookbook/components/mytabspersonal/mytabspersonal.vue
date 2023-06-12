<template>
	<view>
		<u-tabs :list="tabslist" lineColor="transparent" :current='current' @click="click" :activeStyle="{
		            color: '#ee7b2d',
		            fontWeight: 'bold',
		            transform: 'scale(1.05)',
					fontSize: '28rpx'
		        }" :inactiveStyle="{
					fontSize: '22rpx',
		            color: '#5a5a5a',
		            transform: 'scale(1)'
		        }" itemStyle=" padding-right: 20rpx; height: 60rpx;">
		</u-tabs>
	</view>
</template>

<script>
	export default {
		props: {
			tabslist: {
				type: Array,
				default: () => []
			},
			curindex: {
				type: Number,
				default: 0,
			}
		},
		name: "mytabs",

		data() {
			return {
				current: 0,
			};
		},
		watch: {
			curindex: {
				handler(nv, ov) {
					console.log('curindex', nv, ov);
					this.current = this.curindex;
				},
				immediate: true
			}
		},
		options: {
			styleIsolation: 'shared'
		},
		methods: {
			click(item) {
				this.current = item.index;
				// console.log("this.current", item);
				this.$emit('change', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
	// /deep/ .u-tabs__wrapper {
	//     background-color: #ee7b2d !important;
	// }
</style>