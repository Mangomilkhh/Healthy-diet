<template>
	<view class="feedback_box">
		<view style="font-size: 20px;margin-bottom: 10px;">我的意见：</view>
		<view class="feedback">
			<textarea></textarea>
		</view>
		<button class="btn">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
		color: #000;
		border: 1px solid #64f089;
		background-color: #64f089;
	}
	
	.btn:hover {
		color: #000;
		background-color: #fff;
		border: 1px solid #64f089;
	}
</style>