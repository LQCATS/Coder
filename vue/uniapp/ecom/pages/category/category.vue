<template>
	<view>
		<view class="header">
			<view class="header_title">
				商品分类
			</view>
			<view class="">
				<mysearch></mysearch>
			</view>
		</view>

		<view class="content_warp">
			<view class="content_left">
				<view class="menu" v-for="first in listCate" :key="first.id" @tap="changefirst(first)"
					:class="{active: curfirst == first.typeName}">
					<view class="menu_type">{{first.typeName}}</view>
				</view>
				<!-- <view class="menu" :class="{active: curfirst == '电子产品'}" @click="curfirst = '电子产品'">
					<view class="menu_type">电子产品</view>
				</view>
				<view class="menu" :class="{active: curfirst == '分类'}" @click="curfirst = '分类'">
					<view class="menu_type">分类</view>
				</view> -->
			</view>
			<view class="content_right">
				<scroll-view :scroll-y="true" class="scroll-view_H" :scroll-into-view="selfirst">

					<view class="item_warp" v-for="first in listCate">
						<view class="first_title" :data-title="first.typeName" :id="'s' +first.id">
							{{first.typeName}}
						</view>
						<view class="second_warp">
							<view class="second_item" v-for="second in first.children" :key="second.id">
								<view>
									<image :src="second.icon" mode="widthFix" style="width: 80rpx;"></image>
								</view>
								<view class="second_title">
									{{second.typeName}}
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
				curfirst: '电子产品',
				selfirst: '',
				listCate: []
			};
		},
		onReady() {
			// uni.request({
			// 	url: 'http://localhost:3000/api/searchInfoProducttype', //仅为示例，并非真实接口地址。
			// 	data: {

			// 	},
			// 	method: 'POST',
			// 	header: {
			// 		'content-type': 'application/json'
			// 	},
			// 	success: (res) => {
			// 		console.log(res);
			// 		let listType = res.data.data.rows;

			// 		let firstList = listType.filter(item => 0 == item.parentId);
			// 		for (let first of firstList) {
			// 			let secondList = listType.filter(item => 0 != item.parentId && first.id == item
			// 				.parentId);
			// 			first.children = secondList;
			// 		}

			// 		this.listCate = firstList;
			// 	}
			// });

			this.$service.pctService.searchInfoProducttype({}).then(res => {
				let listType = res.data.rows;
				let listFirst = listType.filter(item => item.parentId == 0);
				for (let first of listFirst) {
					let listSecond = listType.filter(item => item.parentId != 0 && item.parentId == first.id);
					first.children = listSecond;
				}
				this.listCate = listFirst;


				//监听first_title的盒子是否和视窗相交
				this.$nextTick(() => {
					//在下一次界面渲染完成后触发该回调函数，仅在下一次渲染是调用一次

					//创建观察者对象，用于监听两个盒子之间的相交状态
					let objObserver = uni.createIntersectionObserver(this, {
						observeAll: true
					});

					//设置相交的参考物喂整个视窗界面
					objObserver.relativeToViewport({
						top: -80
					});

					//监听所有的first_title的盒子是否和视窗相交
					objObserver.observe('.first_title', res => {
						// console.log(res);
						if (0 < res.intersectionRatio) {

							//盒子相交
							this.curfirst = res.dataset.title;
						}

						console.log('observe', res);
						// this.curfirst = res.dataset.title;
					})
				})
			})

		},
		methods: {
			changefirst(params) {
				console.log("changefirst",params);
				this.curfirst = params.typeName;
				this.selfirst = 's' + params.id;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 750rpx;
		height: 12vh;
		// background-color: pink;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1rpx solid #dbdbdb;

		.header_title {
			font-size: 40rpx;
			font-weight: 700;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		}
	}

	.content_warp {
		width: 750rpx;
		height: 88vh;
		display: flex;

	}

	.content_left {
		width: 25vw;
		background-color: #ccc;

		.menu {
			width: 100%;
			text-align: center;
			padding: 20rpx 0;
			margin-bottom: 10rpx;


			.menu_type {
				width: 100%;
			}

		}

		.active {
			background-color: #fff;

			.menu_type {
				border-left: 10rpx solid #f00;
			}
		}
	}


	.content_right {
		width: 75vw;

		.second_warp {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.second_item {
				width: 40%;
				display: flex;
				flex-direction: column;
				align-items: center;

				.second_title {
					width: 100%;
					height: 200rpx;
					text-align: center;
					line-height: 200rpx;

				}
			}
		}

	}

	.item_warp {
		width: 100%;

		.first_title {
			margin: 20rpx 0;
			height: 80rpx;
			font-size: 40rpx;
			font-weight: 700;
		}
	}

	.scroll-view_H {
		white-space: nowrap;
		height: 88vh;
	}
</style>