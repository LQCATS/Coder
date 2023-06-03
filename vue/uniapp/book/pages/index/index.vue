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
						<image :src="item.src" alt=""></image>
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
						<image :src="item.src" alt=""></image>
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
					<view class="booklist_item" v-for="book in booklist">
						<image :src="book.img1" alt="" mode="widthFix"></image>
						<view class="book_title">
							{{book.bookName}}
						</view>
						<view class="">
							{{book.bookDesc}}
						</view>
						<view class="shopping" @tap="gocar">
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
				booklist: [],
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
		onReady() {
			this.$serivce.pctService.searchInfoBook().then(res => {
				if (200 == res.code) {
					this.booklist = res.data.rows;
				}
			})
		},
		methods: {
			gocar() {
				// #ifdef MP
				//判断用户是否登录
				//getUserProfile
				let userPromise = new Promise((resolve, reject) => {
					uni.getUserProfile({
						desc: '登录',
						success: (res) => {
							resolve(res);
						},
						fail: (err) => {
							reject(err);
						}
					})
				});

				//login
				let loginPromise = new Promise((resolve, reject) => {
					uni.login({
						success: (res) => {
							resolve(res);
						},
						fail: (err) => {
							reject(err);
						}
					})
				});

				//wxLogin
				userPromise.then(userRes => {
					console.log("userRes", userRes);

					loginPromise.then(loginRes => {
						console.log("loginRes", userRes);

						this.$serivce.umsService.wxLogin({
							code: loginRes.code,
							rowData: userRes.encryptedData,
							iv: userRes.iv,
							
						}).then(res => {
							if (200 == res.code) {
								uni.switchTab({
									url:'/pages/shopping/shopping'
								})
							}
						})
					})
				})


				// #endif
			}
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
		background: url(http://localhost:3000/public/img/banner1.png) no-repeat;
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
			background-size: cover;
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

				image {
					width: 100%;
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
		height: 500rpx;
		background-color: #fff;
		border-radius: 20rpx;
		font-size: 20rpx;
		color: #ccc;
		line-height: 40rpx;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		image {
			width: 80%;
		}

		.book_title {
			color: #333;
			width: 100%;
			font-size: 25rpx;
			text-align: center;

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