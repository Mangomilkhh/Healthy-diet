<template>
	<view class="what_box">
		<image src="../../../static/recommend/？.png" mode="" class="what"></image>
	</view>
	<view class="question">
		<text style="font-size: 24px;display: block;margin-bottom: 40rpx;"><text style="background-color: #5bff5b8a;">绿色</text>
			是<text style="font-weight: 600;">推荐摄入的食物</text></text><br />

		<text style="font-size: 24px;display: block;margin-bottom: 40rpx;"><text style="background-color: #ffff54ad;">黄色</text>
			是<text style="font-weight: 600;">适量摄入的食物</text></text><br />

		<text style="font-size: 24px;"><text style="background-color: #ff000057;">红色</text>
			是<text style="font-weight: 600;">减少摄入的食物</text></text><br />
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

<style>
	.question {
		border: 2px solid #a7ffcc;
		margin: 50rpx;
		padding: 65rpx;
		border-radius: 5%;
		text-align: center;
		box-shadow: 3px 3px 6px 1px #d3d3d3;
	}

	.what_box {
		display: flex;
		justify-content: space-around
	}

	.what {
		width: 50rpx;
		height: 70rpx;
		margin: 50rpx 0rpx 8rpx 12rpx;
		border: 3px solid red;
		padding: 7rpx 15rpx;
		border-radius: 15%;
	}
</style>