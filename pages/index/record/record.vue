<template>
	<view class="record_box" v-for="(item,index) in foodsList" :key="index">
		<icon v-show="showIcon" class="record_icon" type="cancel" size="18" color="#9e9e9e" @click="deleteFoods(index)" />
		<view class="name_box">
			<image src="../../../static/home/record/name.png" mode=""></image>
			<view>食物名称：
				<cus-selects v-model="item.nameVal" :filterable='true' :searchType='1' placeholder="请输入关键字"
					@change="e=>changeSelect(index, e)" :valueType="alias" :data="selectList"></cus-selects>
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
					<view style="display: inline-block;margin-left: 5rpx;">g</view>
				</view>
			</view>
		</view>
	</view>


	<view class="">
		{{score}}
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
				alias: { //别名来代指一下
					label: 'title',
					value: 'id'
				},
				foodsList: [{
					weightVal: '',
					nameVal: '',
					expression: '',
				}],
				showIcon: false,
				scoreList: [],
			}
		},
		mounted() {
			// for (let i=0;i<2000;i++) {
			// 	this.selectList.push({
			// 		id:i,
			// 		title:'hahah'+i,
			// 	});
			// }
		},
		methods: {
			toScore() {
				// 所有得分相加
				let sum = 0;
				for (var i = 0; i < this.scoreList.length; i++) {
					sum += this.scoreList[i];
				}

				uni.switchTab({
					url: '/pages/score/index'
				})
			},
			inputWeight(index, e) {
				if (e.detail.value) {
					let score = this.foodsList[index].expression.replace('C', e.detail.value);
					// eval('')实现四则运算
					// 得分为单个食物的
					// let f = new Function('return '+ score)
					score = this.fixed(eval(score));
					// this.scoreList.push(score);

					console.log('----', Number(score))
				}
			},
			changeSelect(index, foodId) {
				// index为用户输入的第几个食物，e为食物id
				let foodObj = this.selectList.find(item => item.id == foodId)
				this.foodsList[index].nameVal = foodObj.title;
				this.foodsList[index].expression = foodObj.expression;
				console.log('1111', this.foodsList[index].expression) //这里返回的是nameVal值
			},
			fixed(num) {
				// 四舍五入的方法，小数点后保留三位
				let dig = Math.pow(10, 4);
				return Math.round(num * dig) / dig;
			},
			addFoods() {
				this.showIcon = true;
				this.foodsList.push({
					weightVal: '',
					nameVal: '',
					expression: '',
				})
			},
			deleteFoods(index) {
				this.foodsList.splice(index, 1);
				if (this.foodsList.length == 1) {
					this.showIcon = false;
				}
			},
			calculateFormula(tokens, operator) {
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
			                    if (space) throw new Error(`数字格式不正确  \n索引 ${i},字符 ${currentChar} \n${printErrStr(str, i)}`);
			                    token.value += currentChar;
			                } else if (currentChar === '.') {
			                    if (space) throw new Error(`数字格式不正确  \n索引 ${i},字符 ${currentChar} \n${printErrStr(str, i)}`);
			                    if (pot) throw new Error(`小数点格式不正确  \n索引 ${i},字符 ${currentChar} \n${printErrStr(str, i)}`);
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
			            if (currentChar == '-' && (((tokens.length == 0) || (i > 0 && ((prev.type == 'operator') || (prev.value == '('))))) && !prev.prefix) {
			                token.prefix = true;
			            } else if ((i > 0 && prev.type != 'operator' && prev.value != '(') && !prev.prefix) {
			            } else {
			                throw new Error(`符号格式不正确 \n索引 ${i},字符 ${currentChar} \n ${printErrStr(str, i)}`);
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
			            if (bract.pop() == undefined) throw new Error(`括号不匹配  \n索引 ${i},字符 ${currentChar} \n ${printErrStr(str, i)}`);
			        } else {
			            throw new Error(`无法识别的字符 \n索引 ${i},字符 ${currentChar} \n ${printErrStr(str, i)}`);
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
		border: 1px dashed #64f089;
		background-color: transparent;
	}

	.add_btn:hover {
		color: #000;
		border: 1px dashed #64f089;
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