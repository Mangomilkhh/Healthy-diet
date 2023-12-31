<template>
	<view>
		<image src="../../static/doctor.png" mode="" class="doctor"></image>
		<image src="../../static/对话框.png" mode="" class="content"></image>

		<view class="score">
			<text>您的膳食炎症评分为</text>
			<text class="num">85</text>分<br />
			
			<view style="display: block;margin-bottom: 5px;">
				表示为<text>抗/促炎</text>饮食，<br />
			</view>
			
			<text>有/不利于</text>健康。
		</view>

	</view>
</template>

<script>

</script>

<style scoped lang="scss">
	.doctor {
		width: 170px;
		height: 147px;
		margin: 50px 14px 25px;
	}

	.content {
		margin: 0px 29px 0px;
	}

	.score {
		position: relative;
		top: -170px;
		left: 46px;
		font-size: 23px;

		.num {
			font-size: 45px;
			color: orangered;
		}
	}
</style>