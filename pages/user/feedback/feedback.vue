<template>
	<view class="feedback_box">
		<view style="font-size: 18px;margin-bottom: 10px;">姓名：</view>
		<view class="feedback">
			<input v-model="from_name" placeholder="请输入您的姓名" />
		</view>

		<view style="font-size: 18px;margin: 30px 0 10px;">我的意见：</view>
		<view class="feedback">
			<textarea v-model="message" placeholder="请留下您的意见"></textarea>
		</view>
		<button class="btn" @click="sendEmail">提交</button>
	</view>
</template>

<!--
 
 第一个参数：你的电子邮件的ID   service_x6dnloj
 第二个参数：TEMPLATE_ID 来自你的apikey文件     template_uamuphk
 第三个参数：表单提交中的事件对象e
 第四个参数：USER_ID 来自你的apikey文件   公钥：'Xbsu_M_8c80CtHZfe'
-->
<script>
 import emailjs from 'emailjs-com'
	
	export default {
		data() {
			return {
				to_name: '管理者',
				message: '',
				from_name: '',
				reply_to: '哈哈哈',
			}
		},
		methods: {
			sendEmail() {
				emailjs
					.send('service_x6dnloj', 'template_uamuphk', {
						// to_name: this.to_name,
						from_name: this.from_name,
						// reply_to: this.reply_to,
						message: this.message,
					}, 'Xbsu_M_8c80CtHZfe')
					.then(
						result => {
							uni.showToast({
								title: '成功发送评价！',
								duration: 2000
							})
							console.log('成功发送')
						},
						error => {
							console.log(error)
						}
					)
			},

			submit() {
				if (this.message === "") {
					return uni.showToast({
						title: "请输入想说的话哟",
						icon: "none",
						duration: 2000
					})
				}
				this.sendMail()
			},
			sendMail() {
				// 调用云函数sendMail()
				// name 是云函数的名字， data 是需要传递过去的数据
				uniCloud.callFunction({
						name: 'sendMail',
						data: {
							content: this.message,
							from_name: this.from_name,
						}
					})
					.then(res => {
						console.log('8888',res)
						if (res.success === true) {
							uni.showToast({
								title: '成功发送评价！',
								duration: 2000
							});
							this.message = "";
						} else {
							uni.showToast({
								title: '评价发送失败！',
								duration: 2000
							})
						}
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feedback_box {
		margin: 30px 30px;
	}

	.feedback {
		border: 2px solid #41a863d4;
		box-shadow: 3px 3px 6px 1px #d3d3d3;
		border-radius: 2%;
		padding: 15rpx;
	}

	// ::v-deep uni-textarea {
	// 	width: 100%;
	// 	height: 800rpx;
	// 	background: #fff;
	// }

	// ::v-deep uni-input {
	// 	width: 100%;
	// 	height: 50rpx;
	// 	background: #fff;
	// }

	.btn {
		margin-top: 100rpx;
		color: #fffae8;
		border: 1px solid #41a863;
		background-color: #41a863;
	}

	.btn:hover {
		color: #41a863;
		background-color: #fff;
		border: 1px solid #41a863;
	}
</style>