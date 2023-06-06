<template>
	<view>
		<u-popup :show="isshowbuypop" mode="bottom" class="popup" @close="doclose" :closeOnClickOverlay='true'>
			<slot></slot>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			isshowbuy: {
				type: Boolean,
				default: false,
			}
		},
		name: "mypopup",
		data() {
			return {
				isshowbuypop: '',
			};
		},

		watch: {
			isshowbuy: {
				handler(nv, ov) {
					this.isshowbuypop = nv;
				},
				immediate: true

			}
		},
		methods: {
			doclose() {
				this.isshowbuypop = false;
				this.$emit('doclose', this.isshowbuypop)
			}
		}
	}
</script>

<style lang="scss">
	.popup {
		width: 750rpx;
		min-width: 100rpx;
		background-color: #fff;
	}
</style>