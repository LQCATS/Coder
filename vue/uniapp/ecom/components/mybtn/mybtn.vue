<template>
	<view class="btn_warp">
		<image :src="imgurl" mode="widthFix"></image>
		<text>{{text}}</text>
	</view>

</template>

<script>
	export default {
		name: "mybtn",
		props: {
			imgurl: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.btn_warp {
		width: 100rpx;
		height: 100rpx;
		background-color: pink;
	}
</style>