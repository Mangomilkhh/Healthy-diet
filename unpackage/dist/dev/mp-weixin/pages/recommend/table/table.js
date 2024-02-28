"use strict";
const common_vendor = require("../../../common/vendor.js");
const recommendedFood = [
  {
    foodType: "grains",
    foodList: [
      {
        recommend: "甘薯（红心）",
        suitable: "梗米饭（蒸）",
        less: "稻米"
      },
      {
        recommend: "土豆粉",
        suitable: "小麦粉（代表值）",
        less: "梗米"
      },
      {
        recommend: "土豆，洋芋 ",
        suitable: "面条（代表值） ",
        less: "河粉 "
      },
      {
        recommend: "荞麦面 ",
        suitable: "莜麦面 ",
        less: "油饼 "
      },
      {
        recommend: "玉米（鲜） ",
        suitable: "挂面 ",
        less: "油条 "
      },
      {
        recommend: "燕麦 ",
        suitable: "意大利面,通心面 ",
        less: "血糯米 "
      },
      {
        recommend: "黑米  ",
        suitable: "小米（黄） ",
        less: "龙须面（素） "
      },
      {
        recommend: "玉米面（黄）  ",
        suitable: "馒头 ",
        less: "粉丝 "
      },
      {
        recommend: "燕麦 ",
        suitable: "籼糯米 ",
        less: "粉条 "
      },
      {
        recommend: "马铃薯（蒸）  ",
        suitable: "油面筋 ",
        less: "玉米淀粉 "
      },
      {
        recommend: "马铃薯（煮） ",
        suitable: "籼米粥 ",
        less: "米粉 "
      },
      {
        recommend: "薏米  ",
        suitable: "籼米饭（蒸） ",
        less: "豌豆粉丝 "
      },
      {
        recommend: "水面筋 ",
        suitable: "烧饼（加糖） ",
        less: "淀粉（马铃薯）  "
      },
      {
        recommend: "烙饼 ",
        suitable: "花卷  ",
        less: "淀粉（甘薯） "
      }
    ]
  },
  {
    foodType: "vegetables",
    foodList: [
      {
        recommend: "小白菜[青菜]",
        suitable: "莴笋（鲜）",
        less: "花菜（白色）"
      },
      {
        recommend: "芥菜（大叶，鲜）[盖菜，芥蓝]",
        suitable: "甜椒[灯笼椒，柿子椒]",
        less: "豌豆（带荚，鲜）"
      },
      {
        recommend: "菠菜（鲜）",
        suitable: "丝瓜",
        less: "西葫芦"
      },
      {
        recommend: "空心菜",
        suitable: "蒜苗（绿色）",
        less: "绿豆芽"
      },
      {
        recommend: "胡萝卜（黄）",
        suitable: "芸豆（鲜）",
        less: "冬瓜"
      },
      {
        recommend: "荠菜（鲜）",
        suitable: "西兰花",
        less: "菜瓜"
      },
      {
        recommend: "油菜",
        suitable: "四季豆（菜豆）",
        less: "大白菜（白口）"
      },
      {
        recommend: "油麦菜",
        suitable: "蒜薹（圆）",
        less: "佛手瓜"
      },
      {
        recommend: "茼蒿（鲜）",
        suitable: "娃娃菜",
        less: "酸菜"
      },
      {
        recommend: "苋菜",
        suitable: "豆角",
        less: "茭白（鲜）"
      },
      {
        recommend: "鸡毛菜",
        suitable: "苦瓜（鲜）",
        less: "白萝卜（圆）"
      },
      {
        recommend: "南瓜（鲜）",
        suitable: "黄瓜(鲜)",
        less: "毛豆（鲜）"
      },
      {
        recommend: "香菜（鲜）",
        suitable: "辣椒（青，尖）",
        less: "白瓜"
      },
      {
        recommend: "番茄（西红柿）",
        suitable: "贡菜（苔菜）",
        less: "黄豆芽"
      },
      {
        recommend: "豇豆",
        suitable: "圆白菜",
        less: "鱼腥草（根）"
      },
      {
        recommend: "荷兰豆",
        suitable: "金瓜",
        less: "红萝卜"
      },
      {
        recommend: "芹菜茎",
        suitable: "大白菜（青口）",
        less: "洋葱（鲜）"
      },
      {
        recommend: "樱桃番茄（小西红柿）",
        suitable: "青萝卜",
        less: "藕"
      },
      {
        recommend: "香椿（鲜）",
        suitable: "葱（小葱，鲜）",
        less: "荸荠（鲜）"
      },
      {
        recommend: "韭薹",
        suitable: "迷你黄瓜",
        less: "菱角（老，鲜）"
      },
      {
        recommend: "芥菜（鲜）",
        suitable: "生菜",
        less: "甜菜根"
      },
      {
        recommend: "水萝卜",
        suitable: "蚕豆（鲜）",
        less: "山药（鲜）"
      },
      {
        recommend: "蒜黄（黄色）",
        suitable: "扁豆",
        less: "大蒜"
      },
      {
        recommend: "秋葵",
        suitable: "茄子",
        less: "土豆，地瓜"
      },
      {
        recommend: "韭黄",
        suitable: "红心萝卜",
        less: "竹笋（鲜）"
      }
    ]
  },
  {
    foodType: "fruits",
    foodList: [
      {
        recommend: "橘（小叶橘）",
        suitable: "杨梅",
        less: "梨（代表值）"
      },
      {
        recommend: "哈密瓜",
        suitable: "黄桃",
        less: "荔枝"
      },
      {
        recommend: "芒果",
        suitable: "山楂",
        less: "火龙果"
      },
      {
        recommend: "杏",
        suitable: "柠檬",
        less: "百香果"
      },
      {
        recommend: "西瓜（代表值）",
        suitable: "马奶子葡萄,青提",
        less: "榴莲"
      },
      {
        recommend: "樱桃",
        suitable: "柿饼",
        less: "菠萝蜜"
      },
      {
        recommend: "李子",
        suitable: "葡萄（代表值）",
        less: "西梅"
      },
      {
        recommend: "橙",
        suitable: "苹果（代表值）",
        less: "石榴（代表值）"
      },
      {
        recommend: "枣（鲜）",
        suitable: "菠萝[凤梨]",
        less: "蛇果"
      },
      {
        recommend: "中华猕猴桃",
        suitable: "香蕉[芭焦]",
        less: "枇杷"
      },
      {
        recommend: "草莓",
        suitable: "羊角蜜",
        less: "蓝莓"
      },
      {
        recommend: "柿",
        suitable: "桃（代表值）",
        less: "山竹"
      },
      {
        recommend: "甜瓜[香瓜]",
        suitable: "柚",
        less: "枣（干）"
      },
      {
        recommend: "",
        suitable: "桑葚（代表值）",
        less: "梅[青梅]"
      }
    ]
  },
  {
    foodType: "meat",
    foodList: [
      {
        recommend: "牛肝",
        suitable: "火腿肠",
        less: "猪大排"
      },
      {
        recommend: "猪肝（新增加）",
        suitable: "羊肉（熟）",
        less: "牛肉（背部肉）"
      },
      {
        recommend: "羊肉汤",
        suitable: "猪血",
        less: "猪蹄（熟）"
      },
      {
        recommend: "猪肾（fat8g）",
        suitable: "香肠",
        less: "猪大肠"
      },
      {
        recommend: "牛肉（里脊肉）[牛柳]",
        suitable: "方腿",
        less: "牛肉（胸部肉，牛小排）"
      },
      {
        recommend: "腊肉（生，fat49g）",
        suitable: "午餐肉",
        less: "猪耳"
      },
      {
        recommend: "猪肉（里脊）",
        suitable: "牛肚",
        less: "猪肚"
      },
      {
        recommend: "牛肉（代表值，瘦，fat3g）",
        suitable: "牛蹄筋（熟）",
        less: "猪舌[口条]"
      },
      {
        recommend: "羊蹄筋（泡发）",
        suitable: "猪五花（软）",
        less: "牛（大）肠"
      },
      {
        recommend: "牛肉干",
        suitable: "贡菜鲜肉丸",
        less: "猪肺"
      },
      {
        recommend: "酱牛肉",
        suitable: "红烧肉",
        less: "羊肉串（烤）"
      },
      {
        recommend: "牛百叶（黑）",
        suitable: "腊肠（熟）",
        less: "猪脾"
      },
      {
        recommend: "撒尿牛丸",
        suitable: "猪肘",
        less: "猪脑"
      }
    ]
  },
  {
    foodType: "eggs",
    foodList: [
      {
        recommend: "鸭蛋黄",
        suitable: "鸡蛋（煮）",
        less: "鸡蛋白"
      },
      {
        recommend: "鹌鹑蛋",
        suitable: "鸡蛋（代表值）",
        less: "鸡蛋黄"
      },
      {
        recommend: "荷包蛋（油煎）",
        suitable: "松花蛋（鸭蛋）",
        less: "咸鸭蛋（煮）"
      },
      {
        recommend: "荷包蛋（煮）",
        suitable: "",
        less: ""
      }
    ]
  },
  {
    foodType: "milks",
    foodList: [
      {
        recommend: "调制乳（全脂，强化VA、VD）",
        suitable: "全脂奶粉（代表值）",
        less: "酸奶（代表值，全脂）"
      },
      {
        recommend: "低脂奶粉（代表值）",
        suitable: "纯牛奶（代表值，全脂）",
        less: "酸奶（高蛋白）"
      },
      {
        recommend: "纯牛奶（代表值，脱脂）",
        suitable: "调制乳（全脂，旺仔复原乳牛奶）",
        less: "奶油"
      },
      {
        recommend: "羊乳",
        suitable: "奶酪[干酪]",
        less: "酸奶（果粒）"
      },
      {
        recommend: "纯牛奶（代表值，低脂）",
        suitable: "酸奶（低脂）",
        less: "酸奶（脱脂）"
      },
      {
        recommend: "鲜牛奶（代表值，全脂）",
        suitable: "调制乳（低脂，强化锌钙）",
        less: ""
      }
    ]
  },
  {
    foodType: "poultry",
    foodList: [
      {
        recommend: "鹅肝",
        suitable: "鸭（代表值）",
        less: "鸭翅"
      },
      {
        recommend: "鸡杂",
        suitable: "鸭心",
        less: "炸鸡块[肯德基]"
      },
      {
        recommend: "鸡心",
        suitable: "北京烤鸭",
        less: "鸭掌"
      },
      {
        recommend: "烤鸡",
        suitable: "鸡胗",
        less: "鸭舌"
      },
      {
        recommend: "鸡（代表值）",
        suitable: "鸡翅",
        less: "酱鸭"
      },
      {
        recommend: "鸡血",
        suitable: "盐水鸭（熟）",
        less: "鸭肫（胗）"
      },
      {
        recommend: "鸡胸脯肉",
        suitable: "鸭腿",
        less: "瓦罐鸡汤（汤）"
      },
      {
        recommend: "鸡腿",
        suitable: "鸡爪",
        less: "烧鹅"
      },
      {
        recommend: "瓦罐鸡汤（肉）",
        suitable: "鸭胸脯肉",
        less: "鸭肠"
      },
      {
        recommend: "",
        suitable: "",
        less: "鸭血[白鸭]"
      }
    ]
  },
  {
    foodType: "nuts",
    foodList: [
      {
        recommend: "葵花子（熟，原味）",
        suitable: "南瓜子（炒）",
        less: "杏仁（熟，去壳）"
      },
      {
        recommend: "腰果（熟）",
        suitable: "莲子（干）",
        less: "核桃（干）"
      },
      {
        recommend: "西瓜子（炒）",
        suitable: "芝麻（黑）",
        less: "花生仁（炒）"
      },
      {
        recommend: "葵花子（熟，奶油香）",
        suitable: "松子（熟）",
        less: "开心果（熟）"
      },
      {
        recommend: "",
        suitable: "芝麻（白）",
        less: ""
      }
    ]
  },
  {
    foodType: "oils",
    foodList: [
      {
        recommend: "辣椒油",
        suitable: "豆油",
        less: "羊油"
      },
      {
        recommend: "牛油",
        suitable: "玉米油",
        less: "葵花籽油"
      },
      {
        recommend: "猪油（炼）",
        suitable: "花生油",
        less: "芝麻油"
      },
      {
        recommend: "",
        suitable: "菜籽油",
        less: ""
      }
    ]
  }
];
const _sfc_main = {
  data() {
    return {
      searchVal: "",
      // 每页数据量
      pageSize: 100,
      // 当前页
      pageCurrent: 1,
      // 数据总量
      total: 0,
      loading: false,
      tableData: recommendedFood,
      foodDatas: []
    };
  },
  // 目标表格页面接收数据
  onLoad(options) {
    const data = JSON.parse(decodeURIComponent(options.data));
    common_vendor.index.setNavigationBarTitle({
      title: data.table_title
    });
    this.tableData.forEach((item) => {
      if (item.foodType == data.navigator) {
        this.foodDatas = item.foodList;
      }
    });
  },
  methods: {
    // 搜索
    // search() {
    // 	this.getData(1, this.searchVal)
    // },
    // 获取数据
    // getData(pageCurrent, value = '') {
    // 	this.loading = true
    // 	this.pageCurrent = pageCurrent
    // 	this.request({
    // 		pageSize: this.pageSize,
    // 		pageCurrent: pageCurrent,
    // 		value: value,
    // 		success: res => {
    // 			// console.log('data', res);
    // 			this.tableData = res.data
    // 			this.total = res.total
    // 			this.loading = false
    // 		}
    // 	})
    // },
    // 伪request请求
    // request(options) {
    // 	const { pageSize, pageCurrent, success, value } = options
    // 	let total = tableData.length
    // 	let data = tableData.filter((item, index) => {
    // 		const idx = index - (pageCurrent - 1) * pageSize
    // 		return idx < pageSize && idx >= 0
    // 	})
    // 	if (value) {
    // 		data = []
    // 		tableData.forEach(item => {
    // 			if (item.name.indexOf(value) !== -1) {
    // 				data.push(item)
    // 			}
    // 		})
    // 		total = data.length
    // 	}
    // 	setTimeout(() => {
    // 		typeof success === 'function' &&
    // 			success({
    // 				data: data,
    // 				total: total
    // 			})
    // 	}, 500)
    // }
  }
};
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      align: "center"
    }),
    b: common_vendor.p({
      align: "center"
    }),
    c: common_vendor.p({
      align: "center"
    }),
    d: common_vendor.f($data.foodDatas, (item, index, i0) => {
      return {
        a: common_vendor.t(item.recommend),
        b: "7d4d96db-6-" + i0 + "," + ("7d4d96db-5-" + i0),
        c: common_vendor.t(item.suitable),
        d: "7d4d96db-7-" + i0 + "," + ("7d4d96db-5-" + i0),
        e: common_vendor.t(item.less),
        f: "7d4d96db-8-" + i0 + "," + ("7d4d96db-5-" + i0),
        g: index,
        h: "7d4d96db-5-" + i0 + ",7d4d96db-0"
      };
    }),
    e: common_vendor.sr("table", "7d4d96db-0"),
    f: common_vendor.p({
      loading: $data.loading,
      border: true,
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/recommend/table/table.vue"]]);
wx.createPage(MiniProgramPage);
