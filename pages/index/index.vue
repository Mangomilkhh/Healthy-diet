<template>
	<view class="container">
		<uni-grid :column="4" :highlight="true" @change="change">
			<uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
				<view class="grid-item-box" style="background-color: #fff;">
					<uni-icons type="image" :size="40" color="#777" />
					<text class="text">文本信息</text>
				</view>
			</uni-grid-item>
		</uni-grid>
		<uni-grid :column="1" :highlight="true" @change="change">
			<uni-grid-item>
				<view class="grid-item-box1" style="background-color: #fff;">
					<uni-icons type="image" :size="40" color="#777" />
					<text class="text">文本信息</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0px;
		width: 100%;
	}

	.grid-item-box {
		flex: 1;
		/* position: relative; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
	
	.grid-item-box1 {
		flex: 1;
		/* position: relative; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.image {
		width: 30px;
		height: 30px;
	}

	.text {
		font-size: 14px;
		margin-top: 10px;
	}
</style>