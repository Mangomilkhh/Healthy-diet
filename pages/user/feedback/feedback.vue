<template>
	<view class="feedback_box">
		<view style="font-size: 20px;margin-bottom: 10px;">我的意见：</view>
		<view class="feedback">
			<textarea></textarea>
		</view>
		<button class="btn" @click="smsTest">提交</button>
		<!-- <a href="mailto:sample@fly63.com?subject=test&cc=sample@hotmail.com&subject=主题&body=内容">send mail</a> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			smsTest() {
				plus.messaging.sendMessage(msg);
				var msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS);
				msg.to = ['13682301788'];
				msg.body = 'This is HTML5 Plus example test message';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feedback_box {
		margin: 30px 30px;
	}

	.feedback {
		border: 2px solid #a7ffcc;
		box-shadow: 3px 3px 6px 1px #d3d3d3;
		border-radius: 2%;
		padding: 15rpx;
	}

	::v-deep uni-textarea {
		width: 100%;
		height: 800rpx;
		background: #fff;
	}

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