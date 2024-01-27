<template>
	<view class="record_box">
		<view class="name_box">
			<image src="../../../static/home/record/name.png" mode=""></image>
			<view style="flex: none;">食物名称：</view>
			<cus-selects v-model="nameVal" :filterable='true' :searchType='1'
			 placeholder="请输入关键字" @change="changeSelect"
			  :valueType="alias"
				:data="selectList"></cus-selects>
		</view>

		<view class="weight_box">
			<image src="../../../static/home/record/weight.png" mode=""></image>
			<view>食物重量：</view>
			<uni-easyinput trim="all" v-model="weightVal" placeholder="请输入重量" @input="input"></uni-easyinput> g
		</view>

		<button class="btn" @click="toScore">开始评分</button>
	</view>
</template>

<script>
	import cusSelects from '@/components/cus-selects-fan/cus-selects-fan.vue'
	export default {
		components: {
			cusSelects
		},
		data() {
			return {
				weightVal:'',
				nameVal: '',
				//根据自己需求获得的下拉数据，如果数据不是{label:'',value:''}结构的就需要起一个别名来代指一下，就需要valueType
				selectList: [],
				// selectList: [
				// 	{
				// 		id: 1,
				// 		title: 'hahah',
				// 	},
				// 	{
				// 		id: 2,
				// 		title: 'hahah1',
				// 	},
				// 	{
				// 		id: 3,
				// 		title: 'hahah3',
				// 	}
				// ],
				alias: { //别名来代指一下
					label: 'title',
					value: 'id'
				},
			}
		},
		mounted(){
			for (let i=0;i<2000;i++) {
				this.selectList.push({
					id:i,
					title:'hahah'+i,
				});
			}
		},
		methods: {
			toScore() {
				uni.switchTab({
					url: '/pages/score/index'
				})
			},
			input(){},
			changeSelect(e) {
				// this.nameVal=e;
				console.log('1111',e) //这里返回的是nameVal值
			},
		}
	}
</script>

<style scoped lang="scss">
	.record_box {
		padding: 20rpx 50rpx;

		.name_box {
			margin-top: 100rpx;
			border-radius: 20px;
			background: #fff;
			padding: 20px 9px 20px 0;
			box-shadow: 3px 3px 6px 1px #d3d3d3;
			display: flex;
			align-items: center;
		}
		
		.weight_box {
			margin-top: 100rpx;
			border-radius: 20px;
			background: #fff;
			padding: 20px 9px 20px 0;
			box-shadow: 3px 3px 6px 1px #d3d3d3;
			display: flex;
			align-items: center;
		}

		image {
			width: 200rpx;
			height: 170rpx;
			display: inline-table;
		}
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

	.listStyle {
		text-align: left;
		box-sizing: border-box;
		position: absolute;
		top: calc(100% + 12px);
		left: 0;
		width: 100%;
		background-color: #fff;
		border: 1px solid #ebeef5;
		border-radius: 6px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		z-index: 3;
		padding: 6px 0px;
	}
</style>