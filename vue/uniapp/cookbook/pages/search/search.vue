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
						<myvideo class="vip_menu" v-for="item in recommendlist" :key="item._id" :text="item.name"
							:src="item.vid" :pageview="item.pageview" :collection="item.collections" @click='godetail(item)'></myvideo>

					</myscroll>
				</view>
			</view>

			<!-- 菜谱推荐 -->
			<view class="menu_item_warp">
				<mymenubig class="menu_item" v-for="item in recommendlist" :key="item._id" :src="item.coverpic"
					:title="item.name" text="鸡蛋、低筋面粉、玉米淀粉..." :pageview='item.pageview' :collection="item.collections"
					@click='godetail(item)'>
				</mymenubig>

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
				menutypeobj: {},
				//推荐菜谱数组 &精品名厨视频
				recommendlist: [],
			};
		},
		methods: {
			goback() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			godetail(menu) {
				//跳转详情页面
				uni.navigateTo({
					url: `/pages/detials/detials?menu=${JSON.stringify(menu)}`
				})
			}
		},
		onLoad(option) {
			let menutypeobj = JSON.parse(option.icon);
			this.menutypeobj = menutypeobj;
			this.menutype = menutypeobj.name;
			// console.log(555, this.menutype, this.menutypeobj);

		},
		onReady() {
			//获取搜索页面随机推荐
			this.$service.searchService.memberRecommend().then(res => {
				if (200 == res.meta.status) {
					this.recommendlist = res.message;
				}
			})
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
				height: 340rpx;
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