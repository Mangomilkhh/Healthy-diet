<template>
	<view>
		<image src="https://www.freeimg.cn/i/2024/02/24/65d9f7422975f.png" mode="" class="doctor"></image>

		<view class="score">
			<text>您的膳食炎症评分为</text>
			<text class="num">{{totalScore}}分</text>

			<view v-if="state" style="display: block;margin-bottom: 5px;">
				表示为<text>{{state}}</text><br />
			</view>

			<text>{{health}}</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalScore: '无',
				state: '抗/促炎饮食',
				health: '有/不利于健康。',
			}
		},
		// 应用程序进入前台时触发，在此方法中可以加载页面数据，刷新页面等操作
		onShow() {
			let localScore = uni.getStorageSync("totalScore");
			// isNaN(localScore) ? '无' : 
			this.totalScore = localScore; //取值

			if (this.totalScore > 0) {
				this.state = '促炎饮食，';
				this.health = '不利于健康。';
			} else if (this.totalScore < 0) {
				this.state = '抗炎饮食，'
				this.health = '有利于健康。';
			} else if (this.totalScore == 0) {
				this.state = '既不是抗炎饮食也不是促炎饮食。'
				this.health = '';
			} else {
				this.state = ''
				this.health = '';
			}
		}
	}
</script>

<style scoped lang="scss">
	.doctor {
		width: 170px;
		height: 147px;
		margin: 50px 14px 25px;
	}

	.content {
		margin: 0px 20px 0px;
	}

	.score {
		// position: relative;
		// top: -170px;
		// left: 46px;
		font-size: 25px;
		margin: 40rpx;
		padding: 60rpx 50rpx;
		border: 5px dashed #41a863;
		border-radius: 6px;
		text-align: center;

		.num {
			font-size: 48px;
			color: orangered;
			display: block;
			margin: 10rpx;
			word-wrap: break-word;
		}
	}
</style>