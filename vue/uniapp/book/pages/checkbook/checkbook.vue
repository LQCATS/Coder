<template>
	<view class="content">
		<view class="header">
			<!-- 搜索 -->
			<mysearch></mysearch>

			<!-- 页签 -->
			<mytabs :tablist='list1'></mytabs>

			<!-- 年龄筛选 -->

			<myagetab :tablist='agelist'></myagetab>
			
			<view class="content_warp">
				<view class="content_left">
					
				</view>
				<view class="content_right">
					
				</view>
			</view>

		</view>


	</view>

</template>

<script>
	export default {
		data() {
			return {
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
		}
	}
</script>

<style lang="scss">
	.content {
		width: 750rpx;
		height: 100vh;
		background-color: #f0fbff;
	}
	.header {
		width: 750rpx;
		height: 145rpx;
		background-color: #2badff;
	}
	
	.content_warp{
		display: flex;
		
	}
	.content_left {
		background-color: pink;
		width: 200rpx;
		height: 800rpx;
	}
	.content_right {
		background-color: yellow;
		width: 550rpx;
		height: 800rpx;
	}
	
</style>