<template>
	<view class="">
		<image :src="picData.img" mode="widthFix" style="width: 100%;"></image>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				picData:{},
			}
		},
		// 目标图片页面接收数据
		onLoad(options) {
			// 小程序没有this.$route     this.$route.query.data
				const data = JSON.parse(decodeURIComponent(options.data)); 
				// this.$route.query获取URL参数
				// console.log('4444',data)
		
				uni.setNavigationBarTitle({
					title: data.title,
				})
				
				this.picData = data;
				
				// this.tableData.forEach((item)=>{
				// 	if(item.foodType == data.navigator){
				// 		this.foodDatas = item.foodList
				// 		// console.log('555',item)
				// 	}
				// })
		},
	}
</script>

<style>
</style>