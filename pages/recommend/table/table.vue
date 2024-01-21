<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="100" align="center">推荐摄入</uni-th>
					<uni-th width="100" align="center">适量摄入</uni-th>
					<uni-th align="center">减少摄入</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.good }}</uni-td>
					<uni-td>{{ item.ordinary }}</uni-td>
					<uni-td>{{ item.reduce }}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
</template>

<script>
import tableData from './tableData.js'
export default {
	data() {
		return {
			searchVal: '',
			tableData: [],
			// 每页数据量
			pageSize: 100,
			// 当前页
			pageCurrent: 1,
			// 数据总量
			total: 0,
			loading: false
		}
	},
	// 目标表格页面接收数据
	onLoad() {
		this.selectedIndexs = []
		this.getData(1)
		
		// 小程序没有this.$route
		if(this.$route){
			const data = JSON.parse(decodeURIComponent(this.$route.query.data)); // this.$route.query获取URL参数
	
			uni.setNavigationBarTitle({
				title: data,
			})
		}
	},
	methods: {
		// 搜索
		search() {
			this.getData(1, this.searchVal)
		},
		// 获取数据
		getData(pageCurrent, value = '') {
			this.loading = true
			this.pageCurrent = pageCurrent
			this.request({
				pageSize: this.pageSize,
				pageCurrent: pageCurrent,
				value: value,
				success: res => {
					// console.log('data', res);
					this.tableData = res.data
					this.total = res.total
					this.loading = false
				}
			})
		},
		// 伪request请求
		request(options) {
			const { pageSize, pageCurrent, success, value } = options
			let total = tableData.length
			let data = tableData.filter((item, index) => {
				const idx = index - (pageCurrent - 1) * pageSize
				return idx < pageSize && idx >= 0
			})
			if (value) {
				data = []
				tableData.forEach(item => {
					if (item.name.indexOf(value) !== -1) {
						data.push(item)
					}
				})
				total = data.length
			}

			setTimeout(() => {
				typeof success === 'function' &&
					success({
						data: data,
						total: total
					})
			}, 500)
		}
	}
}
</script>


<style>
/* #ifndef H5 */
/* page {
	padding-top: 85px;
} */
/* #endif */

.uni-group {
	display: flex;
	align-items: center;
}
.uni-table-tr .uni-table-th:first-child,
.uni-table-tr .uni-table-td:first-child{
	background-color: #5bff5b63;
}

.uni-table-tr .uni-table-th:nth-child(2),
.uni-table-tr .uni-table-td:nth-child(2){
	background-color: #ffff54ad;
}

.uni-table-tr .uni-table-th:nth-child(3),
.uni-table-tr .uni-table-td:nth-child(3){
	background-color: #ff000057;
}
</style>

