<template>
	<view class="content">
		<view class="header">
			<!-- 搜索 -->
			<mysearch></mysearch>

			<!-- 页签 -->
			<mytabs :tablist='list1'></mytabs>

			<!-- 年龄筛选 -->
			<myagetab :tablist='agelist'></myagetab>


			<!-- 内容 -->
			<view class="content_warp">
				<view class="content_left">
					<view class="type_item" :class="{active:curbooktype == '类型'}" @tap="findallBook">
						类型
					</view>
					<view class="type_item" :class="{active:curbooktype == '中文绘本'}" @tap="changetype('中文绘本',1)">
						中文绘本
					</view>
					<view class="type_item" :class="{active:curbooktype == '英文绘本'}" @tap="changetype('英文绘本',2)">
						英文绘本
					</view>
					<view class="type_item" :class="{active:curbooktype == '文学作品'}" @tap="changetype('文学作品',3)">
						文学作品
					</view>
					<view class="type_item" :class="{active:curbooktype == '亲自家教'}" @tap="changetype('亲自家教',4)">
						亲自家教
					</view>
				</view>
				<view class="content_right">
					<view class="booklist_item" v-for="book in curbooklist">
						<image :src="book.img1" mode="widthFix"></image>
						<view class="book_title">
							{{book.bookName}}
						</view>
						<view class="book_msg">{{book.bookDesc}}</view>
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
				curbooktype: '类型',
				curbooklist: [],
				booklist: [],
				list1: [{
						name: '分类'
					},
					{
						name: '综合'
					},
					{
						name: '排行'
					},
					{
						name: '推荐'
					},
					{
						name: '筛选'
					},
					{
						name: '分馆'
					},
				],
				agelist: [{
						name: '全部'
					},
					{
						name: '0-3岁'
					},
					{
						name: '3-6岁'
					},
					{
						name: '6-8岁'
					},
					{
						name: '8岁+'
					}
				]

			};
		},
		onReady() {
			this.$serivce.pctService.searchInfoBook().then(res => {
				console.log(res);
				this.booklist = res.data.rows;

			})
		},
		methods: {
			changetype(typeName, status) {
				//status代表数据库的状态，暂时代替分类
				this.curbooktype = typeName;
				let list = this.booklist.filter(item => status == item.status);
				this.curbooklist = list;
			},
			findallBook() {
				this.curbooklist = Object.assign([], this.booklist);
				this.curbooktype = '类型';
			}
		}
	}
</script>

<style lang="scss">
	body {
		background-color: #f0fbff;
	}

	.content {
		width: 750rpx;
		height: 89vh;
		background-color: #f0fbff;
	}

	.header {
		width: 750rpx;
		height: 145rpx;
		background-color: #2badff;
	}

	.content_warp {
		display: flex;

	}

	.content_left {
		// background-color: pink;
		width: 200rpx;
	}

	.content_right {
		width: 550rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.type_item {
		width: 100%;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		// background-color: #2badff;
		color: #666;
		padding: 20rpx 0;
	}

	.booklist_item {
		width: 245rpx;
		height: 430rpx;
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
			text-align: center;
			font-size: 30rpx;
			margin: 10rpx 0;
		}

		.book_msg {
			height: 80rpx;
			overflow: hidden;
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

	.active {
		background-color: #fff;
		color: #2badff;
	}
</style>