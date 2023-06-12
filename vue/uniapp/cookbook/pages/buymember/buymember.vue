<template>
	<view>
		<!-- header -->
		<view class="header">
			<view class="fixed_header">
				<view class="header_title_warp">
					<u-icon name="arrow-left" color='#fff' @tap='goback'></u-icon>
					<view class="header_title">
						我的会员
					</view>
				</view>
			</view>

			<view class="allmember">
				<view class="member_num">
					<view class="member_img">
						<u-avatar-group :urls="imglist" size="20" gap="0.4"></u-avatar-group>
					</view>
					<view class="member_num_msg">
						5593人已开通会员
					</view>
				</view>
				<view class="buy">
					购买查询
				</view>
			</view>
			<view class="member_card">
				<view class="member_msg">
					<view class="icon">
						<image :src="userInfo.avatarUrl" mode="widthFix" v-if="islogin"></image>
						<image src="../../static/bgimages/member_banner4.png" mode="widthFix" v-else></image>
					</view>

					<view class="member_login">
						<view class="member_login_top">
							<view v-if="!islogin" @tap="gologin">
								立即登录
							</view>
							<view v-if="islogin && !isvip">
								普通用户
							</view>
							<view v-if="islogin && isvip">
								会员
							</view>
							<view class="ismember" v-if="isvip">会员</view>
							<view v-else>非会员</view>
						</view>
						<view v-if="!isvip">开通会员尊享VIP权益</view>
						<view v-else>
							会员有效期至{{userInfo.vipdate}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 开通会员 -->
		<view class="mybuymember_warp">
			<view class="recommend_btn">
				推荐
			</view>
			<mybuymember text='您获得2折开通会员特权！'>
				<mypricecard v-for="item in topupList" :key="item._id" :time="item.mouth" :discount="item.salePrice"
					:price="item.normalPrice" class="mypricecard recommend"></mypricecard>
			</mybuymember>
			<view class="mycard">
				<button class="btn btnsel" @tap="showbuymember">立即开通</button>
			</view>
		</view>

		<!-- 中间背景颜色分割线 -->
		<mybg></mybg>

		<!-- 会员权限 -->
		<view class="vippower_content">
			<view class="vippower_warp">
				<view class="vippower_warp_title">
					VIP特权
				</view>
				<mypoweritem :powerlist="powerlist"></mypoweritem>
			</view>
		</view>

		<!-- 中间背景颜色分割线 -->
		<mybg></mybg>

		<!-- 会员使用说明 -->
		<view class="member_use_msg_warp">
			<view class="member_use_msg">
				<view class="use_msg_title">
					会员使用说明
				</view>
				<view class="use_msg_text">
					1.会员服务一经开通，不支持退款。
				</view>
				<view class="use_msg_text">
					2.如遇到苹果手机支付问题，建议参考Apptore支付流程。
				</view>
				<view class="use_msg_text">
					3.若会员开通出现异常，请立即联系客服，我们会在2个工作日内出处理结果。
				</view>
				<view class="use_msg_text">
					4.会员常见问题、会员服务协议、会员隐私协议。
				</view>
			</view>
		</view>

		<!-- 开通会员弹出层 -->
		<mypopup :isshowbuy='isshowbuy' @doclose='goclose'>
			<view class="popup_title">
				开通VIP会员
			</view>
			<mybuymember text="开通后立即全站去广告、免费看10000+名厨视频">
				<mypricecard v-for="(item,index) in topupList" :key="item._id" :time="item.mouth"
					:discount="item.salePrice" :price="item.normalPrice" class="mypricecard"
					:class="{active: curindex == index}" @tap='checkcard(item,index)'></mypricecard>
			</mybuymember>
			<view class="mycard">
				<button class="btn" @tap="domember">立即开通</button>
			</view>

			<view class="toast">
				即将涨价
			</view>
		</mypopup>
	</view>
</template>

<script>
	import {
		userInfo
	} from 'os';
	import logintools from '../../utils/logintools.js';
	export default {
		data() {
			return {
				//会员统计显示的头像组
				imglist: [
					'http://localhost:4000/public/images/yonghu6@2x.png',
					'http://localhost:4000/public/images/yonghu5@2x.png',
					'http://localhost:4000/public/images/yonghu4@2x.png',
					'http://localhost:4000/public/images/yonghu6@2x.png'
				],
				//会员权限内容数组
				powerlist: [{
						src: '../../static/bgimages/member2_power1.png',
						title: '1000+精品名厨菜谱',
						text: '大咖教学，轻松学会'
					},
					{
						src: '../../static/bgimages/member2_power2.png',
						title: '每周上新',
						text: '新菜持续更新中'
					},
					{
						src: '../../static/bgimages/member2_power3.png',
						title: '会员免广告打扰',
						text: '体验更流畅'
					},
					{
						src: '../../static/bgimages/member2_power4.png',
						title: 'VIP尊贵身份标识',
						text: '随时随地、与众不同'
					},
				],
				//开通会员弹窗
				isshowbuy: false,
				//是否登录
				islogin: false,
				//是否是vip
				isvip: false,
				//用户信息
				userInfo: null,
				//套餐数组
				topupList: [],
				//当前选中套餐的下标
				curindex: 0,
				//充值会员的月数,和价格
				month: 0,
				money: 0,
				//返回页面
				type: 0,

			};
		},
		methods: {
			//获取今天的时间格式2023-06-10
			getNow() {
				let now = new Date();
				let year = now.getFullYear();
				let month = now.getMonth() + 1;
				if (month < 10) {
					month = "0" + month;
				}
				let date = now.getDate();
				if (date < 10) {
					date = "0" + date;
				}
				let nowDate = year + "-" + month + "-" + date;

				return nowDate;
			},
			showbuymember() {
				this.isshowbuy = true;
			},
			goclose(par) {
				this.isshowbuy = par;
			},
			goback() {
				if (1 == this.type) {
					uni.switchTab({
						url: '/pages/my/my'
					});
				} else if (2 == this.type) {
					uni.switchTab({
						url: '/pages/member/member'
					});
				} else if (3 == this.type) {
					uni.switchTab({
						url: '/pages/member/member'
					});
				}

			},
			gologin() {
				uni.switchTab({
					url: '/pages/my/my'
				});
			},
			checkcard(item, index) {
				this.curindex = index;
				this.month = item.mouth;
				this.money = item.salePrice;
				// console.log('item, index', item, index);
			},
			domember() {
				//开通会员
				if (this.islogin) {
					if (this.isvip) {

						//获取当前时间戳
						let time = new Date().getTime();
						let vipdate = new Date(this.userInfo.vipdate).getTime();
						console.log(time, vipdate);
						//判断会员是否过期
						if (time < vipdate) {
							uni.showModal({
								title: '提示',
								content: '您的会员未到期',
								confirmText: "确认", // 确认按钮的文字
								showCancel: false, // 是否显示取消按钮，默认为 true
								confirmColor: '#39B54A',
								success: async (res) => {
									if (res.confirm) {
										//1.关闭模态框
										this.isshowbuy = false;
									}
								}
							})

						} else {
							//会员到期续费
							console.log(this.month);
							this.$service.userService.openVip({
								_id: this.userInfo._id,
								date: this.month + ''
							}).then(async res => {
								if (1 == res.code) {
									//1.关闭模态框
									this.isshowbuy = false;
									//2.开通成功消息提示
									uni.showModal({
										title: '提示',
										content: '续费成功',
										confirmText: "确认", // 确认按钮的文字
										showCancel: false, // 是否显示取消按钮，默认为 true
										confirmColor: '#39B54A',
										success: async (res) => {
											if (res.confirm) {
												//3.获取信息重新渲染页面
												this.userInfo = await logintools.getuserinfo();
												this.isvip = this.userInfo.vip;
												// console.log(this.isvip, 'this.this.isvip');
												uni.navigateTo({
													url: `/pages/buysucces/buysucces?money=${this.money}`
												})
											}
										}
									});
								}
							})
						}
					} else {
						//不是会员开通会员
						this.$service.userService.openVip({
							_id: this.userInfo._id,
							date: this.month
						}).then(async res => {
							console.log('openVip', res);
							if (1 == res.code) {
								//1.关闭模态框
								this.isshowbuy = false;
								//2.开通成功消息提示
								uni.showModal({
									title: '提示',
									content: '开通会员成功',
									confirmText: "确认", // 确认按钮的文字
									showCancel: false, // 是否显示取消按钮，默认为 true
									confirmColor: '#39B54A',
									success: async (res) => {
										if (res.confirm) {
											console.log('comfirm') //点击确定之后执行的代码
											//3.获取信息重新渲染页面
											this.userInfo = await logintools.getuserinfo();
											this.isvip = this.userInfo.vip;
											console.log(this.isvip, 'this.this.isvip');
											uni.navigateTo({
												url: `/pages/buysucces/buysucces?money=${this.money}`
											})
										} else {
											console.log('cancel') //点击取消之后执行的代码
										}
									}
								});
							}
						})
					}
				} else {
					uni.showToast({
						title: '请登录',
						mask: true,
					});

					uni.switchTab({
						url: '/pages/my/my'
					})
				}
			},
		},
		async onLoad(options) {
			if (options) {
				this.type = options.type;
			}
			//渲染会员卡片
			this.islogin = logintools.islogin();
			this.userInfo = await logintools.getuserinfo();
			this.isvip = await logintools.isVip()
			console.log(this.userInfo);

			//渲染套餐
			this.$service.userService.topupList().then(res => {
				// console.log('topupList', res);
				if (200 == res.meta.status) {
					this.topupList = res.data;
				}
			})
		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 508rpx;
		background: url(../../static/bgimages/member2_header.png) no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;


		.fixed_header {
			width: 750rpx;
			height: 150rpx;
			background-color: #313131;
			border-bottom: 1rpx solid #dbdbdb;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			position: fixed;
			top: 0;
			z-index: 999;

			.header_title_warp {
				height: 50rpx;
				display: flex;
				align-items: center;
				margin-bottom: 10rpx;
				margin-left: 34rpx;

				.header_title {
					color: #fff;
					font-size: 36rpx;
					font-weight: 700;
					margin-left: 252rpx;
				}
			}


		}



		.allmember {
			width: 100%;
			height: 48rpx;
			display: flex;
			justify-content: space-between;
			margin-top: 170rpx;

			.member_num {
				width: 434rpx;
				height: 100%;
				background-color: rgba(92, 92, 92, .7);
				border-radius: 0rpx 40rpx 40rpx 0rpx;
				display: flex;
				align-items: center;

				.member_num_msg {
					color: #fff;
					font-size: 24rpx;
					margin-left: 14rpx;
				}
			}

			.buy {
				height: 48rpx;
				line-height: 48rpx;
				text-align: center;
				margin-right: 40rpx;
				font-size: 28rpx;
				color: #fff;
			}
		}
	}

	.member_img {
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 24rpx;
	}

	.member_card {
		width: 750rpx;
		height: 302rpx;
		margin-top: 28rpx;
		background: url(http://localhost:4000/public/images/member2_banner.png) no-repeat;
		background-size: cover;
		position: absolute;
		bottom: -68rpx;
		display: flex;
		align-items: center;

		.member_msg {
			display: flex;
			margin-left: 64rpx;

			.icon {
				width: 108rpx;
				height: 108rpx;

				image {
					width: 100%;
					border-radius: 55rpx;
				}
			}

			.member_login {
				margin-left: 18rpx;

				.member_login_top {
					display: flex;
					align-items: center;
					color: #7b5b21;
					font-size: 40rpx;

					>view {
						&:nth-child(2) {
							width: 106rpx;
							height: 32rpx;
							line-height: 32rpx;
							text-align: center;
							color: #fbedc5;
							font-size: 28rpx;
							background-color: #a5a5a5;
							border-radius: 16rpx;
							margin-left: 8rpx;
						}
					}


					+view {
						color: #7b5b21;
						font-size: 28rpx;
						margin-top: 15rpx;
					}



				}
			}
		}
	}

	.mybuymember_warp {
		margin-top: 116rpx;
		position: relative;
	}



	.vippower_content {
		display: flex;
		justify-content: center;
		width: 100%;

		.vippower_warp {
			width: 686rpx;

			.vippower_warp_title {
				font-size: 44rpx;
				font-weight: 700;
				color: #353535;
				margin: 20rpx 0 40rpx 0;
			}
		}
	}

	.member_use_msg_warp {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;


		.member_use_msg {
			width: 686rpx;
			margin-bottom: 52rpx;

			.use_msg_title {
				color: #484848;
				font-size: 32rpx;
				font-weight: 700;
				margin: 20rpx 0;

			}

			.use_msg_text {
				color: #b7b7b7;
				font-size: 28rpx;
			}
		}
	}

	.popup_title {
		font-size: 32rpx;
		font-weight: 700;
		color: #5a5a5a;
		text-align: center;
		margin: 22rpx 0 40rpx 0;
	}

	.toast {
		width: 158rpx;
		height: 56rpx;
		line-height: 65rpx;
		text-align: center;
		color: #fff;
		font-size: 28rpx;
		background: url(../../static/bgimages/member2_buymember.png) no-repeat;
		background-size: cover;
		position: absolute;
		top: 70rpx;
		left: 30rpx;

	}

	.btn {
		width: 686rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 40rpx;
		color: #a98c4f;
		background-color: #fcf1d3;
		border: none;
		// margin-bottom: 74rpx;
	}

	.btnsel {
		margin-bottom: 20rpx;
	}

	.mycard {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.mypricecard {
		margin-bottom: 20rpx;
		border-radius: 12rpx;
		background-color: #fbfcfe;
	}

	.recommend {
		&:first-child {
			border: 1px solid #dcb66a;
			background-color: #fbf7ef;
		}
	}

	.recommend_btn {
		width: 98rpx;
		height: 48rpx;
		line-height: 48rpx;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
		background: url(../../static/bgimages/tuijian.png) no-repeat;
		background-size: cover;
		position: absolute;
		left: 40rpx;
		top: -20rpx;

	}

	.active {
		border: 1px solid #dcb66a;
		background-color: #fbf7ef;
	}

	.ismember {
		background-color: #dcb66a !important;
	}
</style>