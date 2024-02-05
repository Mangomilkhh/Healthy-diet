<template>
	<view class="record_box" v-for="(item,index) in foodsList" :key="item.key">
		<icon v-show="showIcon" class="record_icon" type="cancel" size="18" color="#9e9e9e" @click="deleteFoods(index)" />
		<view class="name_box">
			<image src="../../../static/home/record/name.png" mode=""></image>
			<view>食物名称：
				<cus-selects v-model="item.nameVal" :filterable='true' :searchType='1' placeholder="请输入关键字"
					@change="e=>changeSelect(index, e)" noDataText="无匹配项" @close="e=>closeSelect(index, e)"
					@input="e=>inputSelect(index, e)" :valueType="alias" :data="selectList"></cus-selects>

				<!-- <uni-combox v-model="item.nameVal" @change="changeSelect" :candidates="selectList"
				  labelKey="label" valueKey="id" label=""  emptyTips="暂无数据"
					placeholder="请输入关键字"></uni-combox> -->
			</view>
		</view>

		<view class="weight_box">
			<image src="../../../static/home/record/weight.png" mode=""></image>
			<view>食物重量：
				<view style="width: 470rpx;display: flex;">
					<uni-easyinput trim="all" v-model="item.weightVal" placeholder="请输入重量" type="number"
						@blur="(e)=>inputWeight(index,e)"></uni-easyinput>
					<!-- 	@input="(e)=>handleNumber(index,e)" -->
					<view style="display: inline-block;margin-left: 5rpx;">g</view>
				</view>
			</view>
		</view>
	</view>

	<view class="btn_box">
		<button class="add_btn" @click="addFoods">+ 增加食物</button>
		<button class="btn" @click="toScore">开始评分</button>
	</view>
</template>

<script>
	import cusSelects from '@/components/cus-selects-fan/cus-selects-fan.vue'
	import foods from '@/api/foods.json'

	export default {
		components: {
			cusSelects
		},
		data() {
			return {
				//根据自己需求获得的下拉数据，如果数据不是{label:'',value:''}结构的就需要起一个别名来代指一下，就需要valueType
				selectList: foods,
				originSelectList: JSON.parse(JSON.stringify(foods)),
				alias: { //别名来代指一下
					label: 'title',
					value: 'id'
				},
				foodsList: [{
					key: 0,
					weightVal: '',
					nameVal: '',
					infla_score: 0,
					expression: '',
					result: '',
				}],
				showIcon: false,
				closeOptions: false,
			}
		},
		mounted() {
			// for (let i=0;i<2000;i++) {
			// 	this.selectList.push({
			// 		id:i,
			// 		title:'hahah'+i,
			// 	});
			// }

			// 检查foods文件里面有没有id重复了
			// 利用ES6语法Set将数组去重，之后再原数组比较长度，若长度小于原数组，则说明数组有重复值
			// const newListLength=new Set(this.originSelectList.map(item=>item.id)).size;
			// const listLength=this.originSelectList.length;
			// if(listLength>newListLength){
			//   console.log("重复");
			// }
		},
		methods: {
			toScore() {
				// 查看名称和重量是否有空值
				let isEemptyVal = [];
				this.foodsList.forEach((item) => {
					isEemptyVal.push(item.nameVal == '', item.weightVal == '')
				})
				// 为true证明有空值，弹出提醒
				if (isEemptyVal.includes(true)) {
					uni.showToast({
						title: '未填写完，无法评分',
						icon: 'none',
						duration: 2000
					});
				} else {
					let totalScore = 0;
					this.foodsList.forEach((item) => {
						let num = Number(item.result);
						totalScore += num;
						console.log('solo分数', num)
					})
					totalScore = totalScore * 1000
					totalScore = this.fixed(totalScore, 4)
					console.log('分数', totalScore)

					if (isNaN(totalScore)) {
						totalScore = '无'
					}

					uni.switchTab({
						url: '/pages/score/index'
					})
					uni.setStorageSync("totalScore", totalScore); //赋值
				}
			},
			handleNumber(index, e) {
				let val = e.replace(/[^\d]/g, '');
				// this.foodsList[index].weightVal = val;
				this.$set(this.foodsList, index, {
					weightVal: val,
				});
			},
			inputWeight(index, e) {
				if (this.foodsList[index].weightVal) {
					let score = '';
					let caculateResult = '';
					if (!e.detail && Number(e)) {
						// 用真实数据替换C
						score = this.foodsList[index].expression.replace('C', e);
					} else if (e.detail.value && Number(e.detail.value)) {
						score = this.foodsList[index].expression.replace('C', e.detail.value);
					} else {
						uni.showToast({
							title: '请输入数字',
							icon: 'none',
							duration: 2000
						});
					}
					// eval('')实现四则运算
					// 得分为单个食物的
					caculateResult = this.fixed(this.caculateParse(this.tokenCode(score)), 4);
					if (this.foodsList[index].infla_score) {
						caculateResult = caculateResult * this.foodsList[index].infla_score
					}
					score = this.fixed(caculateResult, 4);
					this.foodsList[index].result = score;
				}
			},
			changeSelect(index, foodId) {
				// index为用户输入的第几个食物，foodId为食物id
				let foodObj = this.selectList.find(item => item.id == foodId)
				this.foodsList[index].nameVal = foodObj.title;
				this.foodsList[index].expression = foodObj.expression;
				this.foodsList[index].infla_score = foodObj.infla_score;

				// 已经写好重量，切换选项时调用方法
				this.inputWeight(index, this.foodsList[index].weightVal);

				// // 每一项的nameVal存储到nameArr中
				// const nameArr = this.foodsList.map(item => item.nameVal);
				// // 过滤已选的项目，在nameArr数组中的title
				// const currentList = this.originSelectList.filter(x => nameArr.indexOf(x.title) < 0);
				// this.selectList = currentList;
			},
			inputSelect(index, e) {
				this.inputCon = e;
			},
			closeSelect(index, e) {
				//下拉框关闭时，为false
				this.closeOptions = e;
				let isExist = this.selectList.find(item => item.title == this.inputCon)
				// 选择框里有值 且此值不为任意下拉项 且下拉框关闭时 弹出提醒
				if (this.inputCon && !isExist && !this.closeOptions) {
					uni.showToast({
						title: '无此食物，请重新选择',
						icon: 'none',
						duration: 2000
					});
				} else if (isExist) {
					this.changeSelect(index, isExist.id)
				}
				// else if (!this.inputCon && ){
				// this.foodsList[index].nameVal = ''
				console.log('3333', this.foodsList[index].nameVal)
				// }
			},
			fixed(num, bit) {
				// 四舍五入的方法，小数点后保留4位
				let dig = Math.pow(10, bit);
				return Math.round(num * dig) / dig;
			},
			addFoods() {
				this.showIcon = true;
				// this.foodsList.push({})
				let arrlength = this.foodsList.length;
				this.foodsList.splice(arrlength, 0, {
					key: arrlength,
					weightVal: '',
					nameVal: '',
					infla_score: 0,
					expression: '',
				})
			},
			deleteFoods(index) {
				// 问题：index传输正确，却在每次点击删除时，只删除最后一个元素
				// 原因：key的绑定问题，只是用下标来绑定每一个标签的key，而没有与数组中元素挂钩，
				// 因此当删除数组元素时，vue会采用一种叫做’就地更新‘的原则，将旁边的元素直接拿过来使用
				// 解决：使用:key="item.key"代替绑定下标
				this.foodsList.splice(index, 1)
				// delete this.foodsList[index]
				if (this.foodsList.length == 1) {
					this.showIcon = false;
				}
			},


			// 用JS编写简单的脚本语言(四则运算)
			// 参考：https://www.jianshu.com/p/c983f2df9d56 
			// 此方法计算得出公式的结果
			caculateParse(tokens, operator) {
				// 记录操作符
				let operatorStack = [];
				// 记录值
				let numStack = [];
				// 操作符与括号的优先级映射
				let precedence = {
					'(': -1,
					')': 0,
					'+': 1,
					'-': 1,
					'*': 2,
					'/': 2,
				};
				// 操作符
				let opts = Object.keys(precedence);
				// 操作符绑定计算函数
				operator = operator || {
					'+': (a, b) => a + b,
					'-': (a, b) => a - b,
					'*': (a, b) => a * b,
					'/': (a, b) => a / b,
				};
				// 判断是否允许执行计算
				function allow() {
					//  存在两个值栈 与 一个字符栈 
					return numStack.length >= 2 && operatorStack.length >= 1;
				}
				// 计算
				function count() {
					// 取出两个数值
					let e2 = numStack.pop();
					let e1 = numStack.pop();
					// 取出
					let op = operatorStack.pop();
					// 计算并保存结果值
					let fn = operator[op];
					if (fn) numStack.push(fn(e1, e2));
				}
				for (let i = 0; i < tokens.length; i++) {
					let token = tokens[i];
					if (token.value == '(') {
						operatorStack.push(token.value);
					} else if (token.type == "number") {
						numStack.push(Number(token.value));
					} else if (token.type == "operator" || token.type == "Punctuator") {
						// 允许计算 且 上一个优先级大于当前字符优先级 则先计算
						while (allow() && precedence[token.value] <= precedence[operatorStack.slice(-1)])
							count();
						// 追加
						// 如果当前符号是反括号 则删除上一个反括号
						if (token.value == ')')
							operatorStack.pop();
						else
							operatorStack.push(token.value);
					} else {
						throw new Error(`未知错误！！`);
					}
				}
				while (allow())
					count();
				return numStack.pop();
			},
			printErrStr(str, i) {
				let ss = "";
				for (let ii = 0; ii < str.length; ii++)
					ss = ss + (i == ii ? '^' : ' ');
				return str + '\n' + ss
			},
			// 此方法将公式的每个数字或者符号分隔在一个数组中
			// 格式过滤与语法检测
			tokenCode(str) {
				// 保存字符串解析结果值与描述信息
				let tokens = [];
				let token, currentChar;
				// 上一个记录的token值
				let prev = {};
				// 括号索引统计
				let bract = [];
				for (let i = 0; i < str.length; i++) {
					currentChar = str[i];
					if (currentChar == ' ') continue;
					if (/[0-9]/.test(currentChar)) {
						token = {
							type: 'number',
							value: currentChar,
						};
						// 是否存在小数点
						let pot = false;
						// 是否存在空格
						let space = false;
						for (i++; i < str.length; i++) {
							currentChar = str.charAt(i);
							if (/[0-9]/.test(currentChar)) {
								if (space) throw new Error(`数字格式不正确  \n索引 ${i},字符 ${currentChar} \n${this.printErrStr(str, i)}`);
								token.value += currentChar;
							} else if (currentChar === '.') {
								if (space) throw new Error(`数字格式不正确  \n索引 ${i},字符 ${currentChar} \n${this.printErrStr(str, i)}`);
								if (pot) throw new Error(`小数点格式不正确  \n索引 ${i},字符 ${currentChar} \n${this.printErrStr(str, i)}`);
								token.value += currentChar;
								pot = true;
							} else if (currentChar === ' ') {
								space = true;
							} else {
								i--;
								break;
							}
						}
						if (prev.prefix) {
							token.value = prev.value + token.value;
							tokens.pop();
						}
					} else if ('+-*/'.includes(currentChar)) {
						token = {
							type: 'operator',
							value: currentChar,
						};
						//
						if (currentChar == '-' && (((tokens.length == 0) || (i > 0 && ((prev.type == 'operator') || (prev.value ==
								'('))))) && !prev.prefix) {
							token.prefix = true;
						} else if ((i > 0 && prev.type != 'operator' && prev.value != '(') && !prev.prefix) {} else {
							throw new Error(`符号格式不正确 \n索引 ${i},字符 ${currentChar} \n ${this.printErrStr(str, i)}`);
						}
					} else if ((currentChar === '(' && prev.value != ')' && !prev.prefix)) {
						token = {
							type: 'Punctuator',
							value: currentChar,
						}
						bract.push(i);
					} else if ((currentChar === ')' && prev.value != '(' && !prev.prefix)) {
						token = {
							type: 'Punctuator',
							value: currentChar
						}
						if (bract.pop() == undefined) throw new Error(
							`括号不匹配  \n索引 ${i},字符 ${currentChar} \n ${this.printErrStr(str, i)}`);
					} else {
						throw new Error(`无法识别的字符 \n索引 ${i},字符 ${currentChar} \n ${this.printErrStr(str, i)}`);
					}
					tokens.push(token);
					prev = token;
				}
				if (bract.length > 0) throw new Error(`索引 ${bract[0]},字符 '${str[bract[0]]}', 括号不匹配 `);
				return tokens;
			}
		}
	}
</script>

<style scoped lang="scss">
	.record_box {
		padding: 30rpx 40rpx;
		border-top: 1px dashed #d8d8d8;

		.record_icon {
			position: absolute;
			right: 10px;
		}

		.name_box {
			margin-top: 15rpx;
			border-radius: 20px;
			background: #fff;
			padding: 13px 0 13px 0;
			box-shadow: 3px 3px 6px 1px #d3d3d3;
			display: flex;
			align-items: center;

			image {
				width: 130rpx;
				height: 110rpx;
				// display: inline-table;
			}
		}

		.weight_box {
			margin-top: 30rpx;
			border-radius: 20px;
			background: #fff;
			padding: 13px 0 13px 0;
			box-shadow: 3px 3px 6px 1px #d3d3d3;
			display: flex;
			align-items: center;

			image {
				width: 130rpx;
				height: 110rpx;
				// display: inline-table;
			}
		}

	}

	.btn_box {
		padding: 0rpx 40rpx;
	}

	.add_btn {
		margin-top: 50rpx;
		color: #000;
		border: 1px dashed #41a863;
		background-color: transparent;
	}

	.add_btn:hover {
		color: #000;
		border: 1px dashed #41a863;
		background-color: #fff;
	}

	.add_btn::after {
		border: none;
	}

	.btn::after {
		border: none;
	}

	.btn {
		margin-top: 40rpx;
		color: #fffae8;
		border: 1px solid #41a863;
		background-color: #41a863;
	}

	.btn:hover {
		color: #41a863;
		background-color: #fff;
		border: 1px solid #41a863;
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