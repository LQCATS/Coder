<template>
	<view>
		<view class="">
			这是公共的内容
		</view>
		<!-- #ifdef H5 -->
		<view class="content">
			这是h5的内容
		</view>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view class="content">
			这是微信小程序的内容
		</view>
		<!-- #endif -->


		<view class="msg">
			{{msg}}
		</view>

		<view v-if="age <= 21">青少年</view>
		<view v-else-if="age >21 && age<30">青年</view>
		<view v-else>老年人</view>

		<view v-show="age == 20">显示20</view>
		<view v-for="(item,index) in age">{{item}}-{{index}}</view>
		<view v-for="item in username">{{item}}</view>
		<view v-for="item in listUser">{{item}}</view>
		<view v-text="username"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// #ifdef H5
				msg: '这是h5的数据',
				// #endif

				// #ifdef MP
				msg: '这是微信小程序的数据',
				// #endif

				username: '张三',
				age: 20,
				isShow: false,
				objUser: {
					id: 1,
					name: '李四'
				},
				listUser: [{
						id: 2,
						name: '麻子'
					},
					{
						id: 3,
						name: '王五'
					}
				]

			}
		}
	}
</script>

<style lang="scss">
	.msg {
		/* #ifdef H5 */
		background-color: pink;
		/* #endif */

		/* #ifdef MP */
		background-color: yellow;
		/* #endif */
	}

	.content {
		/* #ifdef H5 */
		color: pink;
		/* #endif */

		/* #ifdef MP */
		color: yellow;
		/* #endif */
	}
</style>