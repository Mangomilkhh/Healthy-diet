<template>
	<uni-grid :column="3" :show-border="false" :square="false">
		<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index" class="grid-dynamic-box">
			<view class="grid-item-box" @click="toTable(item)">
				<image :style="{'margin-top':item.top+ 'rpx',
				'width': item.width + 'rpx', 'height':item.height + 'rpx'}" :src="item.url" />
				<text class="text">{{item.text}}</text>
				<view v-if="item.badge" class="grid-dot">
				</view>
			</view>
		</uni-grid-item>
	</uni-grid>

	<uni-grid :column="1" :highlight="true" @change="toQuestion" :show-border="false">
		<uni-grid-item>
			<view class="grid-item-box">
				<image class="what" :style="{
				'width':70 + 'rpx', 'height':90 + 'rpx'}" src="../../static/recommend/？.png" />
				<text class="text">说明</text>
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
						text: '谷薯类',
						badge: '0',
						type: "primary",
						height: 95,
						width: 95,
						top: 5,
					},
					{
						url: '/static/recommend/r2.png',
						text: '蔬菜类',
						badge: '1',
						type: "success",
						height: 100,
						width: 95,
						top: 0,
					},
					{
						url: '/static/recommend/r3.png',
						text: '水果类',
						badge: '99',
						type: "warning",
						height: 80,
						width: 95,
						top: 20,
					},
					{
						url: '/static/recommend/r4.png',
						text: '畜肉类',
						badge: '2',
						type: "error",
						height: 85,
						width: 100,
						top: 15,
					},
					{
						url: '/static/recommend/r5.png',
						text: '蛋类',
						height: 95,
						width: 100,
						top: 5,
					},
					{
						url: '/static/recommend/r6.png',
						text: '奶类',
						height: 100,
						width: 105,
						top: 0,
					},
					{
						url: '/static/recommend/r7.png',
						text: '禽肉类',
						height: 85,
						width: 115,
						top: 15,
					},
					{
						url: '/static/recommend/r8.png',
						text: '坚果类',
						height: 100,
						width: 100,
						top: 0,
					},
					{
						url: '/static/recommend/r9.png',
						text: '油脂类',
						height: 100,
						width: 65,
						top: 0,
						navigate:''
					}
				]
			}
		},
		methods: {
			toTable(item) {
				uni.navigateTo({
					url: '/pages/recommend/table/table'
				})
			},
			toQuestion() {
				uni.navigateTo({
					url: '/pages/recommend/question/question'
				})
			}
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

	::v-deep .uni-grid-item {
		height: 230rpx !important;
	}

	.what_box {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: flex-end;
	}

	.what {
		width: 50rpx;
		height: 70rpx;
		// margin: 10rpx 75rpx 8rpx -12rpx;
		border: 3px solid red;
		padding: 7rpx 15rpx;
		border-radius: 15%;
	}
</style>