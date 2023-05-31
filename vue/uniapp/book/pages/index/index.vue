<template>
	<view class="content">
		<view class="header">
			<mysearch></mysearch>
			<view class="banner"></view>
			<view class="address">
				<view class="text">
					<view class="text_title">
						小书屋绘本馆
					</view>
					<view>
						南京市保利梧桐语
					</view>
					<view>
						13327811857
					</view>
				</view>
				<view class="address_search">

				</view>
			</view>
		</view>
		<view class="content_warp">
			<view class="type_item_warp">
				<view class="type_title_warp">
					<view class="type_title">
						适读年龄
					</view>
					<view class="type_btn">
						更多
					</view>
				</view>
				<view class="type_content">
					<view class="type_item" v-for="item in typeagelist" :key="item.src">
						<img :src="item.src" alt="">
						<view class="">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
			<view class="type_item_warp">
				<view class="type_title_warp">
					<view class="type_title">
						图书类型
					</view>
					<view class="type_btn">
						更多
					</view>
				</view>
				<view class="type_content">
					<view class="type_item" v-for="item in typeagelist" :key="item.text">
						<img :src="item.src" alt="">
						<view class="">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
			<view class="booklist">
				<view class="booklist_title">
					榜单
				</view>
				<view class="booklist_warp">
					<view class="booklist_item">
						<img src="/static/images/图层 9@3x.png" alt="">
						<view class="book_title">
							0-4岁世界认知纸板书：全6册
						</view>
						<view class="">
							从0岁开始看世界!30+国家，110种特色交通工具、房子、人种..
						</view>
						<view class="shopping">
							借阅
						</view>
					</view>
					<view class="booklist_item">
						<img src="/static/images/图层 9@3x.png" alt="">
						<view class="book_title">
							0-4岁世界认知纸板书：全6册
						</view>
						<view class="">
							从0岁开始看世界!30+国家，110种特色交通工具、房子、人种..
						</view>
						<view class="shopping">
							借阅
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeagelist: [{
					src: "/static/images/图层 3.png",
					text: '0-3岁'
				}, {
					src: "/static/images/图层 4@2x.png",
					text: '3-6岁'
				}, {
					src: "/static/images/图层 5@3x.png",
					text: '6-8岁'
				}, {
					src: "/static/images/图层 6@3x.png",
					text: '8岁+'
				}, ]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		width: 750rpx;
		// height: 100vh;
		background: linear-gradient(#2badff, #d1eeff, #f0faff);
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.header {
		width: 750rpx;
		// height: 800rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	

	.banner {
		width: 95%;
		height: 300rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		background: url(/static/images/home_banner.jpg) no-repeat;
		background-size: cover;

	}

	.address {
		width: 95%;
		height: 200rpx;
		background: url(/static/images/home_address.png) no-repeat;
		background-size: contain;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.text {
			width: 300rpx;
			height: 100rpx;
			margin-left: 180rpx;
			color: #fff;
			font-size: 25rpx;
			letter-spacing: 5rpx;

			.text_title {
				font-size: 30rpx;
			}

		}

		.address_search {
			width: 110rpx;
			height: 110rpx;
			background: url(/static/images/address_btn.png) no-repeat;
			margin-right: 20rpx;
		}
	}

	.content_warp {
		width: 95%;
		// height: 400rpx;
		margin-top: 20rpx;


	}

	.type_item_warp {
		width: 100%;
		// height: 200rpx;
		border-bottom: 1rpx solid #fff;
		margin-bottom: 20rpx;

		.type_title_warp {
			width: 100%;
			height: 50rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20rpx;
			box-sizing: border-box;

			.type_title {
				font-weight: 700;
			}

			.type_btn {
				width: 100rpx;
				height: 40rpx;
				text-align: center;
				line-height: 40rpx;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #fff;
				background-color: #1da0f3;
			}
		}

		.type_content {
			width: 100%;
			height: 200rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.type_item {

				img {
					max-height: 130rpx;
				}
			}
		}
	}

	.booklist {
		width: 100%;
		height: 800rpx;


		.booklist_title {
			font-weight: 700;
			padding: 0 20rpx;
			box-sizing: border-box;
		}

		.booklist_warp {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 20rpx;

		}
	}

	.booklist_item {
		width: 340rpx;
		height: 550rpx;
		background-color: #fff;
		border-radius: 20rpx;
		font-size: 20rpx;
		color: #ccc;
		line-height: 40rpx;
		margin-bottom: 20rpx;

		.book_title {
			color: #333;
		}

		.shopping {
			background-color: #1da0f3;
			width: 100rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			border-radius: 25rpx;
			margin-left: auto;
			margin-right: 20rpx;
			margin-top: 20rpx;
		}
	}
</style>