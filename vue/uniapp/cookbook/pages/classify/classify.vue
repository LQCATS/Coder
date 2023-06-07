<template>
	<view>
		<!-- header -->
		<view class="header">
			<myheader title="食材分类" class="myheader">
				<view class="goback_icon">
					<u-icon name="arrow-left" color='#fff' @tap='goback'></u-icon>
				</view>
			</myheader>

			<view class="search_warp">
				<view class="search_type">
					<mysubsection></mysubsection>
				</view>
				<view class="search">
					<mysearchclassify></mysearchclassify>
				</view>
			</view>

		</view>

		<view class="bg">
			<!-- 解决滑动到底部出现露白的问题 -->
		</view>
		<!-- content -->
		<view class="content_warp">
			<view class="content_left">
				<view class="type_item" v-for="first in scrolllist" :key="first._id"
					:class="{active:curpos==first.cat_name}" @tap="changemenu(first)">
					{{first.cat_name}}
				</view>

			</view>
			<view class="content_right">
				<scroll-view :scroll-y="true" class="scroll-view_H" :scroll-into-view='curfirst'>

					<view class="item_warp" v-for="first in scrolllist" :key="first._id">
						<view class="first_title" :id="'s'+first._id" :data-title="first.cat_name">
							{{first.cat_name}}
						</view>
						<view class="second_warp">
							<view class="second_item" v-for="second in first.children" :key="second.cat_name">
								<view>
									<image :src="second.cat_icon" mode="widthFix" class="second_img"></image>
								</view>
								<view class="second_title">
									{{second.cat_name}}
								</view>
							</view>
						</view>
					</view>

				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curpos: '热门',
				scrolllist: [],
				curfirst: '',
			};
		},
		methods: {
			goback() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			changemenu(menu) {
				this.curpos = menu.cat_name;
				this.curfirst = 's' + menu._id;
				// console.log(333, this.curfirst, this.curpos);
			}
		},
		onReady() {
			this.$service.classifyServce.categories().then(res => {
				if (200 == res.meta.status) {
					this.scrolllist = res.message;

					//监听first_title的盒子是否和视窗相交
					this.$nextTick(() => {
						console.log(11111);

						//创建观察者对象，用于监听两个盒子之间的相交状态
						let objObserver = uni.createIntersectionObserver(this, {
							observeAll: true
						});
						//设置相交的参考物
						objObserver.relativeTo('.content_warp', {
							bottom: -40,
						});

						// 监听所有的first_title的盒子是否和视窗相交
						objObserver.observe('.first_title', res => {
							if (0 < res.intersectionRatio) {

								//盒子相交
								this.curpos = res.dataset.title;

							}

							console.log('observe', res);
						})

					})
				}
			});


		},
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 25vh;
		position: fixed;
		top: 0;
		z-index: 999;
		background-color: #ee7b2d;


		.search_warp {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.search_type {
				width: 380rpx;
				margin-top: 20rpx;
			}

			.search {
				width: 696rpx;
				height: 60rpx;
			}
		}
	}

	.bg {
		width: 750rpx;
		height: 25vh;
	}

	.content_warp {
		width: 750rpx;
		height: 75vh;
		display: flex;
		// margin-top: 25vh;

		.content_left {
			width: 25vw;
			height: 75vh;
			border-right: 1rpx solid #dfdfdf;
			// position: fixed;
			// bottom: 0;
			// overflow-y: auto;

			// &::-webkit-scrollbar {
			// 	display: none;
			// }

			.type_item {
				width: 100%;
				height: 105rpx;
				color: #767676;
				font-size: 22rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.active {
				background-color: #f6f6f6;
				color: #ef7d2b;
			}
		}

		.content_right {
			width: 75vw;
			height: 75vh;
			// margin-left: 25vw;

			.first_title {
				color: #cbcbcb;
				font-size: 20rpx;
				margin: 10rpx 0 30rpx 20rpx;

			}

			.second_warp {
				margin: 0 32rpx;
				display: flex;
				flex-wrap: wrap;
				margin-bottom: 46rpx;


				.second_item {
					width: 100rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 10rpx;
					margin-right: 90rpx;

					&:nth-child(3n) {
						margin-right: 0;
					}

					.second_img {
						width: 100rpx;
						height: 100rpx;
					}

					.second_title {
						color: #767676;
						font-size: 16rpx;
					}
				}

			}
		}

	}

	.scroll-view_H {
		background-color: #fcfcfc;
		height: 75vh;
	}
</style>