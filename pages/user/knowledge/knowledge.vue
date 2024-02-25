<template>
	<view class="">
		<uni-list>
			<uni-list-item  showArrow thumb-size="lg" link @click="toPic(item)"
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
	import knowledges from '@/api/knowledges.json'
	export default{
		data(){
			return {
				knowledgeList:knowledges,
			}
		},
		methods:{
			toPic(item) {
				uni.navigateTo({
					url: '/pages/user/knowledge/picPage?data=' 
					+ encodeURIComponent(JSON.stringify(item))
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>