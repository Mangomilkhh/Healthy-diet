<template>
	<!--登陆面板-->
	<view>
		<view id='myLogin'>
			<image id='myIcon' :src='user_img'></image>
			<text id='nickName'>{{ user_name }}</text>
			<button v-show="!user_img&&!user_name" class="button" @click="get_user">授权登录</button>
		</view>
		<uni-list>
			<uni-list-item title="营养知识" showArrow thumb="/static/user/u1.png" thumb-size="lg" link/>
			<uni-list-item title="评价与反馈" showArrow thumb="/static/user/u2.png" thumb-size="lg" @click="toFeedback" link/>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: "",
				user_img: "",
				user_name: "",
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		methods: {
			get_user() { // 获取用户信息
				uni.getUserProfile({
					desc: '用户登录',
					success: res => {
						console.log(res) // 用户的信息
						this.user_img = res.userInfo.avatarUrl //微信头像
						this.user_name = res.userInfo.nickName // 微信昵称
					}
				})
			},
			toFeedback() {
				uni.navigateTo({
					url: '/pages/user/feedback/feedback'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	#myLogin {
		background-color: #41a86387;
		height: 500rpx;
		display: flex;
		flex-direction: column;
		/*灵活的项目将垂直显示，正如一个列一样 */
		align-items: center;
		/*元素位于容器的中心。*/
		justify-content: center;
		/* 项目位于各行之前、之间、之后都留有空白的容器内。*/
	}

	/* 登录按钮 */
	.denglu {
		width: 450rpx;
		margin-top: 130rpx;
		border-radius: 60rpx;
	}

	/*头像图片 */
	#myIcon {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	/*微信昵称 */
	#nickName {
		color: white;
		font-size: 40rpx;
		font-weight: 600;
		margin-top: 40rpx;
	}

	.button {
		width: 380rpx;
		font-size: 35rpx;
		margin-bottom: 190rpx;
	}

	::v-deep uni-text.uni-list-item__content-title {
		font-size: 16px;
		font-weight: 500;
	}
</style>