<template>
	<view>
		<u-subsection :list="list" :current="curNow" @change="sectionChange" bgColor='#ee7b2d' activeColor='#ee7b2d'
			inactiveColor='#fff'></u-subsection>
	</view>
</template>

<script>
	export default {
		name: "mysubsection",
		data() {
			return {
				list: ['分类', '食材'],
				curNow: 0
			};
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			}
		},
		options: {
			styleIsolation: 'shared'
		},
	}
</script>

<style lang="scss">
	/deep/ .u-subsection--button {
		height: 48rpx !important;
		border: 1rpx solid #fff !important;
		border-radius: 28rpx !important;
		padding: 0 !important;
	}

	/deep/ .u-subsection__bar {
		border-radius: 28rpx !important;
		height: 48rpx !important;
		width: 192rpx !important;

	}
</style>