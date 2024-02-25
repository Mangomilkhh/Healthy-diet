<template>
	<view>
		<uni-card :is-shadow="false">
			<view v-for="(item,key) in estimateList" :key="key" style="display: inline-block;">
				<image :style="{'margin-top':item.top+ 'rpx',
				'width': item.width + 'rpx', 'height':item.height + 'rpx'}" :src="item.url" class="est_img"></image>
			</view>
		</uni-card>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				estimateList: [{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d0acce6.png',
						width: '290',
						height: '166',
						// top:'10'
					},
					{
						url: '../../../static/home/面条.png',
						width: '215',
						height: '160',
						// top:'10'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d0bfc3b.png',
						width: '410',
						height: '193',
						top: '10'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d03fcb6.png',
						width: '150',
						height: '130',
						top: '10'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d040b3a.png',
						width: '183',
						height: '209',
						top: '10'
					},
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d0bf671.png',
						width: '176',
						height: '202',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d0b00e3.png',
						width: '163',
						height: '172',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d032c08.png',
						width: '220',
						height: '141',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d03879a.png',
						width: '220',
						height: '135',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d03861d.png',
						width: '144',
						height: '154',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d03d4c1.png',
						width: '203',
						height: '131',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d03d1f9.png',
						width: '118',
						height: '135',
						top: '10'
					}, 
					{
						url: 'https://www.freeimg.cn/i/2024/02/24/65d9f2d03e0a3.png',
						width: '133',
						height: '200',
						top: '10'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .uni-card .uni-card__content {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
</style>