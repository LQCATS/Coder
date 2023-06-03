<template>
	<view>
		<mysearch></mysearch>

		<u-grid :border="false" col="1">
			<u-grid-item v-for="(goods,index) in goodlist" :key="goods.id">
				<image :src="goods.productImg" mode="widthFix" style="width: 400rpx; margin: 20rpx;"
					@tap="godetial(goods)">
				</image>
				<text class="grid-text">{{goods.productName}}</text>
			</u-grid-item>
		</u-grid>

		<view style="width: 750rpx;height: 70rpx;text-align: center;" v-if="!showLoadingMore">{{loadText}}</view>
		<view style="width: 750rpx;height: 70rpx;line-height: 70rpx;text-align: center;" v-else>加载中...</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodlist: [],
				pageSize: 4,
				curPage: 1,
				loadText: '加载中...',
				showLoadingMore: false,
				maxPage: 0,
			};
		},
		methods: {
			godetial(goods) {
				let app = getApp();
				app.globalData.goodsdetial = goods;

				uni.navigateTo({
					url: '/pages/goodsdetial/goodsdetial'
				})
			}
		},
		onShow() {
			let app = getApp();
			let prepage = app.globalData.prepage;
			if ('goodsdetial' == prepage) {
				return;
			}
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});

			this.curPage = 1;
			this.loadText = '';
			this.$service.ecomService.searchEcomProduct({
				pageSize: this.pageSize,
				curPage: this.curPage
			}).then(res => {
				if (200 == res.code) {
					this.goodlist = res.data.rows;

					//求最大得页数
					let total = res.data.total;
					this.maxPage = Math.ceil(total / this.pageSize);
				}
			})
		},
		onPullDownRefresh() {
			this.$service.ecomService.searchEcomProduct({
				pageSize: this.pageSize,
				curPage: this.curPage
			}).then(res => {
				if (200 == res.code) {
					this.goodlist = res.data.rows;
				}
				uni.stopPullDownRefresh();
			})
		},
		onReachBottom() {
			if (this.maxPage == this.curPage) {
				console.log("已经加载到最后一页");
				this.loadText = '已经加载到最后一页';
				return
			}
			this.showLoadingMore = true;
			setTimeout(() => {
				this.curPage = this.curPage + 1;
				//获取下一页得数据
				this.$service.ecomService.searchEcomProduct({
					pageSize: this.pageSize,
					curPage: this.curPage
				}).then(res => {
					if (200 == res.code) {
						let nextPageData = res.data.rows;
						this.goodlist.push(...nextPageData);
					}

					this.showLoadingMore = false;
				})
			}, 1500)
		}

	}
</script>

<style lang="scss">

</style>