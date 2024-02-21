<template>
	<view class="">
		<uni-list>
			<uni-list-item  showArrow thumb-size="lg" link
				v-for="(item ,index) in knowledgeList" :key="index">
				<template v-slot:body>
					<view class="slot-box">
						<text class="slot-text">{{item.title}}</text>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				knowledgeList:[{
					title:'平衡膳食八大原则',
					url:'/static/recommend/r1.png',
				},{
					title:'饮食与慢性低度炎症',
					url:'',
				},{
					title:'抗炎饮食预防肿瘤的专家共识',
					url:'',
				},{
					title:'中国居民平衡膳食宝塔与餐盘',
					url:'',
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>