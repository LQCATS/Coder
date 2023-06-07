<template>
	<view>
		<!-- header -->
		<view class="header">
			<myheader title="菜谱搜索" class="myheader">
				<view class="goback_icon">
					<u-icon name="arrow-left" color='#333' @tap='goback'></u-icon>
				</view>
			</myheader>

			<view class="header_search_warp">
				<view class="header_search">
					<u-search :placeholder="menutypeobj.name" v-model="menutype" searchIconColor='#ee7b2d'
						shape="square" height="55rpx" bgColor="#fff" :actionStyle="{color:'#fff'}"></u-search>
				</view>
			</view>

		</view>

		<!-- content -->
		<view class="content_warp">
			<!-- 会员专享 -->
			<view class="member_warp">
				<view class="member_title">
					<view>精品名厨视频-会员专享</view>
					<image src="../../static/bgimages/search1.png" mode="widthFix"></image>
				</view>
				<view class="vip_menu_warp">
					<myscroll>
						<mymenu class="vip_menu" text="芋泥绵绵冰夏日解暑必备" src="../../static/bgimages/search2.png"
							pageview="3187" collection="10.5万"></mymenu>

					</myscroll>
				</view>
			</view>

			<!-- 菜谱推荐 -->
			<view class="menu_item_warp">
				<mymenubig class="menu_item" src="../../static/bgimages/search3.png" title="蜜豆铜鼓少"
					text="鸡蛋、低筋面粉、玉米淀粉..."></mymenubig>
				<mymenubig src="../../static/bgimages/search3.png" title="蜜豆铜鼓少" text="鸡蛋、低筋面粉、玉米淀粉..."></mymenubig>
				<mymenubig src="../../static/bgimages/search3.png" title="蜜豆铜鼓少" text="鸡蛋、低筋面粉、玉米淀粉..."></mymenubig>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				menutype: '',
				vipmenulist: [],
				menutypeobj: {}
			};
		},
		methods: {
			goback() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		},
		onLoad(option) {
			console.log(444, JSON.parse(option.icon));
			let menutypeobj = JSON.parse(option.icon);
			this.menutypeobj = menutypeobj;
			this.menutype = menutypeobj.name;
			console.log(555, this.menutype, this.menutypeobj);

		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;

		.myheader {
			position: fixed;
			top: 0;
			z-index: 999;
		}
		
		.header_search_warp {
			width: 100%;
			height: 114rpx;
			background-color: #ee7b2d;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			margin-top: 150rpx;

			.header_search {
				width: 650rpx;
				height: 60rpx;
			}
		}

	}

	.content_warp {
		margin-left: 32rpx;
	}

	.member_warp {

		.member_title {
			display: flex;
			align-items: center;
			height: 74rpx;
			color: #3a3a3a;
			font-size: 28rpx;

			image {
				width: 40rpx;
				height: 40rpx;
			}
		}

		.vip_menu_warp {
			.vip_menu {
				width: 316rpx;
				height: 330rpx;
				margin-right: 20rpx;
				background-color: #f9f9f9;
			}
		}


	}

	.menu_item_warp {
		margin-top: 40rpx;

		.menu_item {
			margin-top: 16rpx;
		}
	}
</style>