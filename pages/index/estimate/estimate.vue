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
						url: '../../../static/home/estimate/米饭.png',
						width: '290',
						height: '166',
						// top:'10'
					},
					{
						url: '../../../static/home/estimate/面条.png',
						width: '215',
						height: '160',
						// top:'10'
					},
					{
						url: '../../../static/home/estimate/瘦肉.png',
						width: '410',
						height: '193',
						top: '10'
					},
					{
						url: '../../../static/home/estimate/大豆.png',
						width: '150',
						height: '130',
						top: '10'
					},
					{
						url: '../../../static/home/estimate/菠菜.png',
						width: '183',
						height: '209',
						top: '10'
					},
					{
						url: '../../../static/home/estimate/油菜.png',
						width: '176',
						height: '202',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/芹菜.png',
						width: '163',
						height: '172',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/e1.png',
						width: '220',
						height: '141',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/e2.png',
						width: '220',
						height: '135',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/e3.png',
						width: '144',
						height: '154',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/e4.png',
						width: '203',
						height: '131',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/e5.png',
						width: '118',
						height: '135',
						top: '10'
					}, 
					{
						url: '../../../static/home/estimate/e6.png',
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