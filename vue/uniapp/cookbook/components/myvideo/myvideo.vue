<template>
	<view class="bottom_menu_item" @click="godetial">
		<!-- <image :src="src"></image> -->
		<video :src="src" object-fit='cover' class="video"></video>
		<view class="menu_title">
			{{text}}
		</view>
		<view class="menu_msg">
			<u--text suffixIcon="eye-fill" iconStyle="font-size: 16px;color:#aaa;marginLeft:10rpx" :text="pageview"
				size="10" color='#aaa'></u--text>
			<u--text suffixIcon="star-fill" iconStyle="font-size: 16px;color:#aaa;marginLeft:10rpx" :text="collection"
				size="10" color='#aaa'></u--text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: ''
			},
			src: {
				type: String,
				default: ''
			},
			pageview: {
				type: [Number, String],
				default: 0
			},
			collection: {
				type: [Number, String],
				default: 0
			}
		},
		name: "myvideo",
		data() {
			return {

			};
		},
		methods:{
			godetial() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.bottom_menu_item {
		min-width: 300rpx;
		min-height: 200rpx;
		// background-color: skyblue;

		.video {
			width: 100%;
			height: 248rpx;
		}

		.menu_title {
			font-size: 28rpx;
			color: #575757;
			margin-bottom: 10rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.menu_msg {
			display: flex;
		}
	}
</style>