<template>
	<uni-grid :column="3" :show-border="false" :square="false" @change="change">
		<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index" class="grid-dynamic-box">
			<view class="grid-item-box">
				<image :style="{'margin-top':item.top+ 'rpx',
				'width': item.width + 'rpx', 'height':item.height + 'rpx'}" 
				:src="item.url" />
				<text class="text">{{item.text}}</text>
				<view v-if="item.badge" class="grid-dot">
				</view>
			</view>
		</uni-grid-item>
	</uni-grid>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				list: [{
						url: '/static/recommend/r1.png',
						text: 'Grid 1',
						badge: '0',
						type: "primary",
						height: 95,
						width: 95,
						top: 5,
					},
					{
						url: '/static/recommend/r2.png',
						text: 'Grid 2',
						badge: '1',
						type: "success",
						height: 100,
						width: 95,
						top: 0,
					},
					{
						url: '/static/recommend/r3.png',
						text: 'Grid 3',
						badge: '99',
						type: "warning",
						height: 80,
						width: 95,
						top: 20,
					},
					{
						url: '/static/recommend/r4.png',
						text: 'Grid 4',
						badge: '2',
						type: "error",
						height: 85,
						width: 100,
						top: 15,
					},
					{
						url: '/static/recommend/r5.png',
						text: 'Grid 5',
						height: 95,
						width: 100,
						top: 5,
					},
					{
						url: '/static/recommend/r6.png',
						text: 'Grid 6',
						height: 100,
						width: 105,
						top: 0,
					},
					{
						url: '/static/recommend/r7.png',
						text: 'Grid 7',
						height: 85,
						width: 115,
						top: 15,
					},
					{
						url: '/static/recommend/r8.png',
						text: 'Grid 8',
						height: 100,
						width: 100,
						top: 0,
					},
					{
						url: '/static/recommend/r9.png',
						text: 'Grid 9',
						height: 100,
						width: 65,
						top: 0,
					}
				]
			}
		},
		methods: {
			change(e) {
				uni.showToast({
					title: `点击第${1}个宫格`,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.grid-dynamic-box {
		margin-top: 20px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30px 0;
	}
</style>