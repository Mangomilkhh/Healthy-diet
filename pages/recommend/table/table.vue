<template>
	<view>
		111
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		// 目标页面接收数据
		onLoad() {
			const data = JSON.parse(decodeURIComponent(this.$route.query.data)); // this.$route.query获取URL参数

			uni.setNavigationBarTitle({
				title: data,
			})
		},
		methods: {}
	}
</script>

<style>

</style>