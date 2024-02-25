<template>
	<view class="container">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>

		<view style="margin: 10px;">
		<uni-grid :column="4" :show-border="false">
			<uni-grid-item v-for="(item, index) in homeList" :index="index" :key="index" class="bg">
				<view class="grid-item-box" @click="toRecords(item)">
					<image :style="{
					'width': item.width + 'rpx', 'height':item.height + 'rpx'}" :src="item.url" />
					<text class="text">{{item.text}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
		</view>

		<view style="margin: 10px;">
		<uni-grid :column="1" :highlight="true" :show-border="false">
			<uni-grid-item v-for="(item, index) in homeList2" :index="index" :key="index" class="bg">
				<view class="grid-item-box" @click="toEstimate(item)">
					<image :style="{
					'width': item.width + 'rpx', 'height':item.height + 'rpx'}" :src="item.url" />
					<text class="text">{{item.text}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				homeList: [{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2bbeffd9.png',
						text: '早餐记录',
						badge: '0',
						type: "primary",
						height: 102,
						width: 112,
						navigate: '/pages/index/record/record'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2bbf0104.png',
						text: '中餐记录',
						badge: '0',
						type: "primary",
						height: 102,
						width: 112,
						navigate: '/pages/index/record/record'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2bbeffd0.png',
						text: '晚餐记录',
						badge: '0',
						type: "primary",
						height: 102,
						width: 112,
						navigate: '/pages/index/record/record'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2bbf01b8.png',
						text: '零食记录',
						badge: '0',
						type: "primary",
						height: 102,
						width: 112,
						navigate: '/pages/index/record/record'
					},
				],
				homeList2: [{
					url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2bbf002c.png',
					text: '估重',
					badge: '0',
					type: "primary",
					height: 102,
					width: 112,
					navigate: '/pages/index/estimate/estimate'
				}]
			}
		},
		methods: {
			toRecords(item) {
				uni.navigateTo({
					url: item.navigate
				})
			},
			toEstimate(item) {
				uni.navigateTo({
					url: item.navigate
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg{
		background-color: #fff;
		border-radius: 5%;
	}
	
	.container {
		padding: 0px;
		width: 100%;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}



	.grid-item-box {
		flex: 1;
		/* position: relative; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		// background-color: #fff;
		// border-radius: 5%;
		// margin: 15px 5px;
	}

	.image {
		width: 30px;
		height: 30px;
	}

	.text {
		font-size: 14px;
		margin-top: 10px;
	}

	::v-deep .uni-grid-item {
		height: 230rpx !important;
	}
</style>