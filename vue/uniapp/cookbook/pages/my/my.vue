<template>
	<view>
		<!-- header -->
		<view class="header">
			<view class="header_title">
				我的
			</view>
		</view>
		<!-- banner -->
		<view class="banner">
			<view class="banner_top">
				<view class="top_left">
					<image src="../../static/bgimages/wode1.png" mode="widthFix"></image>
				</view>
				<view class="top_middle">
					<view class="middle_top">
						<view class="title">
							立即登录
						</view>

					</view>
					<view class="middle_bottom">
						登录后可收藏喜欢的菜谱
					</view>
				</view>
				<view class="top_right">
					<u-icon name="arrow-right" color='#dadada'></u-icon>
				</view>
			</view>

			<view class="banner_bottom">
				<view class="banner_bottom_msg">
					<view>升级为VIP</view>
					<u-icon name="arrow-right" color='#b4853f' :size='12'></u-icon>
				</view>
			</view>
		</view>

		<mybg></mybg>
		<view class="my_menu">
			<mycard>
				<view class="menu_item">
					<u-icon name="star-fill" color='#cccccc' :size='18'></u-icon>
					<text>我的收藏</text>
				</view>
				<view class="menu_item">
					<u-icon name="clock-fill" color='#cccccc' :size='18'></u-icon>
					<text>浏览记录</text>
				</view>
				<view class="menu_item" style="margin-right: 20rpx;">
					<u-icon name="thumb-up-fill" color='#cccccc' :size='18'></u-icon>
					<text>点赞</text>
				</view>
			</mycard>
		</view>
		<mybg></mybg>
		<!-- 食材 -->
		<view class="tabs_warp">
			<mycard>
				<mytabspersonal :tabslist='tabslist'></mytabspersonal>
			</mycard>
		</view>
		<mytable :menulist='menulist'></mytable>

		<view class="more">
			展开更多
			<u-icon name="arrow-down" color='#cccccc' :size='10'></u-icon>
		</view>
		<mybg></mybg>
		<view class="mymenu_warp">
			<view class="mymenu_title">
				我的菜谱
			</view>
			<view class="mymenu_scroll">
				<myscroll>
					<mymenuitem class="mymenu_item"></mymenuitem>
					<mymenuitem class="mymenu_item"></mymenuitem>
					<mymenuitem class="mymenu_item"></mymenuitem>
					<mymenuitem class="mymenu_item"></mymenuitem>
					<mymenuitem class="mymenu_item"></mymenuitem>
					<mymenuitem class="mymenu_item"></mymenuitem>
				</myscroll>
			</view>
		</view>
		<mybg></mybg>
		<view class="operate_warp">
			<view class="operate_item">
				<u-icon name="thumb-up-fill" color='#cccccc' :size='22'></u-icon>
				<view class="operate_msg">
					去App Store给菜谱大全评分
				</view>
			</view>
			
			<view class="operate_item">
				<u-icon name="chat-fill" color='#cccccc' :size='22'></u-icon>
				<view class="operate_msg">
					反馈问题
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabslist: [{
						name: '所有食材'
					},
					{
						name: '蜜豆鲷鱼烧'
					},
					{
						name: '川北凉粉'
					},
					{
						name: '牛肉披萨'
					},
					{
						name: '奶油泡芙'
					},
				],
				menulist: [{
					name: "小葱末",
					msg: '20g'
				}]
			};
		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 150rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: fixed;
		top: 0;
		z-index: 999;

		.header_title {
			color: #000000;
			font-size: 36rpx;
			font-weight: 700;
			text-align: center;
			margin-bottom: 20rpx;
		}
	}

	.banner {
		width: 750rpx;
		height: 324rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 150rpx;



		.banner_top {
			display: flex;
			width: 686rpx;

			.top_left {
				width: 128rpx;
				height: 129rpx;

				image {
					width: 100%;
				}
			}

			.top_middle {
				padding-left: 18rpx;
				box-sizing: border-box;

				.middle_top {
					display: flex;
					justify-content: space-between;
					margin-top: 20rpx;


					.title {
						color: #515151;
						font-size: 30rpx;

					}


				}

				.middle_bottom {
					color: #d1d1d1;
					font-size: 22rpx;
					margin-top: 20rpx;
				}

			}

			.top_right {
				margin-left: auto;
				display: flex;
				align-items: center;
			}
		}

		.banner_bottom {
			width: 686rpx;
			height: 118rpx;
			background: url(../../static/bgimages/wode2.png) no-repeat;
			background-size: cover;
			margin-top: 34rpx;

			.banner_bottom_msg {
				display: flex;
				justify-content: space-between;
				color: #b4853f;
				font-size: 22rpx;
				padding: 20rpx 100rpx;
				box-sizing: border-box;
			}
		}
	}

	.my_menu {
		width: 750rpx;
		height: 122rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.menu_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			height: 122rpx;
			padding-bottom: 10rpx;
			box-sizing: border-box;

			text {
				color: #5a5a5a;
				font-size: 28rpx;
			}
		}
	}

	.tabs_warp {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.more {
		color: #5a5a5a;
		font-size: 22rpx;
		height: 72rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.mymenu_warp {
		width: 100%;


		.mymenu_title {
			color: #5a5a5a;
			font-size: 28rpx;
			margin: 10rpx 0 32rpx 32rpx;

		}

		.mymenu_scroll {
			margin-left: 30rpx;

			.mymenu_item {
				margin-right: 32rpx;
			}
		}


	}
	
	.operate_warp {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.operate_item {
			width: 686rpx;
			height: 95rpx;
			display: flex;
			align-items: center;
			
			.operate_msg {
				height: 95rpx;
				line-height: 95rpx;
				margin-left: 26rpx;
				color: #5a5a5a;
				font-size: 28rpx;
				flex: 1;
				border-bottom: 1rpx solid #dbdbdb;
			}
		}
	}
</style>