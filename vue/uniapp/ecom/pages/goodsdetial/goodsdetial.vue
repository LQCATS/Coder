<template>
	<view>

		<u-navbar title="商品详情" :autoBack="true" @leftClick="goback">
		</u-navbar>
		<view style="margin-top: 200rpx;">
			商品详情{{goodsdetial.productName}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsdetial: {}
			};
		},
		methods: {
			goback(ev) {
				let app = getApp();
				app.globalData.prepage = 'goodsdetial';
			}
		},
		onLoad(options) {
			let app = getApp();
			this.goodsdetial = JSON.parse(JSON.stringify(app.globalData.goodsdetial));
		}

	}
</script>

<style lang="scss">

</style>