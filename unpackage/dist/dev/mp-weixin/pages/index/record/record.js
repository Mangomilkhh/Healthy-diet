"use strict";
const common_vendor = require("../../../common/vendor.js");
const foods = [
  {
    id: 1,
    title: "紫红糯米（血糯米）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 2,
    title: "粉皮",
    group: 1,
    expression: "C*(61/100)/1000"
  },
  {
    id: 4,
    title: "水面筋",
    group: 1,
    expression: "C*(141/100)/1000"
  },
  {
    id: 5,
    title: "粳米粥",
    group: 1,
    expression: "C*(46/100)/1000"
  },
  {
    id: 6,
    title: "粳米（标一）",
    group: 1,
    expression: "C*(343/100)/1000"
  },
  {
    id: 7,
    title: "粉条",
    group: 1,
    expression: "C*(337/100)/1000"
  },
  {
    id: 8,
    title: "魔芋精粉",
    group: 1,
    expression: "C*(37/100)/1000"
  },
  {
    id: 9,
    title: "蒸粳米饭",
    group: 1,
    expression: "C*(117/100)/1000"
  },
  {
    id: 10,
    title: "粉丝",
    group: 1,
    expression: "C*(335/100)/1000"
  },
  {
    id: 11,
    title: "晚籼（标二）",
    group: 1,
    expression: "C*(343/100)/1000"
  },
  {
    id: 12,
    title: "玉米淀粉",
    group: 1,
    expression: "C*(345/100)/1000"
  },
  {
    id: 13,
    title: "早籼（标二）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 14,
    title: "藕粉",
    group: 1,
    expression: "C*(351/100)/1000"
  },
  {
    id: 15,
    title: "甘薯粉",
    group: 1,
    expression: "C*(336/100)/1000"
  },
  {
    id: 16,
    title: "糯米（江米）",
    group: 1,
    expression: "C*(348/100)/1000"
  },
  {
    id: 17,
    title: "籼米饭（蒸）",
    group: 1,
    expression: "C*(114/100)/1000"
  },
  {
    id: 18,
    title: "晚籼（标一）",
    group: 1,
    expression: "C*(345/100)/1000"
  },
  {
    id: 19,
    title: "婴幼儿米粉（胡萝卜，雀巢）",
    group: 1,
    expression: "C*(148/100)/1000"
  },
  {
    id: 20,
    title: "年糕",
    group: 1,
    expression: "C*(154/100)/1000"
  },
  {
    id: 21,
    title: "甘薯片",
    group: 1,
    expression: "C*(340/100)/1000"
  },
  {
    id: 22,
    title: "蚕豆淀粉",
    group: 1,
    expression: "C*(341/100)/1000"
  },
  {
    id: 23,
    title: "龙须面",
    group: 1,
    expression: "C*(345/100)/1000"
  },
  {
    id: 24,
    title: "稻米",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 25,
    title: "龙须面（素）",
    group: 1,
    expression: "C*(356/100)/1000"
  },
  {
    id: 26,
    title: "河粉",
    group: 1,
    expression: "C*(356/100)/1000"
  },
  {
    id: 27,
    title: "淀粉（大米）",
    group: 1,
    expression: "C*(366/100)/1000"
  },
  {
    id: 28,
    title: "豌豆粉丝",
    group: 1,
    expression: "C*(367/100)/1000"
  },
  {
    id: 29,
    title: "馒头（富强粉）",
    group: 1,
    expression: "C*(208/100)/1000"
  },
  {
    id: 30,
    title: "花卷",
    group: 1,
    expression: "C*(211/100)/1000"
  },
  {
    id: 31,
    title: "籼米粉（排米粉）",
    group: 1,
    expression: "C*(355/100)/1000"
  },
  {
    id: 32,
    title: "面条（富强粉，煮）",
    group: 1,
    expression: "C*(109/100)/1000"
  },
  {
    id: 33,
    title: "馒头",
    group: 1,
    expression: "C*(221/100)/1000"
  },
  {
    id: 34,
    title: "蒸米饭",
    group: 1,
    expression: "C*(116/100)/1000"
  },
  {
    id: 35,
    title: "标准粉烙饼",
    group: 1,
    expression: "C*(255/100)/1000"
  },
  {
    id: 36,
    title: "粳米（特等）",
    group: 1,
    expression: "C*(334/100)/1000"
  },
  {
    id: 37,
    title: "空锅饼",
    group: 1,
    expression: "C*(277/100)/1000"
  },
  {
    id: 38,
    title: "籼米（优标）",
    group: 1,
    expression: "C*(334/100)/1000"
  },
  {
    id: 39,
    title: "面条（标准粉，切面）",
    group: 1,
    expression: "C*(280/100)/1000"
  },
  {
    id: 40,
    title: "小麦粉（标准粉）",
    group: 1,
    expression: "C*(344/100)/1000"
  },
  {
    id: 41,
    title: "面条（富强粉，切面）",
    group: 1,
    expression: "C*(285/100)/1000"
  },
  {
    id: 42,
    title: "糯米（优糯米）",
    group: 1,
    expression: "C*(344/100)/1000"
  },
  {
    id: 43,
    title: "米粉",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 44,
    title: "挂面（X）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 45,
    title: "籼米（标一）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 46,
    title: "香大米",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 47,
    title: "粳米（标二）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 48,
    title: "甘薯粉【地瓜粉】",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 49,
    title: "籼米（标准）",
    group: 1,
    expression: "C*(347/100)/1000"
  },
  {
    id: 50,
    title: "挂面（精致龙须面）",
    group: 1,
    expression: "C*(347/100)/1000"
  },
  {
    id: 51,
    title: "小麦粉（特二粉）",
    group: 1,
    expression: "C*(349/100)/1000"
  },
  {
    id: 52,
    title: "加糖烧饼",
    group: 1,
    expression: "C*(293/100)/1000"
  },
  {
    id: 53,
    title: "油面筋",
    group: 1,
    expression: "C*(490/100)/1000"
  },
  {
    id: 54,
    title: "籼米米粉",
    group: 1,
    expression: "C*(350/100)/1000"
  },
  {
    id: 55,
    title: "面条（X）",
    group: 1,
    expression: "C*(284/100)/1000"
  },
  {
    id: 56,
    title: "早籼",
    group: 1,
    expression: "C*(359/100)/1000"
  },
  {
    id: 57,
    title: "早糯谷",
    group: 1,
    expression: "C*(334/100)/1000"
  },
  {
    id: 58,
    title: "馒头（标准粉）",
    group: 1,
    expression: "C*(233/100)/1000"
  },
  {
    id: 59,
    title: "小麦胚粉",
    group: 1,
    expression: "C*(392/100)/1000"
  },
  {
    id: 60,
    title: "淀粉(马铃薯)",
    group: 1,
    expression: "C*(332/100)/1000"
  },
  {
    id: 61,
    title: "凉面",
    group: 1,
    expression: "C*(167/100)/1000"
  },
  {
    id: 62,
    title: "挂面（标准粉）",
    group: 1,
    expression: "C*(344/100)/1000"
  },
  {
    id: 63,
    title: "籼米粉（干，细）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 64,
    title: "粳米（标三）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 65,
    title: "粳米（标四）",
    group: 1,
    expression: "C*(346/100)/1000"
  },
  {
    id: 66,
    title: "早籼（标一）",
    group: 1,
    expression: "C*(334/100)/1000"
  },
  {
    id: 67,
    title: "面条（干切面）",
    group: 1,
    expression: "C*(355/100)/1000"
  },
  {
    id: 68,
    title: "面条（特粉，切面）",
    group: 1,
    expression: "C*(286/100)/1000"
  },
  {
    id: 69,
    title: "晚籼（特等）",
    group: 1,
    expression: "C*(342/100)/1000"
  },
  {
    id: 70,
    title: "淀粉（小麦）",
    group: 1,
    expression: "C*(351/100)/1000"
  },
  {
    id: 71,
    title: "糯米（籼糯米）",
    group: 1,
    expression: "C*(352/100)/1000"
  },
  {
    id: 72,
    title: "小麦粉（富强粉，特一等）",
    group: 1,
    expression: "C*(350/100)/1000"
  },
  {
    id: 73,
    title: "五谷香",
    group: 1,
    expression: "C*(377/100)/1000"
  },
  {
    id: 74,
    title: "通心粉",
    group: 1,
    expression: "C*(350/100)/1000"
  },
  {
    id: 75,
    title: "早籼（特等）",
    group: 1,
    expression: "C*(334/100)/1000"
  },
  {
    id: 76,
    title: "挂面（富强粉）",
    group: 1,
    expression: "C*(347/100)/1000"
  },
  {
    id: 77,
    title: "马铃薯粉",
    group: 1,
    expression: "C*(337/100)/1000"
  },
  {
    id: 78,
    title: "甜玉米粒",
    group: 2,
    expression: "C*(300/100)/1000"
  },
  {
    id: 79,
    title: "大麦",
    group: 2,
    expression: "C*(307/100)/1000"
  },
  {
    id: 80,
    title: "黑米",
    group: 2,
    expression: "C*(333/100)/1000"
  },
  {
    id: 81,
    title: "薏米",
    group: 2,
    expression: "C*(357/100)/1000"
  },
  {
    id: 82,
    title: "黄米",
    group: 2,
    expression: "C*(342/100)/1000"
  },
  {
    id: 83,
    title: "大黄米",
    group: 2,
    expression: "C*(349/100)/1000"
  },
  {
    id: 84,
    title: "荞麦",
    group: 2,
    expression: "C*(324/100)/1000"
  },
  {
    id: 85,
    title: "小米粥",
    group: 2,
    expression: "C*(46/100)/1000"
  },
  {
    id: 86,
    title: "小米",
    group: 2,
    expression: "C*(358/100)/1000"
  },
  {
    id: 87,
    title: "玉米面（白）",
    group: 2,
    expression: "C*(340/100)/1000"
  },
  {
    id: 88,
    title: "黄玉米面",
    group: 2,
    expression: "C*(341/100)/1000"
  },
  {
    id: 89,
    title: "高粱米",
    group: 2,
    expression: "C*(351/100)/1000"
  },
  {
    id: 90,
    title: "鲜玉米",
    group: 2,
    expression: "C*(106/100)/1000"
  },
  {
    id: 91,
    title: "黑大麦",
    group: 2,
    expression: "C*(297/100)/1000"
  },
  {
    id: 92,
    title: "苦荞麦粉",
    group: 2,
    expression: "C*(152/100)/1000"
  },
  {
    id: 93,
    title: "玉米糁（黄）",
    group: 2,
    expression: "C*(347/100)/1000"
  },
  {
    id: 94,
    title: "肚里黄",
    group: 2,
    expression: "C*(321/100)/1000"
  },
  {
    id: 95,
    title: "玉米（黄，干）",
    group: 2,
    expression: "C*(335/100)/1000"
  },
  {
    id: 96,
    title: "小麦",
    group: 2,
    expression: "C*(317/100)/1000"
  },
  {
    id: 97,
    title: "小米面",
    group: 2,
    expression: "C*(356/100)/1000"
  },
  {
    id: 99,
    title: "麸皮",
    group: 2,
    expression: "C*(220/100)/1000"
  },
  {
    id: 100,
    title: "玉米面面条",
    group: 2,
    expression: "C*(348/100)/1000"
  },
  {
    id: 101,
    title: "燕麦片",
    group: 2,
    expression: "C*(367/100)/1000"
  },
  {
    id: 102,
    title: "荞麦面",
    group: 2,
    expression: "C*(329/100)/1000"
  },
  {
    id: 103,
    title: "玉米（白，干）",
    group: 2,
    expression: "C*(336/100)/1000"
  },
  {
    id: 104,
    title: "高粱面面条",
    group: 2,
    expression: "C*(304/100)/1000"
  },
  {
    id: 105,
    title: "豆汁",
    group: 3,
    expression: "C*(10/100)/1000"
  },
  {
    id: 106,
    title: "内酯豆腐",
    group: 3,
    expression: "C*(49/100)/1000"
  },
  {
    id: 107,
    title: "豆腐干（蒲包干）",
    group: 3,
    expression: "C*(135/100)/1000"
  },
  {
    id: 108,
    title: "豆腐脑（老豆腐）",
    group: 3,
    expression: "C*(15/100)/1000"
  },
  {
    id: 109,
    title: "豆腐干（香干）",
    group: 3,
    expression: "C*(151/100)/1000"
  },
  {
    id: 110,
    title: "小豆粥",
    group: 3,
    expression: "C*(61/100)/1000"
  },
  {
    id: 111,
    title: "豆腐丝（干）",
    group: 3,
    expression: "C*(451/100)/1000"
  },
  {
    id: 112,
    title: "素鸡",
    group: 3,
    expression: "C*(192/100)/1000"
  },
  {
    id: 113,
    title: "豆腐",
    group: 3,
    expression: "C*(81/100)/1000"
  },
  {
    id: 114,
    title: "豆浆",
    group: 3,
    expression: "C*(14/100)/1000"
  },
  {
    id: 115,
    title: "豆腐干（臭干）",
    group: 3,
    expression: "C*(99/100)/1000"
  },
  {
    id: 116,
    title: "煮豌豆",
    group: 3,
    expression: "C*(107/100)/1000"
  },
  {
    id: 117,
    title: "豆腐干（X）",
    group: 3,
    expression: "C*(140/100)/1000"
  },
  {
    id: 118,
    title: "酸豆奶",
    group: 3,
    expression: "C*(67/100)/1000"
  },
  {
    id: 119,
    title: "豆腐干（菜干）",
    group: 3,
    expression: "C*(140/100)/1000"
  },
  {
    id: 120,
    title: "豆奶",
    group: 3,
    expression: "C*(30/100)/1000"
  },
  {
    id: 121,
    title: "黑豆",
    group: 3,
    expression: "C*(381/100)/1000"
  },
  {
    id: 122,
    title: "豆粕（大豆蛋白）",
    group: 3,
    expression: "C*(120/100)/1000"
  },
  {
    id: 123,
    title: "甜豆浆",
    group: 3,
    expression: "C*(33/100)/1000"
  },
  {
    id: 124,
    title: "蚕豆",
    group: 3,
    expression: "C*(335/100)/1000"
  },
  {
    id: 125,
    title: "烤麸",
    group: 3,
    expression: "C*(121/100)/1000"
  },
  {
    id: 126,
    title: "蚕豆（去皮）",
    group: 3,
    expression: "C*(342/100)/1000"
  },
  {
    id: 127,
    title: "豆腐卷",
    group: 3,
    expression: "C*(201/100)/1000"
  },
  {
    id: 128,
    title: "赤小豆",
    group: 3,
    expression: "C*(309/100)/1000"
  },
  {
    id: 129,
    title: "豌豆",
    group: 3,
    expression: "C*(313/100)/1000"
  },
  {
    id: 130,
    title: "豆沙",
    group: 3,
    expression: "C*(243/100)/1000"
  },
  {
    id: 131,
    title: "油豆腐",
    group: 3,
    expression: "C*(244/100)/1000"
  },
  {
    id: 133,
    title: "素火腿",
    group: 3,
    expression: "C*(211/100)/1000"
  },
  {
    id: 134,
    title: "黄豆",
    group: 3,
    expression: "C*(359/100)/1000"
  },
  {
    id: 135,
    title: "南豆腐",
    group: 3,
    expression: "C*(57/100)/1000"
  },
  {
    id: 136,
    title: "豆腐干（酱油干）",
    group: 3,
    expression: "C*(156/100)/1000"
  },
  {
    id: 137,
    title: "豆腐脑",
    group: 3,
    expression: "C*(47/100)/1000"
  },
  {
    id: 138,
    title: "花豆（紫）",
    group: 3,
    expression: "C*(315/100)/1000"
  },
  {
    id: 139,
    title: "豆奶粉（维维牌）",
    group: 3,
    expression: "C*(419/100)/1000"
  },
  {
    id: 140,
    title: "豆浆粉",
    group: 3,
    expression: "C*(422/100)/1000"
  },
  {
    id: 141,
    title: "豆奶粉",
    group: 3,
    expression: "C*(423/100)/1000"
  },
  {
    id: 142,
    title: "带皮蚕豆",
    group: 3,
    expression: "C*(141/100)/1000"
  },
  {
    id: 143,
    title: "北豆腐",
    group: 3,
    expression: "C*(98/100)/1000"
  },
  {
    id: 144,
    title: "绿豆",
    group: 3,
    expression: "C*(316/100)/1000"
  },
  {
    id: 146,
    title: "豆腐干（小香干）",
    group: 3,
    expression: "C*(174/100)/1000"
  },
  {
    id: 147,
    title: "扁豆",
    group: 3,
    expression: "C*(326/100)/1000"
  },
  {
    id: 148,
    title: "青豆",
    group: 3,
    expression: "C*(373/100)/1000"
  },
  {
    id: 149,
    title: "豆腐花",
    group: 3,
    expression: "C*(401/100)/1000"
  },
  {
    id: 150,
    title: "豆腐丝",
    group: 3,
    expression: "C*(201/100)/1000"
  },
  {
    id: 151,
    title: "千张",
    group: 3,
    expression: "C*(260/100)/1000"
  },
  {
    id: 152,
    title: "豆腐干（卤干）",
    group: 3,
    expression: "C*(336/100)/1000"
  },
  {
    id: 153,
    title: "豆腐丝（油）",
    group: 3,
    expression: "C*(300/100)/1000"
  },
  {
    id: 154,
    title: "红豆馅",
    group: 3,
    expression: "C*(240/100)/1000"
  },
  {
    id: 155,
    title: "豆奶粉（大磨牌）",
    group: 3,
    expression: "C*(253/100)/1000"
  },
  {
    id: 156,
    title: "豆腐干（熏干）",
    group: 3,
    expression: "C*(153/100)/1000"
  },
  {
    id: 157,
    title: "芸豆（杂，带皮）",
    group: 3,
    expression: "C*(373/100)/1000"
  },
  {
    id: 158,
    title: "扁豆（白）",
    group: 3,
    expression: "C*(257/100)/1000"
  },
  {
    id: 159,
    title: "豆粕",
    group: 3,
    expression: "C*(310/100)/1000"
  },
  {
    id: 160,
    title: "芸豆（红）",
    group: 3,
    expression: "C*(314/100)/1000"
  },
  {
    id: 161,
    title: "眉豆",
    group: 3,
    expression: "C*(322/100)/1000"
  },
  {
    id: 162,
    title: "豇豆",
    group: 3,
    expression: "C*(322/100)/1000"
  },
  {
    id: 163,
    title: "绿豆面",
    group: 3,
    expression: "C*(330/100)/1000"
  },
  {
    id: 164,
    title: "芸豆（虎皮）",
    group: 3,
    expression: "C*(334/100)/1000"
  },
  {
    id: 165,
    title: "芸豆（白）",
    group: 3,
    expression: "C*(296/100)/1000"
  },
  {
    id: 166,
    title: "腐竹",
    group: 3,
    expression: "C*(459/100)/1000"
  },
  {
    id: 167,
    title: "花豆（红）",
    group: 3,
    expression: "C*(317/100)/1000"
  },
  {
    id: 168,
    title: "豆腐皮",
    group: 3,
    expression: "C*(153/100)/1000"
  },
  {
    id: 169,
    title: "黄豆粉",
    group: 3,
    expression: "C*(418/100)/1000"
  },
  {
    id: 170,
    title: "豇豆（紫）",
    group: 3,
    expression: "C*(373/100)/1000"
  },
  {
    id: 171,
    title: "豆肝尖",
    group: 3,
    expression: "C*(373/100)/1000"
  },
  {
    id: 172,
    title: "白花菜",
    group: 4,
    expression: "C*(0/100)/1000"
  },
  {
    id: 173,
    title: "小白菜",
    group: 4,
    expression: "C*(15/100)/1000"
  },
  {
    id: 174,
    title: "水萝卜",
    group: 4,
    expression: "C*(20/100)/1000"
  },
  {
    id: 175,
    title: "大白菜（青白口）",
    group: 4,
    expression: "C*(15/100)/1000"
  },
  {
    id: 176,
    title: "羽衣甘蓝",
    group: 4,
    expression: "C*(22/100)/1000"
  },
  {
    id: 177,
    title: "卷心菜",
    group: 4,
    expression: "C*(22/100)/1000"
  },
  {
    id: 178,
    title: "青萝卜",
    group: 4,
    expression: "C*(31/100)/1000"
  },
  {
    id: 179,
    title: "大白菜",
    group: 4,
    expression: "C*(17/100)/1000"
  },
  {
    id: 180,
    title: "抱子甘蓝",
    group: 4,
    expression: "C*(23/100)/1000"
  },
  {
    id: 181,
    title: "奶白菜",
    group: 4,
    expression: "C*(17/100)/1000"
  },
  {
    id: 182,
    title: "娃娃菜",
    group: 4,
    expression: "C*(8/100)/1000"
  },
  {
    id: 183,
    title: "红萝卜",
    group: 4,
    expression: "C*(20/100)/1000"
  },
  {
    id: 184,
    title: "红旦旦萝卜",
    group: 4,
    expression: "C*(20/100)/1000"
  },
  {
    id: 185,
    title: "西兰花",
    group: 4,
    expression: "C*(33/100)/1000"
  },
  {
    id: 186,
    title: "花叶萝卜",
    group: 4,
    expression: "C*(43/100)/1000"
  },
  {
    id: 187,
    title: "变萝卜",
    group: 4,
    expression: "C*(27/100)/1000"
  },
  {
    id: 188,
    title: "大白菜（白梗，黄芽白）",
    group: 4,
    expression: "C*(21/100)/1000"
  },
  {
    id: 189,
    title: "白萝卜",
    group: 4,
    expression: "C*(21/100)/1000"
  },
  {
    id: 190,
    title: "圆白菜",
    group: 4,
    expression: "C*(12/100)/1000"
  },
  {
    id: 191,
    title: "大白菜（小白口）",
    group: 4,
    expression: "C*(14/100)/1000"
  },
  {
    id: 192,
    title: "红皮萝卜",
    group: 4,
    expression: "C*(19/100)/1000"
  },
  {
    id: 193,
    title: "球茎甘蓝",
    group: 4,
    expression: "C*(30/100)/1000"
  },
  {
    id: 194,
    title: "红心萝卜",
    group: 4,
    expression: "C*(38/100)/1000"
  },
  {
    id: 195,
    title: "白萝卜（圆）",
    group: 4,
    expression: "C*(13/100)/1000"
  },
  {
    id: 196,
    title: "心里美萝卜",
    group: 4,
    expression: "C*(21/100)/1000"
  },
  {
    id: 197,
    title: "花椰菜",
    group: 4,
    expression: "C*(24/100)/1000"
  },
  {
    id: 198,
    title: "脱水胡萝卜",
    group: 4,
    expression: "C*(320/100)/1000"
  },
  {
    id: 199,
    title: "脱水花椰菜",
    group: 4,
    expression: "C*(286/100)/1000"
  },
  {
    id: 200,
    title: "脱水白菜",
    group: 4,
    expression: "C*(286/100)/1000"
  },
  {
    id: 201,
    title: "香菜",
    group: 5,
    expression: "C*(31/100)/1000"
  },
  {
    id: 202,
    title: "水芹菜",
    group: 5,
    expression: "C*(11/100)/1000"
  },
  {
    id: 203,
    title: "油菜（小）",
    group: 5,
    expression: "C*(11/100)/1000"
  },
  {
    id: 204,
    title: "苋菜",
    group: 5,
    expression: "C*(25/100)/1000"
  },
  {
    id: 205,
    title: "萝卜缨（白）",
    group: 5,
    expression: "C*(14/100)/1000"
  },
  {
    id: 206,
    title: "芥菜（小叶，小芥菜）",
    group: 5,
    expression: "C*(24/100)/1000"
  },
  {
    id: 207,
    title: "油麦菜",
    group: 5,
    expression: "C*(8/100)/1000"
  },
  {
    id: 208,
    title: "豆瓣菜【西洋菜，水田芹】",
    group: 5,
    expression: "C*(13/100)/1000"
  },
  {
    id: 209,
    title: "观达菜（根达菜、牛皮菜）",
    group: 5,
    expression: "C*(14/100)/1000"
  },
  {
    id: 210,
    title: "荠菜（菱角菜）",
    group: 5,
    expression: "C*(27/100)/1000"
  },
  {
    id: 211,
    title: "芹菜叶",
    group: 5,
    expression: "C*(31/100)/1000"
  },
  {
    id: 212,
    title: "芥菜（茎用，青头菜）",
    group: 5,
    expression: "C*(7/100)/1000"
  },
  {
    id: 213,
    title: "鸡毛菜",
    group: 5,
    expression: "C*(15/100)/1000"
  },
  {
    id: 214,
    title: "胡萝卜缨",
    group: 5,
    expression: "C*(40/100)/1000"
  },
  {
    id: 215,
    title: "冬寒菜",
    group: 5,
    expression: "C*(30/100)/1000"
  },
  {
    id: 216,
    title: "茴香",
    group: 5,
    expression: "C*(24/100)/1000"
  },
  {
    id: 217,
    title: "油菜心",
    group: 5,
    expression: "C*(11/100)/1000"
  },
  {
    id: 218,
    title: "紫背天葵（红风菜、血皮菜）",
    group: 5,
    expression: "C*(12/100)/1000"
  },
  {
    id: 219,
    title: "黄金西葫芦",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 220,
    title: "油菜（黑）",
    group: 5,
    expression: "C*(13/100)/1000"
  },
  {
    id: 221,
    title: "马齿苋【长寿菜，瓜子菜】",
    group: 5,
    expression: "C*(27/100)/1000"
  },
  {
    id: 222,
    title: "野苋菜（假苋菜）",
    group: 5,
    expression: "C*(59/100)/1000"
  },
  {
    id: 223,
    title: "白薯叶",
    group: 5,
    expression: "C*(58/100)/1000"
  },
  {
    id: 224,
    title: "芥蓝",
    group: 5,
    expression: "C*(19/100)/1000"
  },
  {
    id: 225,
    title: "芥菜（大叶，盖菜）",
    group: 5,
    expression: "C*(14/100)/1000"
  },
  {
    id: 226,
    title: "花案菜",
    group: 5,
    expression: "C*(15/100)/1000"
  },
  {
    id: 227,
    title: "空心菜",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 228,
    title: "莴笋叶",
    group: 5,
    expression: "C*(18/100)/1000"
  },
  {
    id: 229,
    title: "刺儿菜",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 230,
    title: "甜菜叶",
    group: 5,
    expression: "C*(19/100)/1000"
  },
  {
    id: 231,
    title: "苜蓿",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 232,
    title: "油菜",
    group: 5,
    expression: "C*(23/100)/1000"
  },
  {
    id: 233,
    title: "白菜薹",
    group: 5,
    expression: "C*(25/100)/1000"
  },
  {
    id: 234,
    title: "菠菜",
    group: 5,
    expression: "C*(24/100)/1000"
  },
  {
    id: 235,
    title: "豌豆苗",
    group: 5,
    expression: "C*(34/100)/1000"
  },
  {
    id: 236,
    title: "乌菜",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 237,
    title: "芥菜（雪里红，雪菜）",
    group: 5,
    expression: "C*(24/100)/1000"
  },
  {
    id: 238,
    title: "苋菜（紫）",
    group: 5,
    expression: "C*(31/100)/1000"
  },
  {
    id: 239,
    title: "落葵（木耳菜、软浆菜）",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 240,
    title: "生菜",
    group: 5,
    expression: "C*(15/100)/1000"
  },
  {
    id: 241,
    title: "茼蒿",
    group: 5,
    expression: "C*(21/100)/1000"
  },
  {
    id: 242,
    title: "新西兰菠菜",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 243,
    title: "竹叶菜",
    group: 5,
    expression: "C*(32/100)/1000"
  },
  {
    id: 244,
    title: "启明菜叶",
    group: 5,
    expression: "C*(32/100)/1000"
  },
  {
    id: 245,
    title: "苦菜（节节花，拒马菜）",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 246,
    title: "香椿【香椿芽】",
    group: 5,
    expression: "C*(47/100)/1000"
  },
  {
    id: 247,
    title: "萝卜缨（青）",
    group: 5,
    expression: "C*(32/100)/1000"
  },
  {
    id: 248,
    title: "车前子",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 249,
    title: "萝卜缨",
    group: 5,
    expression: "C*(20/100)/1000"
  },
  {
    id: 250,
    title: "香菜（脱水）",
    group: 5,
    expression: "C*(293/100)/1000"
  },
  {
    id: 251,
    title: "油菜（脱水）",
    group: 5,
    expression: "C*(299/100)/1000"
  },
  {
    id: 252,
    title: "豌豆尖",
    group: 5,
    expression: "C*(223/100)/1000"
  },
  {
    id: 253,
    title: "菠菜（脱水）",
    group: 5,
    expression: "C*(283/100)/1000"
  },
  {
    id: 254,
    title: "胡萝卜（黄）",
    group: 6,
    expression: "C*(43/100)/1000"
  },
  {
    id: 255,
    title: "胡萝卜（红）",
    group: 6,
    expression: "C*(37/100)/1000"
  },
  {
    id: 256,
    title: "栗面南瓜",
    group: 6,
    expression: "C*(31/100)/1000"
  },
  {
    id: 257,
    title: "南瓜",
    group: 6,
    expression: "C*(22/100)/1000"
  },
  {
    id: 258,
    title: "黄茎瓜",
    group: 6,
    expression: "C*(18/100)/1000"
  },
  {
    id: 259,
    title: "甘薯（红心）（山芋，红薯）",
    group: 6,
    expression: "C*(99/100)/1000"
  },
  {
    id: 261,
    title: "黄花菜",
    group: 6,
    expression: "C*(199/100)/1000"
  },
  {
    id: 262,
    title: "小西红柿",
    group: 7,
    infla_score: 0.034,
    expression: "C*(22/100)/1000"
  },
  {
    id: 263,
    title: "西红柿（罐头）",
    group: 7,
    infla_score: 0.034,
    expression: "C*(21/100)/1000"
  },
  {
    id: 264,
    title: "西红柿",
    group: 7,
    infla_score: 0.034,
    expression: "C*(19/100)/1000"
  },
  {
    id: 265,
    title: "西红柿（奶柿子）",
    group: 7,
    infla_score: 0.034,
    expression: "C*(13/100)/1000"
  },
  {
    id: 266,
    title: "竹笋",
    group: 8,
    expression: "C*(19/100)/1000"
  },
  {
    id: 267,
    title: "鞭笋",
    group: 8,
    expression: "C*(11/100)/1000"
  },
  {
    id: 268,
    title: "方瓜",
    group: 8,
    expression: "C*(13/100)/1000"
  },
  {
    id: 269,
    title: "红尖辣椒",
    group: 8,
    expression: "C*(32/100)/1000"
  },
  {
    id: 270,
    title: "荷兰豆",
    group: 8,
    expression: "C*(27/100)/1000"
  },
  {
    id: 271,
    title: "春笋",
    group: 8,
    expression: "C*(20/100)/1000"
  },
  {
    id: 272,
    title: "野茭白",
    group: 8,
    expression: "C*(20/100)/1000"
  },
  {
    id: 273,
    title: "轮叶党参",
    group: 8,
    expression: "C*(30/100)/1000"
  },
  {
    id: 274,
    title: "叶甜菜（白梗）",
    group: 8,
    expression: "C*(7/100)/1000"
  },
  {
    id: 275,
    title: "毛笋",
    group: 8,
    expression: "C*(20/100)/1000"
  },
  {
    id: 276,
    title: "龙牙豆（玉豆）",
    group: 8,
    expression: "C*(17/100)/1000"
  },
  {
    id: 277,
    title: "西芹",
    group: 8,
    expression: "C*(12/100)/1000"
  },
  {
    id: 278,
    title: "芦笋",
    group: 8,
    expression: "C*(19/100)/1000"
  },
  {
    id: 279,
    title: "秋黄瓜",
    group: 8,
    expression: "C*(12/100)/1000"
  },
  {
    id: 280,
    title: "辣椒青尖",
    group: 8,
    expression: "C*(23/100)/1000"
  },
  {
    id: 281,
    title: "瓢儿白",
    group: 8,
    expression: "C*(15/100)/1000"
  },
  {
    id: 282,
    title: "黄瓜",
    group: 8,
    expression: "C*(15/100)/1000"
  },
  {
    id: 283,
    title: "芹菜",
    group: 8,
    expression: "C*(14/100)/1000"
  },
  {
    id: 284,
    title: "百合（干）",
    group: 8,
    expression: "C*(343/100)/1000"
  },
  {
    id: 285,
    title: "金瓜",
    group: 8,
    expression: "C*(14/100)/1000"
  },
  {
    id: 286,
    title: "慈菇",
    group: 8,
    expression: "C*(94/100)/1000"
  },
  {
    id: 287,
    title: "冬瓜",
    group: 8,
    expression: "C*(11/100)/1000"
  },
  {
    id: 288,
    title: "绿豆芽",
    group: 8,
    expression: "C*(18/100)/1000"
  },
  {
    id: 289,
    title: "西葫芦",
    group: 8,
    expression: "C*(18/100)/1000"
  },
  {
    id: 290,
    title: "茄子（X）",
    group: 8,
    expression: "C*(21/100)/1000"
  },
  {
    id: 291,
    title: "丝瓜",
    group: 8,
    expression: "C*(20/100)/1000"
  },
  {
    id: 292,
    title: "芹菜茎",
    group: 8,
    expression: "C*(20/100)/1000"
  },
  {
    id: 293,
    title: "笋瓜",
    group: 8,
    expression: "C*(12/100)/1000"
  },
  {
    id: 294,
    title: "黄豆芽",
    group: 8,
    expression: "C*(44/100)/1000"
  },
  {
    id: 295,
    title: "节瓜",
    group: 8,
    expression: "C*(12/100)/1000"
  },
  {
    id: 296,
    title: "白瓜",
    group: 8,
    expression: "C*(10/100)/1000"
  },
  {
    id: 297,
    title: "莴笋",
    group: 8,
    expression: "C*(14/100)/1000"
  },
  {
    id: 298,
    title: "葫芦",
    group: 8,
    expression: "C*(15/100)/1000"
  },
  {
    id: 299,
    title: "蛇瓜",
    group: 8,
    expression: "C*(15/100)/1000"
  },
  {
    id: 300,
    title: "甜椒（灯笼椒，柿子椒）",
    group: 8,
    expression: "C*(22/100)/1000"
  },
  {
    id: 301,
    title: "红菜薑",
    group: 8,
    expression: "C*(41/100)/1000"
  },
  {
    id: 302,
    title: "佛手瓜",
    group: 8,
    expression: "C*(16/100)/1000"
  },
  {
    id: 303,
    title: "四季豆",
    group: 8,
    expression: "C*(28/100)/1000"
  },
  {
    id: 304,
    title: "香瓜茄",
    group: 8,
    expression: "C*(17/100)/1000"
  },
  {
    id: 305,
    title: "鱼腥草（根）",
    group: 8,
    expression: "C*(39/100)/1000"
  },
  {
    id: 306,
    title: "扁豆（月亮菜）",
    group: 8,
    expression: "C*(37/100)/1000"
  },
  {
    id: 307,
    title: "苦瓜",
    group: 8,
    expression: "C*(19/100)/1000"
  },
  {
    id: 308,
    title: "穿心莲",
    group: 8,
    expression: "C*(17/100)/1000"
  },
  {
    id: 309,
    title: "鱼腥草（叶）",
    group: 8,
    expression: "C*(34/100)/1000"
  },
  {
    id: 310,
    title: "绿皮茄子",
    group: 8,
    expression: "C*(25/100)/1000"
  },
  {
    id: 311,
    title: "彩椒",
    group: 8,
    expression: "C*(19/100)/1000"
  },
  {
    id: 312,
    title: "菜瓜",
    group: 8,
    expression: "C*(18/100)/1000"
  },
  {
    id: 313,
    title: "冬笋",
    group: 8,
    expression: "C*(40/100)/1000"
  },
  {
    id: 314,
    title: "茭白",
    group: 8,
    expression: "C*(23/100)/1000"
  },
  {
    id: 315,
    title: "根芹（根洋芹、球根糖蒿）",
    group: 8,
    expression: "C*(27/100)/1000"
  },
  {
    id: 316,
    title: "白皮茄子",
    group: 8,
    expression: "C*(14/100)/1000"
  },
  {
    id: 317,
    title: "紫皮长茄子",
    group: 8,
    expression: "C*(19/100)/1000"
  },
  {
    id: 318,
    title: "紫花桔梗",
    group: 8,
    expression: "C*(30/100)/1000"
  },
  {
    id: 319,
    title: "皎头",
    group: 8,
    expression: "C*(30/100)/1000"
  },
  {
    id: 320,
    title: "芸豆",
    group: 8,
    expression: "C*(25/100)/1000"
  },
  {
    id: 321,
    title: "金丝瓜",
    group: 8,
    expression: "C*(37/100)/1000"
  },
  {
    id: 322,
    title: "白笋",
    group: 8,
    expression: "C*(196/100)/1000"
  },
  {
    id: 323,
    title: "豆角",
    group: 8,
    expression: "C*(30/100)/1000"
  },
  {
    id: 324,
    title: "秋葵",
    group: 8,
    expression: "C*(20/100)/1000"
  },
  {
    id: 325,
    title: "葫子",
    group: 8,
    expression: "C*(23/100)/1000"
  },
  {
    id: 326,
    title: "豆角（白）",
    group: 8,
    expression: "C*(30/100)/1000"
  },
  {
    id: 327,
    title: "红尖干辣椒",
    group: 8,
    expression: "C*(212/100)/1000"
  },
  {
    id: 328,
    title: "蕨菜",
    group: 8,
    expression: "C*(39/100)/1000"
  },
  {
    id: 329,
    title: "百合",
    group: 8,
    expression: "C*(162/100)/1000"
  },
  {
    id: 330,
    title: "芥菜头",
    group: 8,
    expression: "C*(33/100)/1000"
  },
  {
    id: 331,
    title: "长豇豆",
    group: 8,
    expression: "C*(29/100)/1000"
  },
  {
    id: 332,
    title: "紫皮圆茄子",
    group: 8,
    expression: "C*(19/100)/1000"
  },
  {
    id: 333,
    title: "龙豆",
    group: 8,
    expression: "C*(32/100)/1000"
  },
  {
    id: 334,
    title: "黑豆苗",
    group: 8,
    expression: "C*(25/100)/1000"
  },
  {
    id: 335,
    title: "大巢菜【野苕子，野豌豆】",
    group: 8,
    expression: "C*(52/100)/1000"
  },
  {
    id: 336,
    title: "刀豆",
    group: 8,
    expression: "C*(36/100)/1000"
  },
  {
    id: 337,
    title: "茄子",
    group: 8,
    expression: "C*(28/100)/1000"
  },
  {
    id: 338,
    title: "豌豆（带荚）",
    group: 8,
    expression: "C*(105/100)/1000"
  },
  {
    id: 339,
    title: "黑笋（干）",
    group: 8,
    expression: "C*(100/100)/1000"
  },
  {
    id: 340,
    title: "葫芦条（干）",
    group: 8,
    expression: "C*(219/100)/1000"
  },
  {
    id: 341,
    title: "紫苏",
    group: 8,
    expression: "C*(174/100)/1000"
  },
  {
    id: 342,
    title: "龙传豆",
    group: 8,
    expression: "C*(139/100)/1000"
  },
  {
    id: 343,
    title: "甜椒（脱水）",
    group: 8,
    expression: "C*(307/100)/1000"
  },
  {
    id: 344,
    title: "毛豆",
    group: 8,
    expression: "C*(123/100)/1000"
  },
  {
    id: 346,
    title: "发芽豆",
    group: 8,
    expression: "C*(128/100)/1000"
  },
  {
    id: 347,
    title: "姜",
    group: 9,
    expression: "C*(41/100)/1000"
  },
  {
    id: 348,
    title: "子姜",
    group: 9,
    expression: "C*(19/100)/1000"
  },
  {
    id: 349,
    title: "细香葱",
    group: 9,
    expression: "C*(37/100)/1000"
  },
  {
    id: 350,
    title: "小葱",
    group: 9,
    expression: "C*(24/100)/1000"
  },
  {
    id: 351,
    title: "紫皮大蒜",
    group: 9,
    expression: "C*(136/100)/1000"
  },
  {
    id: 352,
    title: "韭菜",
    group: 9,
    expression: "C*(26/100)/1000"
  },
  {
    id: 353,
    title: "洋葱（葱头）",
    group: 9,
    expression: "C*(39/100)/1000"
  },
  {
    id: 354,
    title: "大葱",
    group: 9,
    expression: "C*(30/100)/1000"
  },
  {
    id: 355,
    title: "分葱",
    group: 9,
    expression: "C*(33/100)/1000"
  },
  {
    id: 356,
    title: "韭黄",
    group: 9,
    expression: "C*(22/100)/1000"
  },
  {
    id: 357,
    title: "蒜黄",
    group: 9,
    expression: "C*(21/100)/1000"
  },
  {
    id: 358,
    title: "洋姜",
    group: 9,
    expression: "C*(56/100)/1000"
  },
  {
    id: 359,
    title: "青蒜",
    group: 9,
    expression: "C*(30/100)/1000"
  },
  {
    id: 360,
    title: "大蒜",
    group: 9,
    expression: "C*(126/100)/1000"
  },
  {
    id: 361,
    title: "韭苔",
    group: 9,
    expression: "C*(33/100)/1000"
  },
  {
    id: 362,
    title: "蒜苗",
    group: 9,
    expression: "C*(37/100)/1000"
  },
  {
    id: 363,
    title: "大葱（红皮）",
    group: 9,
    expression: "C*(46/100)/1000"
  },
  {
    id: 364,
    title: "野韭菜",
    group: 9,
    expression: "C*(35/100)/1000"
  },
  {
    id: 365,
    title: "蒜薹",
    group: 9,
    expression: "C*(61/100)/1000"
  },
  {
    id: 366,
    title: "大蒜（脱水）",
    group: 9,
    expression: "C*(339/100)/1000"
  },
  {
    id: 367,
    title: "团蒜",
    group: 9,
    expression: "C*(122/100)/1000"
  },
  {
    id: 368,
    title: "姜（干）",
    group: 9,
    expression: "C*(273/100)/1000"
  },
  {
    id: 369,
    title: "洋葱（白皮，脱水）",
    group: 9,
    expression: "C*(330/100)/1000"
  },
  {
    id: 370,
    title: "洋葱（紫皮，脱水）",
    group: 9,
    expression: "C*(324/100)/1000"
  },
  {
    id: 371,
    title: "山药",
    group: 10,
    infla_score: -0.032,
    expression: "C*(56/100)/1000"
  },
  {
    id: 372,
    title: "藕",
    group: 10,
    infla_score: -0.032,
    expression: "C*(70/100)/1000"
  },
  {
    id: 373,
    title: "马铃薯（煮）",
    group: 10,
    infla_score: -0.032,
    expression: "C*(65/100)/1000"
  },
  {
    id: 374,
    title: "马铃薯（土豆，洋芋）",
    group: 10,
    infla_score: -0.032,
    expression: "C*(76/100)/1000"
  },
  {
    id: 375,
    title: "大薯",
    group: 10,
    infla_score: -0.032,
    expression: "C*(105/100)/1000"
  },
  {
    id: 376,
    title: "芋头",
    group: 10,
    infla_score: -0.032,
    expression: "C*(79/100)/1000"
  },
  {
    id: 377,
    title: "甘薯（白心）（红皮山芋）",
    group: 10,
    infla_score: -0.032,
    expression: "C*(104/100)/1000"
  },
  {
    id: 378,
    title: "马铃薯（烤）",
    group: 10,
    infla_score: -0.032,
    expression: "C*(130/100)/1000"
  },
  {
    id: 379,
    title: "木薯",
    group: 10,
    infla_score: -0.032,
    expression: "C*(116/100)/1000"
  },
  {
    id: 380,
    title: "山药（干）",
    group: 10,
    infla_score: -0.032,
    expression: "C*(324/100)/1000"
  },
  {
    id: 381,
    title: "葛",
    group: 10,
    infla_score: -0.032,
    expression: "C*(145/100)/1000"
  },
  {
    id: 382,
    title: "菱角",
    group: 10,
    infla_score: -0.032,
    expression: "C*(98/100)/1000"
  },
  {
    id: 383,
    title: "凉薯",
    group: 10,
    infla_score: -0.032,
    expression: "C*(55/100)/1000"
  },
  {
    id: 384,
    title: "蒸马铃薯",
    group: 10,
    infla_score: -0.032,
    expression: "C*(126/100)/1000"
  },
  {
    id: 385,
    title: "槟榔芋",
    group: 10,
    infla_score: -0.032,
    expression: "C*(87/100)/1000"
  },
  {
    id: 386,
    title: "马铃薯丁（脱水）",
    group: 10,
    infla_score: -0.032,
    expression: "C*(337/100)/1000"
  },
  {
    id: 387,
    title: "剁辣椒",
    group: 11,
    expression: "C*(30/100)/1000"
  },
  {
    id: 388,
    title: "合锦菜",
    group: 11,
    expression: "C*(25/100)/1000"
  },
  {
    id: 389,
    title: "酸芥菜",
    group: 11,
    expression: "C*(17/100)/1000"
  },
  {
    id: 390,
    title: "腌韭菜花",
    group: 11,
    expression: "C*(27/100)/1000"
  },
  {
    id: 391,
    title: "榨菜",
    group: 11,
    expression: "C*(29/100)/1000"
  },
  {
    id: 392,
    title: "姜（糟）",
    group: 11,
    expression: "C*(27/100)/1000"
  },
  {
    id: 393,
    title: "蕨菜（腌）",
    group: 11,
    expression: "C*(22/100)/1000"
  },
  {
    id: 394,
    title: "洋姜（腌）",
    group: 11,
    expression: "C*(34/100)/1000"
  },
  {
    id: 395,
    title: "酱大头菜",
    group: 11,
    expression: "C*(36/100)/1000"
  },
  {
    id: 396,
    title: "酱萝卜",
    group: 11,
    expression: "C*(30/100)/1000"
  },
  {
    id: 397,
    title: "冬菜",
    group: 11,
    expression: "C*(46/100)/1000"
  },
  {
    id: 398,
    title: "蒜蓉辣酱",
    group: 11,
    expression: "C*(88/100)/1000"
  },
  {
    id: 399,
    title: "乳黄瓜",
    group: 11,
    expression: "C*(32/100)/1000"
  },
  {
    id: 400,
    title: "腌芥菜头",
    group: 11,
    expression: "C*(20/100)/1000"
  },
  {
    id: 401,
    title: "酱莴笋",
    group: 11,
    expression: "C*(23/100)/1000"
  },
  {
    id: 402,
    title: "酸白菜",
    group: 11,
    expression: "C*(14/100)/1000"
  },
  {
    id: 403,
    title: "榨菜（正林牌）",
    group: 11,
    expression: "C*(10/100)/1000"
  },
  {
    id: 404,
    title: "五香大头菜",
    group: 11,
    expression: "C*(48/100)/1000"
  },
  {
    id: 405,
    title: "腌制皎头",
    group: 11,
    expression: "C*(97/100)/1000"
  },
  {
    id: 406,
    title: "腌萝卜条",
    group: 11,
    expression: "C*(44/100)/1000"
  },
  {
    id: 407,
    title: "雪菜",
    group: 11,
    expression: "C*(22/100)/1000"
  },
  {
    id: 409,
    title: "酱蒜头",
    group: 11,
    expression: "C*(104/100)/1000"
  },
  {
    id: 410,
    title: "腌大头菜",
    group: 11,
    expression: "C*(58/100)/1000"
  },
  {
    id: 411,
    title: "腌雪里红",
    group: 11,
    expression: "C*(25/100)/1000"
  },
  {
    id: 412,
    title: "榨菜（鱼泉牌）",
    group: 11,
    expression: "C*(34/100)/1000"
  },
  {
    id: 413,
    title: "什锦菜",
    group: 11,
    expression: "C*(35/100)/1000"
  },
  {
    id: 414,
    title: "芥菜干",
    group: 11,
    expression: "C*(141/100)/1000"
  },
  {
    id: 415,
    title: "糖蒜",
    group: 11,
    expression: "C*(114/100)/1000"
  },
  {
    id: 416,
    title: "八宝菜",
    group: 11,
    expression: "C*(72/100)/1000"
  },
  {
    id: 417,
    title: "酱黄瓜",
    group: 11,
    expression: "C*(121/100)/1000"
  },
  {
    id: 418,
    title: "甜辣黄瓜",
    group: 11,
    expression: "C*(99/100)/1000"
  },
  {
    id: 419,
    title: "酱包瓜",
    group: 11,
    expression: "C*(107/100)/1000"
  },
  {
    id: 420,
    title: "腌花生米",
    group: 11,
    expression: "C*(260/100)/1000"
  },
  {
    id: 421,
    title: "萝卜干",
    group: 11,
    expression: "C*(60/100)/1000"
  },
  {
    id: 422,
    title: "辣萝卜条",
    group: 11,
    expression: "C*(37/100)/1000"
  },
  {
    id: 423,
    title: "海带（江白菜）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(12/100)/1000"
  },
  {
    id: 424,
    title: "木耳（水发，黑木耳）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(21/100)/1000"
  },
  {
    id: 425,
    title: "平菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(20/100)/1000"
  },
  {
    id: 426,
    title: "猴头菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(13/100)/1000"
  },
  {
    id: 427,
    title: "鸡油菌",
    group: 12,
    infla_score: -0.033,
    expression: "C*(14/100)/1000"
  },
  {
    id: 428,
    title: "鸡枞花",
    group: 12,
    infla_score: -0.033,
    expression: "C*(16/100)/1000"
  },
  {
    id: 429,
    title: "洋蘑菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(14/100)/1000"
  },
  {
    id: 430,
    title: "草菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(23/100)/1000"
  },
  {
    id: 431,
    title: "海带（浸，江白菜）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(14/100)/1000"
  },
  {
    id: 432,
    title: "血红菇（干）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(252/100)/1000"
  },
  {
    id: 433,
    title: "白蘑菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(27/100)/1000"
  },
  {
    id: 434,
    title: "蘑菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(20/100)/1000"
  },
  {
    id: 435,
    title: "杏鲍菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(31/100)/1000"
  },
  {
    id: 436,
    title: "榛蘑",
    group: 12,
    infla_score: -0.033,
    expression: "C*(46/100)/1000"
  },
  {
    id: 437,
    title: "金针菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(26/100)/1000"
  },
  {
    id: 438,
    title: "木耳（干，黑木耳）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(205/100)/1000"
  },
  {
    id: 439,
    title: "银耳",
    group: 12,
    infla_score: -0.033,
    expression: "C*(200/100)/1000"
  },
  {
    id: 440,
    title: "香菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(19/100)/1000"
  },
  {
    id: 441,
    title: "松茸",
    group: 12,
    infla_score: -0.033,
    expression: "C*(36/100)/1000"
  },
  {
    id: 442,
    title: "海带（干，江白菜）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(77/100)/1000"
  },
  {
    id: 443,
    title: "紫菜",
    group: 12,
    infla_score: -0.033,
    expression: "C*(207/100)/1000"
  },
  {
    id: 444,
    title: "元蘑",
    group: 12,
    infla_score: -0.033,
    expression: "C*(146/100)/1000"
  },
  {
    id: 445,
    title: "竹荪（千）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(104/100)/1000"
  },
  {
    id: 446,
    title: "茶树菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(279/100)/1000"
  },
  {
    id: 447,
    title: "菌藻类",
    group: 12,
    infla_score: -0.033,
    expression: "C*(252/100)/1000"
  },
  {
    id: 448,
    title: "海带菜",
    group: 12,
    infla_score: -0.033,
    expression: "C*(89/100)/1000"
  },
  {
    id: 449,
    title: "香菇（干）",
    group: 12,
    infla_score: -0.033,
    expression: "C*(211/100)/1000"
  },
  {
    id: 450,
    title: "鸡腿菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(14/100)/1000"
  },
  {
    id: 451,
    title: "冬菇",
    group: 12,
    infla_score: -0.033,
    expression: "C*(212/100)/1000"
  },
  {
    id: 452,
    title: "口蘑",
    group: 12,
    infla_score: -0.033,
    expression: "C*(242/100)/1000"
  },
  {
    id: 453,
    title: "海冻菜",
    group: 12,
    infla_score: -0.033,
    expression: "C*(54/100)/1000"
  },
  {
    id: 454,
    title: "樱桃",
    group: 13,
    expression: "C*(46/100)/1000"
  },
  {
    id: 455,
    title: "芒果【抹猛果，望果】",
    group: 13,
    expression: "C*(32/100)/1000"
  },
  {
    id: 456,
    title: "桂圆肉",
    group: 13,
    expression: "C*(313/100)/1000"
  },
  {
    id: 457,
    title: "红元帅苹果",
    group: 13,
    expression: "C*(59/100)/1000"
  },
  {
    id: 458,
    title: "黑枣",
    group: 13,
    expression: "C*(35/100)/1000"
  },
  {
    id: 459,
    title: "酸木瓜",
    group: 13,
    expression: "C*(35/100)/1000"
  },
  {
    id: 460,
    title: "枣（鲜）",
    group: 13,
    expression: "C*(228/100)/1000"
  },
  {
    id: 461,
    title: "蒲桃【香果、水石榴】",
    group: 13,
    expression: "C*(38/100)/1000"
  },
  {
    id: 462,
    title: "桂圆",
    group: 13,
    expression: "C*(71/100)/1000"
  },
  {
    id: 463,
    title: "巴梨",
    group: 13,
    expression: "C*(46/100)/1000"
  },
  {
    id: 464,
    title: "酸梨",
    group: 13,
    expression: "C*(26/100)/1000"
  },
  {
    id: 465,
    title: "西梅",
    group: 13,
    expression: "C*(35/100)/1000"
  },
  {
    id: 467,
    title: "白粉桃",
    group: 13,
    expression: "C*(39/100)/1000"
  },
  {
    id: 468,
    title: "番石榴【鸡矢果，番桃】",
    group: 13,
    expression: "C*(41/100)/1000"
  },
  {
    id: 469,
    title: "木梨",
    group: 13,
    expression: "C*(46/100)/1000"
  },
  {
    id: 470,
    title: "杏",
    group: 13,
    expression: "C*(36/100)/1000"
  },
  {
    id: 471,
    title: "白兰瓜",
    group: 13,
    expression: "C*(26/100)/1000"
  },
  {
    id: 472,
    title: "酥梨",
    group: 13,
    expression: "C*(43/100)/1000"
  },
  {
    id: 473,
    title: "杨桃",
    group: 13,
    expression: "C*(29/100)/1000"
  },
  {
    id: 474,
    title: "冬果梨",
    group: 13,
    expression: "C*(37/100)/1000"
  },
  {
    id: 475,
    title: "小西瓜",
    group: 13,
    expression: "C*(29/100)/1000"
  },
  {
    id: 476,
    title: "山楂",
    group: 13,
    expression: "C*(95/100)/1000"
  },
  {
    id: 477,
    title: "梨（X）",
    group: 13,
    expression: "C*(44/100)/1000"
  },
  {
    id: 478,
    title: "甜瓜",
    group: 13,
    expression: "C*(26/100)/1000"
  },
  {
    id: 479,
    title: "荔枝",
    group: 13,
    expression: "C*(46/100)/1000"
  },
  {
    id: 480,
    title: "桃",
    group: 13,
    expression: "C*(48/100)/1000"
  },
  {
    id: 481,
    title: "长把梨",
    group: 13,
    expression: "C*(54/100)/1000"
  },
  {
    id: 482,
    title: "菠萝蜜",
    group: 13,
    expression: "C*(103/100)/1000"
  },
  {
    id: 483,
    title: "木瓜",
    group: 13,
    expression: "C*(27/100)/1000"
  },
  {
    id: 484,
    title: "金元帅苹果",
    group: 13,
    expression: "C*(51/100)/1000"
  },
  {
    id: 485,
    title: "红星苹果",
    group: 13,
    expression: "C*(51/100)/1000"
  },
  {
    id: 486,
    title: "鸭梨",
    group: 13,
    expression: "C*(43/100)/1000"
  },
  {
    id: 487,
    title: "鹅黄梨",
    group: 13,
    expression: "C*(37/100)/1000"
  },
  {
    id: 488,
    title: "桂圆（干）",
    group: 13,
    expression: "C*(273/100)/1000"
  },
  {
    id: 489,
    title: "国光苹果",
    group: 13,
    expression: "C*(54/100)/1000"
  },
  {
    id: 490,
    title: "火龙果",
    group: 13,
    expression: "C*(51/100)/1000"
  },
  {
    id: 491,
    title: "海棠果",
    group: 13,
    expression: "C*(30/100)/1000"
  },
  {
    id: 492,
    title: "西瓜",
    group: 13,
    expression: "C*(25/100)/1000"
  },
  {
    id: 493,
    title: "黄香蕉苹果",
    group: 13,
    expression: "C*(49/100)/1000"
  },
  {
    id: 494,
    title: "莱阳梨",
    group: 13,
    expression: "C*(49/100)/1000"
  },
  {
    id: 495,
    title: "旱苹果",
    group: 13,
    expression: "C*(46/100)/1000"
  },
  {
    id: 496,
    title: "橄榄",
    group: 13,
    expression: "C*(49/100)/1000"
  },
  {
    id: 497,
    title: "苏木梨",
    group: 13,
    expression: "C*(48/100)/1000"
  },
  {
    id: 498,
    title: "李子",
    group: 13,
    expression: "C*(36/100)/1000"
  },
  {
    id: 499,
    title: "京白梨",
    group: 13,
    expression: "C*(55/100)/1000"
  },
  {
    id: 500,
    title: "香梨",
    group: 13,
    expression: "C*(46/100)/1000"
  },
  {
    id: 501,
    title: "人参果",
    group: 13,
    expression: "C*(40/100)/1000"
  },
  {
    id: 502,
    title: "库尔勒梨",
    group: 13,
    expression: "C*(36/100)/1000"
  },
  {
    id: 503,
    title: "伏苹果",
    group: 13,
    expression: "C*(45/100)/1000"
  },
  {
    id: 504,
    title: "红富士苹果",
    group: 13,
    expression: "C*(45/100)/1000"
  },
  {
    id: 505,
    title: "苹果（X）",
    group: 13,
    expression: "C*(52/100)/1000"
  },
  {
    id: 506,
    title: "枣（干）",
    group: 13,
    expression: "C*(264/100)/1000"
  },
  {
    id: 507,
    title: "黄元帅苹果",
    group: 13,
    expression: "C*(55/100)/1000"
  },
  {
    id: 508,
    title: "锦丰梨",
    group: 13,
    expression: "C*(34/100)/1000"
  },
  {
    id: 509,
    title: "苹果梨",
    group: 13,
    expression: "C*(48/100)/1000"
  },
  {
    id: 510,
    title: "雪花梨",
    group: 13,
    expression: "C*(41/100)/1000"
  },
  {
    id: 511,
    title: "香蕉（红皮，泰国）",
    group: 13,
    expression: "C*(78/100)/1000"
  },
  {
    id: 512,
    title: "香蕉",
    group: 13,
    expression: "C*(91/100)/1000"
  },
  {
    id: 513,
    title: "香蕉（红皮，海南）",
    group: 13,
    expression: "C*(82/100)/1000"
  },
  {
    id: 514,
    title: "久保桃",
    group: 13,
    expression: "C*(41/100)/1000"
  },
  {
    id: 515,
    title: "金丝小枣",
    group: 13,
    expression: "C*(294/100)/1000"
  },
  {
    id: 516,
    title: "冬枣",
    group: 13,
    expression: "C*(105/100)/1000"
  },
  {
    id: 517,
    title: "沙果",
    group: 13,
    expression: "C*(66/100)/1000"
  },
  {
    id: 518,
    title: "红香蕉苹果",
    group: 13,
    expression: "C*(49/100)/1000"
  },
  {
    id: 519,
    title: "梅（青梅）",
    group: 13,
    expression: "C*(33/100)/1000"
  },
  {
    id: 520,
    title: "雪梨",
    group: 13,
    expression: "C*(73/100)/1000"
  },
  {
    id: 521,
    title: "小枣（干）",
    group: 13,
    expression: "C*(299/100)/1000"
  },
  {
    id: 522,
    title: "榴莲",
    group: 13,
    expression: "C*(80/100)/1000"
  },
  {
    id: 523,
    title: "桃（糖水罐头）",
    group: 13,
    expression: "C*(58/100)/1000"
  },
  {
    id: 524,
    title: "芭蕉",
    group: 13,
    expression: "C*(109/100)/1000"
  },
  {
    id: 525,
    title: "枣（干、大）",
    group: 13,
    expression: "C*(298/100)/1000"
  },
  {
    id: 527,
    title: "蜜枣",
    group: 13,
    expression: "C*(321/100)/1000"
  },
  {
    id: 528,
    title: "柠檬汁",
    group: 14,
    expression: "C*(40/100)/1000"
  },
  {
    id: 529,
    title: "鲜桔汁",
    group: 14,
    expression: "C*(30/100)/1000"
  },
  {
    id: 530,
    title: "甘蔗汁",
    group: 14,
    expression: "C*(64/100)/1000"
  },
  {
    id: 531,
    title: "乌梅汁",
    group: 14,
    expression: "C*(89/100)/1000"
  },
  {
    id: 532,
    title: "橘子汁",
    group: 14,
    expression: "C*(119/100)/1000"
  },
  {
    id: 533,
    title: "红果汁",
    group: 14,
    expression: "C*(64/100)/1000"
  },
  {
    id: 534,
    title: "莲子（干）",
    group: 15,
    expression: "C*(344/100)/1000"
  },
  {
    id: 535,
    title: "西瓜子（炒）",
    group: 15,
    expression: "C*(573/100)/1000"
  },
  {
    id: 536,
    title: "核桃",
    group: 15,
    expression: "C*(627/100)/1000"
  },
  {
    id: 537,
    title: "芝麻（黑）",
    group: 15,
    expression: "C*(531/100)/1000"
  },
  {
    id: 538,
    title: "杏仁",
    group: 15,
    expression: "C*(562/100)/1000"
  },
  {
    id: 539,
    title: "板栗",
    group: 15,
    expression: "C*(186/100)/1000"
  },
  {
    id: 540,
    title: "西瓜子（话梅）",
    group: 15,
    expression: "C*(60/100)/1000"
  },
  {
    id: 541,
    title: "腰果",
    group: 15,
    expression: "C*(552/100)/1000"
  },
  {
    id: 542,
    title: "松子（生）",
    group: 15,
    expression: "C*(600/100)/1000"
  },
  {
    id: 543,
    title: "芡实米（鲜）",
    group: 15,
    expression: "C*(144/100)/1000"
  },
  {
    id: 544,
    title: "核桃（鲜）",
    group: 15,
    expression: "C*(328/100)/1000"
  },
  {
    id: 545,
    title: "栗子仁（熟）",
    group: 15,
    expression: "C*(87/100)/1000"
  },
  {
    id: 546,
    title: "栗子（鲜，板栗）",
    group: 15,
    expression: "C*(185/100)/1000"
  },
  {
    id: 547,
    title: "松子（炒）",
    group: 15,
    expression: "C*(700/100)/1000"
  },
  {
    id: 548,
    title: "花生（鲜）",
    group: 15,
    expression: "C*(298/100)/1000"
  },
  {
    id: 549,
    title: "熟杏仁",
    group: 15,
    expression: "C*(626/100)/1000"
  },
  {
    id: 550,
    title: "白果",
    group: 15,
    expression: "C*(355/100)/1000"
  },
  {
    id: 551,
    title: "葵花籽",
    group: 15,
    expression: "C*(591/100)/1000"
  },
  {
    id: 552,
    title: "葵花子",
    group: 15,
    expression: "C*(616/100)/1000"
  },
  {
    id: 553,
    title: "炒榛子",
    group: 15,
    expression: "C*(594/100)/1000"
  },
  {
    id: 554,
    title: "葵花籽（生）",
    group: 15,
    expression: "C*(597/100)/1000"
  },
  {
    id: 555,
    title: "栗子（山东，板栗）",
    group: 15,
    expression: "C*(164/100)/1000"
  },
  {
    id: 556,
    title: "花生仁生",
    group: 15,
    expression: "C*(563/100)/1000"
  },
  {
    id: 557,
    title: "芡实米（鸡头米）",
    group: 15,
    expression: "C*(351/100)/1000"
  },
  {
    id: 558,
    title: "山核桃（熟）[小核桃]",
    group: 15,
    expression: "C*(596/100)/1000"
  },
  {
    id: 559,
    title: "油炸花生仁",
    group: 15,
    expression: "C*(549/100)/1000"
  },
  {
    id: 560,
    title: "南瓜子（炒）",
    group: 15,
    expression: "C*(574/100)/1000"
  },
  {
    id: 561,
    title: "栗子（干）",
    group: 15,
    expression: "C*(345/100)/1000"
  },
  {
    id: 562,
    title: "栗子（北京密云，板栗）",
    group: 15,
    expression: "C*(182/100)/1000"
  },
  {
    id: 563,
    title: "腰果（熟）",
    group: 15,
    expression: "C*(297100)/1000"
  },
  {
    id: 564,
    title: "杏仁（熟，去壳）",
    group: 15,
    expression: "C*(300/100)/1000"
  },
  {
    id: 565,
    title: "花生（炒）",
    group: 15,
    expression: "C*(589/100)/1000"
  },
  {
    id: 566,
    title: "栗子（熟，板栗）",
    group: 15,
    expression: "C*(212/100)/1000"
  },
  {
    id: 567,
    title: "炒花生仁",
    group: 15,
    expression: "C*(581/100)/1000"
  },
  {
    id: 568,
    title: "沙高子",
    group: 15,
    expression: "C*(485/100)/1000"
  },
  {
    id: 569,
    title: "胡麻子",
    group: 15,
    expression: "C*(390/100)/1000"
  },
  {
    id: 570,
    title: "花生（烤，勤俭牌）",
    group: 15,
    expression: "C*(566/100)/1000"
  },
  {
    id: 571,
    title: "牛肉（后腱）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(98/100)/1000"
  },
  {
    id: 572,
    title: "猪肉（瘦）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(143/100)/1000"
  },
  {
    id: 573,
    title: "牛蹄筋（熟）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(147/100)/1000"
  },
  {
    id: 574,
    title: "猪肉（里脊）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(155/100)/1000"
  },
  {
    id: 575,
    title: "驴肉（瘦）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(116/100)/1000"
  },
  {
    id: 576,
    title: "羊肉（上脑）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(147/100)/1000"
  },
  {
    id: 577,
    title: "牛肉（后腿）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(106/100)/1000"
  },
  {
    id: 578,
    title: "牛肉（前腱）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(113/100)/1000"
  },
  {
    id: 579,
    title: "猪蹄（熟）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(260/100)/1000"
  },
  {
    id: 580,
    title: "猪肉（腿）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(190/100)/1000"
  },
  {
    id: 581,
    title: "羊肉（冻）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(178/100)/1000"
  },
  {
    id: 582,
    title: "猪肉（后臀尖）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(336/100)/1000"
  },
  {
    id: 583,
    title: "牛肉（胸部肉）【牛胸】",
    group: 16,
    infla_score: 0.032,
    expression: "C*(326/100)/1000"
  },
  {
    id: 584,
    title: "猪肉（前肘）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(287/100)/1000"
  },
  {
    id: 585,
    title: "猪皮",
    group: 16,
    infla_score: 0.032,
    expression: "C*(363/100)/1000"
  },
  {
    id: 586,
    title: "瘦牛肉",
    group: 16,
    infla_score: 0.032,
    expression: "C*(106/100)/1000"
  },
  {
    id: 587,
    title: "猪肉（前臀尖）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(289/100)/1000"
  },
  {
    id: 588,
    title: "羊肉（肥瘦）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(203/100)/1000"
  },
  {
    id: 589,
    title: "烧羊肉（五香）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(183/100)/1000"
  },
  {
    id: 590,
    title: "牛肉（酱，五香）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(200/100)/1000"
  },
  {
    id: 591,
    title: "牛鞭（泡发）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(117/100)/1000"
  },
  {
    id: 592,
    title: "牛肉（清香）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(200/100)/1000"
  },
  {
    id: 593,
    title: "牛肉（肥瘦）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(125/100)/1000"
  },
  {
    id: 594,
    title: "兔肉",
    group: 16,
    infla_score: 0.032,
    expression: "C*(102/100)/1000"
  },
  {
    id: 595,
    title: "牛肉（前腿）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(105/100)/1000"
  },
  {
    id: 596,
    title: "羊肉（瘦）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(118/100)/1000"
  },
  {
    id: 597,
    title: "羊肉片",
    group: 16,
    infla_score: 0.032,
    expression: "C*(118/100)/1000"
  },
  {
    id: 598,
    title: "马肉",
    group: 16,
    infla_score: 0.032,
    expression: "C*(122/100)/1000"
  },
  {
    id: 599,
    title: "猪肉（硬五花）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(339/100)/1000"
  },
  {
    id: 600,
    title: "牛肉（牛柳）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(134/100)/1000"
  },
  {
    id: 601,
    title: "狗肉",
    group: 16,
    infla_score: 0.032,
    expression: "C*(116/100)/1000"
  },
  {
    id: 602,
    title: "羊肉（后腿）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(110/100)/1000"
  },
  {
    id: 603,
    title: "猪小排",
    group: 16,
    infla_score: 0.032,
    expression: "C*(278/100)/1000"
  },
  {
    id: 604,
    title: "牛蹄筋",
    group: 16,
    infla_score: 0.032,
    expression: "C*(151/100)/1000"
  },
  {
    id: 605,
    title: "猪肉（通脊、社长大猪）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(159/100)/1000"
  },
  {
    id: 606,
    title: "牛肉（臀部肉）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(117/100)/1000"
  },
  {
    id: 607,
    title: "猪耳",
    group: 16,
    infla_score: 0.032,
    expression: "C*(176/100)/1000"
  },
  {
    id: 608,
    title: "牛肉(腑肋)",
    group: 16,
    infla_score: 0.032,
    expression: "C*(123/100)/1000"
  },
  {
    id: 609,
    title: "牛肉（背部肉）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(193/100)/1000"
  },
  {
    id: 610,
    title: "猪肉（肥瘦）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(395/100)/1000"
  },
  {
    id: 611,
    title: "猪肘棒（熟）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(314/100)/1000"
  },
  {
    id: 612,
    title: "猪肉（后肘）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(320/100)/1000"
  },
  {
    id: 613,
    title: "猪蹄筋",
    group: 16,
    infla_score: 0.032,
    expression: "C*(234/100)/1000"
  },
  {
    id: 614,
    title: "牛肉（小腿肉）（牛展、牛腱子）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(122/100)/1000"
  },
  {
    id: 615,
    title: "猪大排",
    group: 16,
    infla_score: 0.032,
    expression: "C*(264/100)/1000"
  },
  {
    id: 616,
    title: "牛肉（牛腩）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(332/100)/1000"
  },
  {
    id: 617,
    title: "牛肉（里脊）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(107/100)/1000"
  },
  {
    id: 618,
    title: "猪肉（硬肋、良杂猪）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(536/100)/1000"
  },
  {
    id: 619,
    title: "猪肉（肋条肉）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(568/100)/1000"
  },
  {
    id: 620,
    title: "猪蹄",
    group: 16,
    infla_score: 0.032,
    expression: "C*(260/100)/1000"
  },
  {
    id: 621,
    title: "羊肉（里脊）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(309/100)/1000"
  },
  {
    id: 622,
    title: "羊肉（胸脯）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(323/100)/1000"
  },
  {
    id: 623,
    title: "羊肉（熟）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(217/100)/1000"
  },
  {
    id: 624,
    title: "猪肉（肥）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(807/100)/1000"
  },
  {
    id: 625,
    title: "叉烧肉",
    group: 16,
    infla_score: 0.032,
    expression: "C*(279/100)/1000"
  },
  {
    id: 626,
    title: "扒猪脸",
    group: 16,
    infla_score: 0.032,
    expression: "C*(373/100)/1000"
  },
  {
    id: 627,
    title: "猪肉软五花",
    group: 16,
    infla_score: 0.032,
    expression: "C*(349/100)/1000"
  },
  {
    id: 628,
    title: "猪肘棒",
    group: 16,
    infla_score: 0.032,
    expression: "C*(248/100)/1000"
  },
  {
    id: 629,
    title: "猪肉（清蒸）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(198/100)/1000"
  },
  {
    id: 630,
    title: "猪肉（猪脖）",
    group: 16,
    infla_score: 0.032,
    expression: "C*(148/100)/1000"
  },
  {
    id: 631,
    title: "猪头皮",
    group: 16,
    infla_score: 0.032,
    expression: "C*(499/100)/1000"
  },
  {
    id: 632,
    title: "烤鸭（老唐牌）",
    group: 17,
    expression: "C*(309/100)/1000"
  },
  {
    id: 633,
    title: "鱼丸",
    group: 17,
    expression: "C*(107/100)/1000"
  },
  {
    id: 634,
    title: "三明治火腿",
    group: 17,
    expression: "C*(115/100)/1000"
  },
  {
    id: 635,
    title: "火腿肠",
    group: 17,
    expression: "C*(212/100)/1000"
  },
  {
    id: 636,
    title: "虾仁肉丸",
    group: 17,
    expression: "C*(151/100)/1000"
  },
  {
    id: 637,
    title: "鲅鱼（咸）",
    group: 17,
    expression: "C*(157/100)/1000"
  },
  {
    id: 638,
    title: "肉松",
    group: 17,
    expression: "C*(79/100)/1000"
  },
  {
    id: 639,
    title: "猪肉松",
    group: 17,
    expression: "C*(396/100)/1000"
  },
  {
    id: 640,
    title: "火腿心全精肉",
    group: 17,
    expression: "C*(805/100)/1000"
  },
  {
    id: 641,
    title: "牛肉干（长富牌）",
    group: 17,
    expression: "C*(443/100)/1000"
  },
  {
    id: 642,
    title: "卤煮鸡",
    group: 17,
    expression: "C*(212/100)/1000"
  },
  {
    id: 643,
    title: "烤鸡",
    group: 17,
    expression: "C*(265/100)/1000"
  },
  {
    id: 644,
    title: "酱肘子",
    group: 17,
    expression: "C*(202/100)/1000"
  },
  {
    id: 645,
    title: "肉酥",
    group: 17,
    expression: "C*(509/100)/1000"
  },
  {
    id: 646,
    title: "咸鲅鱼",
    group: 17,
    expression: "C*(417/100)/1000"
  },
  {
    id: 647,
    title: "牛肉松",
    group: 17,
    expression: "C*(445/100)/1000"
  },
  {
    id: 648,
    title: "墨鱼（干）",
    group: 17,
    expression: "C*(287/100)/1000"
  },
  {
    id: 649,
    title: "咖喱牛肉干",
    group: 17,
    expression: "C*(123/100)/1000"
  },
  {
    id: 650,
    title: "火腿心肉",
    group: 17,
    expression: "C*(528/100)/1000"
  },
  {
    id: 651,
    title: "圆腿",
    group: 17,
    expression: "C*(139/100)/1000"
  },
  {
    id: 652,
    title: "鱼片干",
    group: 17,
    expression: "C*(303/100)/1000"
  },
  {
    id: 653,
    title: "牛肉干（沙爹牌）",
    group: 17,
    expression: "C*(171/100)/1000"
  },
  {
    id: 654,
    title: "腊肠",
    group: 17,
    expression: "C*(584/100)/1000"
  },
  {
    id: 655,
    title: "培根",
    group: 17,
    expression: "C*(181/100)/1000"
  },
  {
    id: 656,
    title: "酱牛肉",
    group: 17,
    expression: "C*(246/100)/1000"
  },
  {
    id: 657,
    title: "午餐肉",
    group: 17,
    expression: "C*(229/100)/1000"
  },
  {
    id: 658,
    title: "火腿",
    group: 17,
    expression: "C*(330/100)/1000"
  },
  {
    id: 659,
    title: "儿童肠",
    group: 17,
    expression: "C*(232/100)/1000"
  },
  {
    id: 660,
    title: "酱排骨",
    group: 17,
    expression: "C*(366/100)/1000"
  },
  {
    id: 661,
    title: "腊肉",
    group: 17,
    expression: "C*(498/100)/1000"
  },
  {
    id: 662,
    title: "热狗（原味）",
    group: 17,
    expression: "C*(25/100)/1000"
  },
  {
    id: 663,
    title: "酱汁肉",
    group: 17,
    expression: "C*(549/100)/1000"
  },
  {
    id: 664,
    title: "箭鱼",
    group: 17,
    expression: "C*(271/100)/1000"
  },
  {
    id: 665,
    title: "大肉肠",
    group: 17,
    expression: "C*(273/100)/1000"
  },
  {
    id: 666,
    title: "小红肠",
    group: 17,
    expression: "C*(280/100)/1000"
  },
  {
    id: 667,
    title: "熏草鱼",
    group: 17,
    expression: "C*(283/100)/1000"
  },
  {
    id: 668,
    title: "香肠",
    group: 17,
    expression: "C*(508/100)/1000"
  },
  {
    id: 669,
    title: "烤鸭（全聚德牌）",
    group: 17,
    expression: "C*(530/100)/1000"
  },
  {
    id: 670,
    title: "蒜肠",
    group: 17,
    expression: "C*(309/100)/1000"
  },
  {
    id: 671,
    title: "烤羊肉串",
    group: 17,
    expression: "C*(309/100)/1000"
  },
  {
    id: 672,
    title: "肯德基炸鸡",
    group: 17,
    expression: "C*(279/100)/1000"
  },
  {
    id: 673,
    title: "鲮鱼（罐头）",
    group: 17,
    expression: "C*(399/100)/1000"
  },
  {
    id: 674,
    title: "大腊肠",
    group: 17,
    expression: "C*(267/100)/1000"
  },
  {
    id: 675,
    title: "酱鸭",
    group: 17,
    expression: "C*(266/100)/1000"
  },
  {
    id: 676,
    title: "北京烤鸭",
    group: 17,
    expression: "C*(436/100)/1000"
  },
  {
    id: 677,
    title: "脆皮肠",
    group: 17,
    expression: "C*(302/100)/1000"
  },
  {
    id: 678,
    title: "牛肉干",
    group: 17,
    expression: "C*(550/100)/1000"
  },
  {
    id: 679,
    title: "咸肉",
    group: 17,
    expression: "C*(390/100)/1000"
  },
  {
    id: 680,
    title: "丁香鱼（干）",
    group: 17,
    expression: "C*(196/100)/1000"
  },
  {
    id: 681,
    title: "猪肉脯",
    group: 17,
    expression: "C*(635/100)/1000"
  },
  {
    id: 682,
    title: "广东香肠",
    group: 17,
    expression: "C*(433/100)/1000"
  },
  {
    id: 683,
    title: "羊大肠",
    group: 18,
    expression: "C*(75/100)/1000"
  },
  {
    id: 684,
    title: "羊肚",
    group: 18,
    expression: "C*(87/100)/1000"
  },
  {
    id: 685,
    title: "羊心",
    group: 18,
    expression: "C*(113/100)/1000"
  },
  {
    id: 686,
    title: "羊血",
    group: 18,
    expression: "C*(57/100)/1000"
  },
  {
    id: 687,
    title: "猪肺",
    group: 18,
    expression: "C*(84/100)/1000"
  },
  {
    id: 688,
    title: "羊肺",
    group: 18,
    expression: "C*(192/100)/1000"
  },
  {
    id: 689,
    title: "猪肚",
    group: 18,
    expression: "C*(110/100)/1000"
  },
  {
    id: 690,
    title: "鸭盹",
    group: 18,
    expression: "C*(92/100)/1000"
  },
  {
    id: 691,
    title: "猪心",
    group: 18,
    expression: "C*(119/100)/1000"
  },
  {
    id: 692,
    title: "羊肝",
    group: 18,
    expression: "C*(268/100)/1000"
  },
  {
    id: 693,
    title: "猪血",
    group: 18,
    expression: "C*(55/100)/1000"
  },
  {
    id: 694,
    title: "鸭舌（鸭条）",
    group: 18,
    expression: "C*(245/100)/1000"
  },
  {
    id: 695,
    title: "牛百叶",
    group: 18,
    expression: "C*(70/100)/1000"
  },
  {
    id: 696,
    title: "牛大肠",
    group: 18,
    expression: "C*(396/100)/1000"
  },
  {
    id: 697,
    title: "鸡心",
    group: 18,
    expression: "C*(172/100)/1000"
  },
  {
    id: 698,
    title: "猪肾",
    group: 18,
    expression: "C*(96/100)/1000"
  },
  {
    id: 699,
    title: "猪小肠",
    group: 18,
    expression: "C*(65/100)/1000"
  },
  {
    id: 700,
    title: "鸡血",
    group: 18,
    expression: "C*(49/100)/1000"
  },
  {
    id: 701,
    title: "牛舌",
    group: 18,
    expression: "C*(49/100)/1000"
  },
  {
    id: 702,
    title: "鹅盹",
    group: 18,
    expression: "C*(100/100)/1000"
  },
  {
    id: 703,
    title: "猪腰子",
    group: 18,
    expression: "C*(137/100)/1000"
  },
  {
    id: 704,
    title: "鸭肝",
    group: 18,
    expression: "C*(128/100)/1000"
  },
  {
    id: 705,
    title: "鹅肝",
    group: 18,
    expression: "C*(129/100)/1000"
  },
  {
    id: 706,
    title: "鸭肠",
    group: 18,
    expression: "C*(129/100)/1000"
  },
  {
    id: 707,
    title: "牛肚",
    group: 18,
    expression: "C*(72/100)/1000"
  },
  {
    id: 708,
    title: "卤猪杂",
    group: 18,
    expression: "C*(186/100)/1000"
  },
  {
    id: 709,
    title: "猪舌",
    group: 18,
    expression: "C*(233/100)/1000"
  },
  {
    id: 710,
    title: "猪脑",
    group: 18,
    expression: "C*(131/100)/1000"
  },
  {
    id: 711,
    title: "鸭血",
    group: 18,
    expression: "C*(108/100)/1000"
  },
  {
    id: 712,
    title: "鸡肝",
    group: 18,
    expression: "C*(121/100)/1000"
  },
  {
    id: 713,
    title: "猪肝",
    group: 18,
    expression: "C*(129/100)/1000"
  },
  {
    id: 714,
    title: "猪大肠",
    group: 18,
    expression: "C*(196/100)/1000"
  },
  {
    id: 715,
    title: "鸡盹",
    group: 18,
    expression: "C*(118/100)/1000"
  },
  {
    id: 716,
    title: "火鸡肝",
    group: 18,
    expression: "C*(286/100)/1000"
  },
  {
    id: 717,
    title: "猪胆肝",
    group: 18,
    expression: "C*(336/100)/1000"
  },
  {
    id: 718,
    title: "瓦罐鸡汤（汤）",
    group: 19,
    expression: "C*(27/100)/1000"
  },
  {
    id: 719,
    title: "鹌鹑",
    group: 19,
    expression: "C*(110/100)/1000"
  },
  {
    id: 720,
    title: "鸡胸脯肉",
    group: 19,
    expression: "C*(133/100)/1000"
  },
  {
    id: 721,
    title: "鸭掌",
    group: 19,
    expression: "C*(150/100)/1000"
  },
  {
    id: 722,
    title: "野山鸡",
    group: 19,
    expression: "C*(126/100)/1000"
  },
  {
    id: 723,
    title: "鸭胸脯肉",
    group: 19,
    expression: "C*(90/100)/1000"
  },
  {
    id: 724,
    title: "鸡腿",
    group: 19,
    expression: "C*(181/100)/1000"
  },
  {
    id: 725,
    title: "鸡块（带浆粉）",
    group: 19,
    expression: "C*(206/100)/1000"
  },
  {
    id: 726,
    title: "鸭翅",
    group: 19,
    expression: "C*(146/100)/1000"
  },
  {
    id: 727,
    title: "鸡爪",
    group: 19,
    expression: "C*(254/100)/1000"
  },
  {
    id: 728,
    title: "鸽",
    group: 19,
    expression: "C*(201/100)/1000"
  },
  {
    id: 729,
    title: "童子鸡",
    group: 19,
    expression: "C*(226/100)/1000"
  },
  {
    id: 730,
    title: "乌骨鸡",
    group: 19,
    expression: "C*(111/100)/1000"
  },
  {
    id: 731,
    title: "土鸡",
    group: 19,
    expression: "C*(124/100)/1000"
  },
  {
    id: 732,
    title: "肉鸡",
    group: 19,
    expression: "C*(389/100)/1000"
  },
  {
    id: 733,
    title: "鸡翅",
    group: 19,
    expression: "C*(194/100)/1000"
  },
  {
    id: 734,
    title: "鸡",
    group: 19,
    expression: "C*(167/100)/1000"
  },
  {
    id: 735,
    title: "火鸡腿",
    group: 19,
    expression: "C*(173/100)/1000"
  },
  {
    id: 736,
    title: "扒鸡",
    group: 19,
    expression: "C*(217/100)/1000"
  },
  {
    id: 737,
    title: "辣鸡翅",
    group: 19,
    expression: "C*(226/100)/1000"
  },
  {
    id: 738,
    title: "鹅",
    group: 19,
    expression: "C*(251/100)/1000"
  },
  {
    id: 739,
    title: "盐水鸭（熟）",
    group: 19,
    expression: "C*(313/100)/1000"
  },
  {
    id: 740,
    title: "华青鸡",
    group: 19,
    expression: "C*(254/100)/1000"
  },
  {
    id: 741,
    title: "红烧鸭",
    group: 19,
    expression: "C*(270/100)/1000"
  },
  {
    id: 742,
    title: "瓦罐鸡汤（肉）",
    group: 19,
    expression: "C*(190/100)/1000"
  },
  {
    id: 743,
    title: "扒鸡（五香脱骨）",
    group: 19,
    expression: "C*(206/100)/1000"
  },
  {
    id: 744,
    title: "鸭",
    group: 19,
    expression: "C*(240/100)/1000"
  },
  {
    id: 745,
    title: "新奥尔良鸡翅",
    group: 19,
    expression: "C*(336/100)/1000"
  },
  {
    id: 746,
    title: "母鸡",
    group: 19,
    expression: "C*(256/100)/1000"
  },
  {
    id: 747,
    title: "公麻鸭",
    group: 19,
    expression: "C*(360/100)/1000"
  },
  {
    id: 748,
    title: "中老年奶粉（森永牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(418/100)/1000"
  },
  {
    id: 749,
    title: "奶粉（可淇牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(432/100)/1000"
  },
  {
    id: 750,
    title: "全脂牛奶粉",
    group: 20,
    infla_score: -0.036,
    expression: "C*(478/100)/1000"
  },
  {
    id: 751,
    title: "强化奶粉",
    group: 20,
    infla_score: -0.036,
    expression: "C*(51/100)/1000"
  },
  {
    id: 752,
    title: "牛乳（西得牛）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(60/100)/1000"
  },
  {
    id: 753,
    title: "羊奶",
    group: 20,
    infla_score: -0.036,
    expression: "C*(59/100)/1000"
  },
  {
    id: 754,
    title: "酸奶（果料）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(83/100)/1000"
  },
  {
    id: 755,
    title: "全脂速溶奶粉",
    group: 20,
    infla_score: -0.036,
    expression: "C*(466/100)/1000"
  },
  {
    id: 756,
    title: "牛乳（部分脱脂，帕玛拉特）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(43/100)/1000"
  },
  {
    id: 757,
    title: "酸奶（高蛋白）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(62/100)/1000"
  },
  {
    id: 758,
    title: "中脂酸奶",
    group: 20,
    infla_score: -0.036,
    expression: "C*(64/100)/1000"
  },
  {
    id: 759,
    title: "黄油渣",
    group: 20,
    infla_score: -0.036,
    expression: "C*(599/100)/1000"
  },
  {
    id: 760,
    title: "酸奶（果粒）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(97/100)/1000"
  },
  {
    id: 761,
    title: "牛乳（光明牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(61/100)/1000"
  },
  {
    id: 762,
    title: "牛乳（X）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(54/100)/1000"
  },
  {
    id: 763,
    title: "全脂奶粉（雀巢）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(126/100)/1000"
  },
  {
    id: 764,
    title: "牛乳（完达山牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(60/100)/1000"
  },
  {
    id: 765,
    title: "酸奶（脱脂）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(142/100)/1000"
  },
  {
    id: 766,
    title: "牛乳",
    group: 20,
    infla_score: -0.036,
    expression: "C*(148/100)/1000"
  },
  {
    id: 767,
    title: "牛乳（强化锌、钙，帕玛拉特）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(60/100)/1000"
  },
  {
    id: 768,
    title: "牛乳（伊利牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(68/100)/1000"
  },
  {
    id: 769,
    title: "全脂奶粉（伊利）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(151/100)/1000"
  },
  {
    id: 770,
    title: "牛乳（蒙牛牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(67/100)/1000"
  },
  {
    id: 771,
    title: "牛乳（帕玛拉特牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(153/100)/1000"
  },
  {
    id: 772,
    title: "酸奶（X）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(72/100)/1000"
  },
  {
    id: 773,
    title: "牛乳（龙丹牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(165/100)/1000"
  },
  {
    id: 774,
    title: "牛奶",
    group: 20,
    infla_score: -0.036,
    expression: "C*(79/100)/1000"
  },
  {
    id: 775,
    title: "学生奶",
    group: 20,
    infla_score: -0.036,
    expression: "C*(66/100)/1000"
  },
  {
    id: 776,
    title: "酸奶（调味）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(88/100)/1000"
  },
  {
    id: 777,
    title: "奶片",
    group: 20,
    infla_score: -0.036,
    expression: "C*(377/100)/1000"
  },
  {
    id: 779,
    title: "中老年奶粉（三鹿牌）",
    group: 20,
    infla_score: -0.036,
    expression: "C*(403/100)/1000"
  },
  {
    id: 780,
    title: "中老年奶粉",
    group: 20,
    infla_score: -0.036,
    expression: "C*(858/100)/1000"
  },
  {
    id: 781,
    title: "牛乳粉",
    group: 20,
    infla_score: -0.036,
    expression: "C*(484/100)/1000"
  },
  {
    id: 782,
    title: "蛋类",
    group: 21,
    expression: "C*(160/100)/1000"
  },
  {
    id: 783,
    title: "白皮鸡蛋",
    group: 21,
    expression: "C*(138/100)/1000"
  },
  {
    id: 784,
    title: "煮鸡蛋",
    group: 21,
    expression: "C*(151/100)/1000"
  },
  {
    id: 785,
    title: "鸡蛋",
    group: 21,
    expression: "C*(346/100)/1000"
  },
  {
    id: 786,
    title: "鸡蛋白",
    group: 21,
    expression: "C*(60/100)/1000"
  },
  {
    id: 787,
    title: "鸭蛋白",
    group: 21,
    expression: "C*(47/100)/1000"
  },
  {
    id: 788,
    title: "鸭蛋",
    group: 21,
    expression: "C*(180/100)/1000"
  },
  {
    id: 789,
    title: "红皮鸡蛋",
    group: 21,
    expression: "C*(156/100)/1000"
  },
  {
    id: 790,
    title: "藏鸡蛋",
    group: 21,
    expression: "C*(162/100)/1000"
  },
  {
    id: 791,
    title: "土鸡蛋",
    group: 21,
    expression: "C*(138/100)/1000"
  },
  {
    id: 792,
    title: "毛蛋",
    group: 21,
    expression: "C*(176/100)/1000"
  },
  {
    id: 793,
    title: "鹅蛋",
    group: 21,
    expression: "C*(196/100)/1000"
  },
  {
    id: 794,
    title: "咸鸭蛋煮",
    group: 21,
    expression: "C*(177/100)/1000"
  },
  {
    id: 795,
    title: "松花蛋",
    group: 21,
    expression: "C*(178/100)/1000"
  },
  {
    id: 796,
    title: "油煎荷包蛋",
    group: 21,
    expression: "C*(199/100)/1000"
  },
  {
    id: 797,
    title: "咸鸭蛋",
    group: 21,
    expression: "C*(190/100)/1000"
  },
  {
    id: 799,
    title: "煮荷包蛋",
    group: 21,
    expression: "C*(164/100)/1000"
  },
  {
    id: 801,
    title: "鹅蛋（煮）",
    group: 21,
    expression: "C*(182/100)/1000"
  },
  {
    id: 802,
    title: "鸡蛋黄",
    group: 21,
    expression: "C*(328/100)/1000"
  },
  {
    id: 803,
    title: "尖嘴白",
    group: 22,
    expression: "C*(137/100)/1000"
  },
  {
    id: 804,
    title: "黄鲂【赤虹，老板鱼】",
    group: 22,
    expression: "C*(81/100)/1000"
  },
  {
    id: 805,
    title: "鳕鱼（烤）",
    group: 22,
    expression: "C*(96/100)/1000"
  },
  {
    id: 806,
    title: "鲨鱼【真鲨，白斑角鲨】",
    group: 22,
    expression: "C*(118/100)/1000"
  },
  {
    id: 807,
    title: "白条鱼",
    group: 22,
    expression: "C*(103/100)/1000"
  },
  {
    id: 808,
    title: "银鱼",
    group: 22,
    expression: "C*(105/100)/1000"
  },
  {
    id: 809,
    title: "鳕鱼（炸）",
    group: 22,
    expression: "C*(235/100)/1000"
  },
  {
    id: 810,
    title: "猴鱼",
    group: 22,
    expression: "C*(114/100)/1000"
  },
  {
    id: 811,
    title: "黄鱼（小黄花鱼）",
    group: 22,
    expression: "C*(99/100)/1000"
  },
  {
    id: 812,
    title: "鱼奇油【鱼露，虾油】",
    group: 22,
    expression: "C*(47/100)/1000"
  },
  {
    id: 813,
    title: "武昌鱼",
    group: 22,
    expression: "C*(135/100)/1000"
  },
  {
    id: 814,
    title: "鲮鱼",
    group: 22,
    expression: "C*(95/100)/1000"
  },
  {
    id: 815,
    title: "鲚鱼（小）[小凤尾鱼]",
    group: 22,
    expression: "C*(124/100)/1000"
  },
  {
    id: 816,
    title: "鲤鱼",
    group: 22,
    expression: "C*(109/100)/1000"
  },
  {
    id: 817,
    title: "沙丁鱼",
    group: 22,
    expression: "C*(89/100)/1000"
  },
  {
    id: 818,
    title: "鲹鱼",
    group: 22,
    expression: "C*(124/100)/1000"
  },
  {
    id: 819,
    title: "比目鱼",
    group: 22,
    expression: "C*(112/100)/1000"
  },
  {
    id: 820,
    title: "黄鱼（大黄花鱼）",
    group: 22,
    expression: "C*(97/100)/1000"
  },
  {
    id: 822,
    title: "裸鲤鱼",
    group: 22,
    expression: "C*(124/100)/1000"
  },
  {
    id: 823,
    title: "带鱼",
    group: 22,
    expression: "C*(127/100)/1000"
  },
  {
    id: 824,
    title: "桂鱼",
    group: 22,
    expression: "C*(117/100)/1000"
  },
  {
    id: 825,
    title: "胡子鮎",
    group: 22,
    expression: "C*(146/100)/1000"
  },
  {
    id: 826,
    title: "青鱼",
    group: 22,
    expression: "C*(118/100)/1000"
  },
  {
    id: 827,
    title: "梅童鱼（大头仔鱼、丁珠鱼）",
    group: 22,
    expression: "C*(121/100)/1000"
  },
  {
    id: 828,
    title: "鱼排",
    group: 22,
    expression: "C*(160/100)/1000"
  },
  {
    id: 829,
    title: "罗非鱼",
    group: 22,
    expression: "C*(98/100)/1000"
  },
  {
    id: 830,
    title: "鲫鱼",
    group: 22,
    expression: "C*(108/100)/1000"
  },
  {
    id: 831,
    title: "胖头鱼",
    group: 22,
    expression: "C*(100/100)/1000"
  },
  {
    id: 832,
    title: "沙丁鱼（茄汁，熟）",
    group: 22,
    expression: "C*(155/100)/1000"
  },
  {
    id: 833,
    title: "鲢鱼",
    group: 22,
    expression: "C*(104/100)/1000"
  },
  {
    id: 835,
    title: "黄颡鱼【戈牙鱼，黄鳍鱼】",
    group: 22,
    expression: "C*(124/100)/1000"
  },
  {
    id: 836,
    title: "鲳鱼",
    group: 22,
    expression: "C*(140/100)/1000"
  },
  {
    id: 837,
    title: "草鱼",
    group: 22,
    expression: "C*(113/100)/1000"
  },
  {
    id: 838,
    title: "鳕鱼",
    group: 22,
    expression: "C*(88/100)/1000"
  },
  {
    id: 840,
    title: "青砖鱼",
    group: 22,
    expression: "C*(155/100)/1000"
  },
  {
    id: 842,
    title: "鲮鱼（豆豉，熟）",
    group: 22,
    expression: "C*(472/100)/1000"
  },
  {
    id: 843,
    title: "黑鱼",
    group: 22,
    expression: "C*(85/100)/1000"
  },
  {
    id: 844,
    title: "鲈鱼",
    group: 22,
    expression: "C*(105/100)/1000"
  },
  {
    id: 845,
    title: "海鲫鱼",
    group: 22,
    expression: "C*(206/100)/1000"
  },
  {
    id: 846,
    title: "黄姑鱼",
    group: 22,
    expression: "C*(137/100)/1000"
  },
  {
    id: 847,
    title: "鮎鱼",
    group: 22,
    expression: "C*(103/100)/1000"
  },
  {
    id: 849,
    title: "鲅鱼",
    group: 22,
    expression: "C*(121/100)/1000"
  },
  {
    id: 850,
    title: "白菇鱼",
    group: 22,
    expression: "C*(150/100)/1000"
  },
  {
    id: 852,
    title: "口头鱼",
    group: 22,
    expression: "C*(134/100)/1000"
  },
  {
    id: 853,
    title: "鱼子酱",
    group: 22,
    expression: "C*(204/100)/1000"
  },
  {
    id: 854,
    title: "鲭鱼（煮）",
    group: 22,
    expression: "C*(189/100)/1000"
  },
  {
    id: 855,
    title: "鲭鱼（蒸）",
    group: 22,
    expression: "C*(392/100)/1000"
  },
  {
    id: 856,
    title: "金枪鱼（油浸）",
    group: 22,
    expression: "C*(189/100)/1000"
  },
  {
    id: 857,
    title: "沙丁鱼（盐水浸）",
    group: 22,
    expression: "C*(89/100)/1000"
  },
  {
    id: 858,
    title: "东方对虾",
    group: 23,
    expression: "C*(84/100)/1000"
  },
  {
    id: 859,
    title: "虾仁",
    group: 23,
    expression: "C*(48/100)/1000"
  },
  {
    id: 860,
    title: "白米虾",
    group: 23,
    expression: "C*(81/100)/1000"
  },
  {
    id: 861,
    title: "海虾",
    group: 23,
    expression: "C*(79/100)/1000"
  },
  {
    id: 862,
    title: "刺蛄",
    group: 23,
    expression: "C*(24/100)/1000"
  },
  {
    id: 863,
    title: "对虾",
    group: 23,
    expression: "C*(93/100)/1000"
  },
  {
    id: 864,
    title: "鳌虾",
    group: 23,
    expression: "C*(23/100)/1000"
  },
  {
    id: 865,
    title: "虾米",
    group: 23,
    expression: "C*(198/100)/1000"
  },
  {
    id: 866,
    title: "斑节对虾",
    group: 23,
    expression: "C*(103/100)/1000"
  },
  {
    id: 867,
    title: "虾皮",
    group: 23,
    expression: "C*(153/100)/1000"
  },
  {
    id: 868,
    title: "虾虎",
    group: 23,
    expression: "C*(81/100)/1000"
  },
  {
    id: 869,
    title: "基围虾",
    group: 23,
    expression: "C*(101/100)/1000"
  },
  {
    id: 870,
    title: "长毛对虾（大虾、白露虾）",
    group: 23,
    expression: "C*(90/100)/1000"
  },
  {
    id: 871,
    title: "龙虾",
    group: 23,
    expression: "C*(90/100)/1000"
  },
  {
    id: 872,
    title: "塘水虾[草虾]",
    group: 23,
    expression: "C*(24/100)/1000"
  },
  {
    id: 873,
    title: "河虾",
    group: 23,
    expression: "C*(87/100)/1000"
  },
  {
    id: 874,
    title: "明虾",
    group: 23,
    expression: "C*(85/100)/1000"
  },
  {
    id: 875,
    title: "江虾",
    group: 23,
    expression: "C*(87/100)/1000"
  },
  {
    id: 876,
    title: "螺蛳",
    group: 24,
    expression: "C*(59/100)/1000"
  },
  {
    id: 877,
    title: "扇贝（鲜）",
    group: 24,
    expression: "C*(60/100)/1000"
  },
  {
    id: 878,
    title: "牛蛙",
    group: 24,
    expression: "C*(81/100)/1000"
  },
  {
    id: 879,
    title: "海参（水浸）",
    group: 24,
    expression: "C*(24/100)/1000"
  },
  {
    id: 880,
    title: "蛏子",
    group: 24,
    expression: "C*(24/100)/1000"
  },
  {
    id: 881,
    title: "河蟹",
    group: 24,
    expression: "C*(103/100)/1000"
  },
  {
    id: 882,
    title: "河蚬[蚬子]",
    group: 24,
    expression: "C*(47/100)/1000"
  },
  {
    id: 883,
    title: "海蛰皮",
    group: 24,
    expression: "C*(33/100)/1000"
  },
  {
    id: 884,
    title: "田鸡（青蛙）",
    group: 24,
    expression: "C*(24/100)/1000"
  },
  {
    id: 885,
    title: "水蛇",
    group: 24,
    expression: "C*(90/100)/1000"
  },
  {
    id: 886,
    title: "螺",
    group: 24,
    expression: "C*(100/100)/1000"
  },
  {
    id: 887,
    title: "河蚌",
    group: 24,
    expression: "C*(54/100)/1000"
  },
  {
    id: 888,
    title: "黄鳝",
    group: 24,
    expression: "C*(89/100)/1000"
  },
  {
    id: 889,
    title: "墨鱼【曼氏无针乌贼】",
    group: 24,
    expression: "C*(83/100)/1000"
  },
  {
    id: 890,
    title: "乌鱼蛋",
    group: 24,
    expression: "C*(89/100)/1000"
  },
  {
    id: 891,
    title: "海蜇头",
    group: 24,
    expression: "C*(74/100)/1000"
  },
  {
    id: 892,
    title: "黄鳝丝",
    group: 24,
    expression: "C*(69/100)/1000"
  },
  {
    id: 894,
    title: "海蟹",
    group: 24,
    expression: "C*(95/100)/1000"
  },
  {
    id: 895,
    title: "梭子蟹",
    group: 24,
    expression: "C*(95/100)/1000"
  },
  {
    id: 896,
    title: "田螺",
    group: 24,
    expression: "C*(60/100)/1000"
  },
  {
    id: 897,
    title: "花蛤蜊",
    group: 24,
    expression: "C*(45/100)/1000"
  },
  {
    id: 898,
    title: "鲍鱼（杂色鲍）",
    group: 24,
    expression: "C*(84/100)/1000"
  },
  {
    id: 899,
    title: "鱿鱼",
    group: 24,
    expression: "C*(75/100)/1000"
  },
  {
    id: 900,
    title: "蟹肉",
    group: 24,
    expression: "C*(62/100)/1000"
  },
  {
    id: 901,
    title: "墨鱼丸",
    group: 24,
    expression: "C*(64/100)/1000"
  },
  {
    id: 902,
    title: "蛤蜊",
    group: 24,
    expression: "C*(62/100)/1000"
  },
  {
    id: 903,
    title: "鲜贝",
    group: 24,
    expression: "C*(77/100)/1000"
  },
  {
    id: 904,
    title: "乌贼",
    group: 24,
    expression: "C*(84/100)/1000"
  },
  {
    id: 905,
    title: "红螺",
    group: 24,
    expression: "C*(119/100)/1000"
  },
  {
    id: 906,
    title: "海参",
    group: 24,
    expression: "C*(78/100)/1000"
  },
  {
    id: 907,
    title: "甲鱼",
    group: 24,
    expression: "C*(118/100)/1000"
  },
  {
    id: 908,
    title: "牡蛎（海蛎子）",
    group: 24,
    expression: "C*(73/100)/1000"
  },
  {
    id: 909,
    title: "章鱼",
    group: 24,
    expression: "C*(135/100)/1000"
  },
  {
    id: 910,
    title: "泥鳅",
    group: 24,
    expression: "C*(96/100)/1000"
  },
  {
    id: 911,
    title: "鲍鱼（干）",
    group: 24,
    expression: "C*(322/100)/1000"
  },
  {
    id: 912,
    title: "鱿鱼（干）【台湾枪乌贼】",
    group: 24,
    expression: "C*(313/100)/1000"
  },
  {
    id: 913,
    title: "扇贝（干）（干贝）",
    group: 24,
    expression: "C*(264/100)/1000"
  },
  {
    id: 914,
    title: "醪糟",
    group: 25,
    expression: "C*(103/100)/1000"
  },
  {
    id: 915,
    title: "凉粉",
    group: 25,
    expression: "C*(37/100)/1000"
  },
  {
    id: 916,
    title: "油茶",
    group: 25,
    expression: "C*(94/100)/1000"
  },
  {
    id: 917,
    title: "汤泡",
    group: 25,
    expression: "C*(236/100)/1000"
  },
  {
    id: 918,
    title: "过桥米线",
    group: 25,
    expression: "C*(92/100)/1000"
  },
  {
    id: 919,
    title: "凉粉（带调料）",
    group: 25,
    expression: "C*(51/100)/1000"
  },
  {
    id: 920,
    title: "艾窝窝",
    group: 25,
    expression: "C*(190/100)/1000"
  },
  {
    id: 921,
    title: "灌肠",
    group: 25,
    expression: "C*(134/100)/1000"
  },
  {
    id: 922,
    title: "糌粑（稞麦熟品）",
    group: 25,
    expression: "C*(257/100)/1000"
  },
  {
    id: 923,
    title: "酿皮",
    group: 25,
    expression: "C*(300/100)/1000"
  },
  {
    id: 924,
    title: "偶米饭团",
    group: 25,
    expression: "C*(333/100)/1000"
  },
  {
    id: 925,
    title: "煎饼",
    group: 25,
    expression: "C*(336/100)/1000"
  },
  {
    id: 926,
    title: "热干面",
    group: 25,
    expression: "C*(152/100)/1000"
  },
  {
    id: 927,
    title: "三鲜豆皮",
    group: 25,
    expression: "C*(237/100)/1000"
  },
  {
    id: 928,
    title: "香油炒面",
    group: 25,
    expression: "C*(580/100)/1000"
  },
  {
    id: 929,
    title: "春卷",
    group: 25,
    expression: "C*(463/100)/1000"
  },
  {
    id: 930,
    title: "铁板牛肉炒面",
    group: 25,
    expression: "C*(438/100)/1000"
  },
  {
    id: 931,
    title: "果冻（草莓水果冻）",
    group: 26,
    expression: "C*(71/100)/1000"
  },
  {
    id: 932,
    title: "雪米饼",
    group: 26,
    expression: "C*(463/100)/1000"
  },
  {
    id: 933,
    title: "西瓜脯",
    group: 26,
    expression: "C*(311/100)/1000"
  },
  {
    id: 934,
    title: "杏干",
    group: 26,
    expression: "C*(220/100)/1000"
  },
  {
    id: 935,
    title: "海苔",
    group: 26,
    expression: "C*(177/100)/1000"
  },
  {
    id: 936,
    title: "果冻（AD钙果冻）",
    group: 26,
    expression: "C*(70/100)/1000"
  },
  {
    id: 937,
    title: "芝麻桃酥",
    group: 26,
    expression: "C*(480/100)/1000"
  },
  {
    id: 938,
    title: "苹果罐头",
    group: 26,
    expression: "C*(120/100)/1000"
  },
  {
    id: 939,
    title: "果冻（椰奶果冻）",
    group: 26,
    expression: "C*(80/100)/1000"
  },
  {
    id: 940,
    title: "奶油五香豆",
    group: 26,
    expression: "C*(220/100)/1000"
  },
  {
    id: 941,
    title: "锅巴",
    group: 26,
    expression: "C*(554/100)/1000"
  },
  {
    id: 942,
    title: "多味山楂",
    group: 26,
    expression: "C*(249/100)/1000"
  },
  {
    id: 943,
    title: "奶油蛋糕",
    group: 26,
    expression: "C*(378/100)/1000"
  },
  {
    id: 944,
    title: "面包（X）",
    group: 26,
    expression: "C*(312/100)/1000"
  },
  {
    id: 945,
    title: "香酥兰花豆",
    group: 26,
    expression: "C*(220/100)/1000"
  },
  {
    id: 946,
    title: "九制梅肉",
    group: 26,
    expression: "C*(257/100)/1000"
  },
  {
    id: 947,
    title: "黄油面包",
    group: 26,
    expression: "C*(329/100)/1000"
  },
  {
    id: 948,
    title: "鱼肉粒",
    group: 26,
    expression: "C*(376/100)/1000"
  },
  {
    id: 949,
    title: "薯片（香辣味）",
    group: 26,
    expression: "C*(555/100)/1000"
  },
  {
    id: 950,
    title: "绿豆饼",
    group: 26,
    expression: "C*(122/100)/1000"
  },
  {
    id: 951,
    title: "月饼（蛋黄）",
    group: 26,
    expression: "C*(399/100)/1000"
  },
  {
    id: 952,
    title: "早餐奶",
    group: 26,
    expression: "C*(68/100)/1000"
  },
  {
    id: 953,
    title: "山楂条",
    group: 26,
    expression: "C*(150/100)/1000"
  },
  {
    id: 954,
    title: "山楂脯",
    group: 26,
    expression: "C*(153/100)/1000"
  },
  {
    id: 955,
    title: "桃脯",
    group: 26,
    expression: "C*(310/100)/1000"
  },
  {
    id: 956,
    title: "蛋酥卷",
    group: 26,
    expression: "C*(523/100)/1000"
  },
  {
    id: 957,
    title: "蛋糕（黄蛋糕）",
    group: 26,
    expression: "C*(320/100)/1000"
  },
  {
    id: 958,
    title: "月饼（桂花板栗）",
    group: 26,
    expression: "C*(320/100)/1000"
  },
  {
    id: 959,
    title: "阿胶枣",
    group: 26,
    expression: "C*(334/100)/1000"
  },
  {
    id: 960,
    title: "绿豆糕",
    group: 26,
    expression: "C*(349/100)/1000"
  },
  {
    id: 961,
    title: "VC饼干",
    group: 26,
    expression: "C*(444/100)/1000"
  },
  {
    id: 962,
    title: "板油酥饼",
    group: 26,
    expression: "C*(359/100)/1000"
  },
  {
    id: 963,
    title: "山楂果丹皮",
    group: 26,
    expression: "C*(189/100)/1000"
  },
  {
    id: 964,
    title: "麦维面包",
    group: 26,
    expression: "C*(189/100)/1000"
  },
  {
    id: 965,
    title: "油炸豆瓣",
    group: 26,
    expression: "C*(194/100)/1000"
  },
  {
    id: 966,
    title: "玉米花",
    group: 26,
    expression: "C*(203/100)/1000"
  },
  {
    id: 967,
    title: "苏打饼干",
    group: 26,
    expression: "C*(408/100)/1000"
  },
  {
    id: 968,
    title: "曲奇饼",
    group: 26,
    expression: "C*(546/100)/1000"
  },
  {
    id: 969,
    title: "黑麻香酥",
    group: 26,
    expression: "C*(218/100)/1000"
  },
  {
    id: 970,
    title: "钙奶饼干",
    group: 26,
    expression: "C*(444/100)/1000"
  },
  {
    id: 971,
    title: "饼干（夹心）",
    group: 26,
    expression: "C*(449/100)/1000"
  },
  {
    id: 972,
    title: "混糖糕点",
    group: 26,
    expression: "C*(453/100)/1000"
  },
  {
    id: 973,
    title: "地瓜干",
    group: 26,
    expression: "C*(226/100)/1000"
  },
  {
    id: 974,
    title: "硬皮糕点",
    group: 26,
    expression: "C*(463/100)/1000"
  },
  {
    id: 975,
    title: "多维面包",
    group: 26,
    expression: "C*(316/100)/1000"
  },
  {
    id: 976,
    title: "麦胚面包",
    group: 26,
    expression: "C*(246/100)/1000"
  },
  {
    id: 977,
    title: "沙琪玛",
    group: 26,
    expression: "C*(506/100)/1000"
  },
  {
    id: 978,
    title: "葡萄干面包",
    group: 26,
    expression: "C*(260/100)/1000"
  },
  {
    id: 979,
    title: "雪梅",
    group: 26,
    expression: "C*(260/100)/1000"
  },
  {
    id: 980,
    title: "曲奇饼（加奶油）",
    group: 26,
    expression: "C*(263/100)/1000"
  },
  {
    id: 981,
    title: "月饼（奶油果馅）",
    group: 26,
    expression: "C*(441/100)/1000"
  },
  {
    id: 982,
    title: "宫廷蛋糕",
    group: 26,
    expression: "C*(267/100)/1000"
  },
  {
    id: 983,
    title: "法式卷饼",
    group: 26,
    expression: "C*(267/100)/1000"
  },
  {
    id: 984,
    title: "米饼",
    group: 26,
    expression: "C*(268/100)/1000"
  },
  {
    id: 985,
    title: "椰圈面包",
    group: 26,
    expression: "C*(288/100)/1000"
  },
  {
    id: 986,
    title: "薯圈",
    group: 26,
    expression: "C*(288/100)/1000"
  },
  {
    id: 987,
    title: "蜜麻花",
    group: 26,
    expression: "C*(304/100)/1000"
  },
  {
    id: 988,
    title: "鸡腿酥",
    group: 26,
    expression: "C*(305/100)/1000"
  },
  {
    id: 989,
    title: "巧克力派",
    group: 26,
    expression: "C*(425/100)/1000"
  },
  {
    id: 990,
    title: "咸面包",
    group: 26,
    expression: "C*(274/100)/1000"
  },
  {
    id: 991,
    title: "茯苓夹饼",
    group: 26,
    expression: "C*(332/100)/1000"
  },
  {
    id: 992,
    title: "乐斯美面包",
    group: 26,
    expression: "C*(333/100)/1000"
  },
  {
    id: 993,
    title: "果料面包",
    group: 26,
    expression: "C*(347/100)/1000"
  },
  {
    id: 994,
    title: "江米条",
    group: 26,
    expression: "C*(351/100)/1000"
  },
  {
    id: 995,
    title: "牛角包",
    group: 26,
    expression: "C*(375/100)/1000"
  },
  {
    id: 996,
    title: "薯片（烧烤味）",
    group: 26,
    expression: "C*(548/100)/1000"
  },
  {
    id: 997,
    title: "德庆酥",
    group: 26,
    expression: "C*(386/100)/1000"
  },
  {
    id: 998,
    title: "麻香糕",
    group: 26,
    expression: "C*(401/100)/1000"
  },
  {
    id: 999,
    title: "开口笑",
    group: 26,
    expression: "C*(409/100)/1000"
  },
  {
    id: 1e3,
    title: "虾片",
    group: 26,
    expression: "C*(418/100)/1000"
  },
  {
    id: 1001,
    title: "奶油饼干",
    group: 26,
    expression: "C*(429/100)/1000"
  },
  {
    id: 1002,
    title: "蛋糕（X）",
    group: 26,
    expression: "C*(347/100)/1000"
  },
  {
    id: 1003,
    title: "香菇片",
    group: 26,
    expression: "C*(474/100)/1000"
  },
  {
    id: 1004,
    title: "夹心酥饼",
    group: 26,
    expression: "C*(481/100)/1000"
  },
  {
    id: 1005,
    title: "面包条（白）",
    group: 26,
    expression: "C*(283/100)/1000"
  },
  {
    id: 1006,
    title: "饼干（咸）",
    group: 26,
    expression: "C*(496/100)/1000"
  },
  {
    id: 1007,
    title: "桃酥",
    group: 26,
    expression: "C*(481/100)/1000"
  },
  {
    id: 1008,
    title: "苹果脯",
    group: 26,
    expression: "C*(511/100)/1000"
  },
  {
    id: 1009,
    title: "凤尾酥",
    group: 26,
    expression: "C*(511/100)/1000"
  },
  {
    id: 1010,
    title: "月饼（百寿宴点）",
    group: 26,
    expression: "C*(429/100)/1000"
  },
  {
    id: 1011,
    title: "月饼（豆沙）",
    group: 26,
    expression: "C*(405/100)/1000"
  },
  {
    id: 1012,
    title: "月饼（五仁）",
    group: 26,
    expression: "C*(416/100)/1000"
  },
  {
    id: 1013,
    title: "酥皮糕点",
    group: 26,
    expression: "C*(426/100)/1000"
  },
  {
    id: 1014,
    title: "牛奶饼干",
    group: 26,
    expression: "C*(408/100)/1000"
  },
  {
    id: 1015,
    title: "黑芝麻汤圆",
    group: 26,
    expression: "C*(311/100)/1000"
  },
  {
    id: 1016,
    title: "饼干",
    group: 26,
    expression: "C*(433/100)/1000"
  },
  {
    id: 1017,
    title: "麻花",
    group: 26,
    expression: "C*(524/100)/1000"
  },
  {
    id: 1018,
    title: "蛋糕",
    group: 26,
    expression: "C*(347/100)/1000"
  },
  {
    id: 1019,
    title: "麻烘糕",
    group: 26,
    expression: "C*(424/100)/1000"
  },
  {
    id: 1020,
    title: "锅巴（豆香）",
    group: 26,
    expression: "C*(528/100)/1000"
  },
  {
    id: 1021,
    title: "蛋清蛋糕",
    group: 26,
    expression: "C*(339/100)/1000"
  },
  {
    id: 1022,
    title: "月饼（枣泥）",
    group: 26,
    expression: "C*(424/100)/1000"
  },
  {
    id: 1023,
    title: "早茶饼",
    group: 26,
    expression: "C*(440/100)/1000"
  },
  {
    id: 1024,
    title: "状元饼",
    group: 26,
    expression: "C*(435/100)/1000"
  },
  {
    id: 1026,
    title: "马铃薯片（油炸）",
    group: 27,
    expression: "C*(612/100)/1000"
  },
  {
    id: 1027,
    title: "炸糕",
    group: 27,
    expression: "C*(280/100)/1000"
  },
  {
    id: 1028,
    title: "油条",
    group: 27,
    expression: "C*(386/100)/1000"
  },
  {
    id: 1029,
    title: "韭菜盒子",
    group: 27,
    expression: "C*(285/100)/1000"
  },
  {
    id: 1030,
    title: "油饼",
    group: 27,
    expression: "C*(399/100)/1000"
  },
  {
    id: 1031,
    title: "面窝",
    group: 27,
    expression: "C*(289/100)/1000"
  },
  {
    id: 1032,
    title: "八宝粥（同茂牌）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(46/100)/1000"
  },
  {
    id: 1033,
    title: "八宝粥（无糖，娃哈哈牌）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(45/100)/1000"
  },
  {
    id: 1034,
    title: "披萨饼",
    group: 28,
    infla_score: 0.034,
    expression: "C*(235/100)/1000"
  },
  {
    id: 1035,
    title: "八宝粥（康师傅牌）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(81/100)/1000"
  },
  {
    id: 1036,
    title: "馄饨",
    group: 28,
    infla_score: 0.034,
    expression: "C*(180/100)/1000"
  },
  {
    id: 1037,
    title: "饺子（素馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(198/100)/1000"
  },
  {
    id: 1038,
    title: "麦片",
    group: 28,
    infla_score: 0.034,
    expression: "C*(351/100)/1000"
  },
  {
    id: 1039,
    title: "薯条（肯德基）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(350/100)/1000"
  },
  {
    id: 1040,
    title: "八宝粥（亲亲牌）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(76/100)/1000"
  },
  {
    id: 1041,
    title: "天燕麦片果仁",
    group: 28,
    infla_score: 0.034,
    expression: "C*(402/100)/1000"
  },
  {
    id: 1042,
    title: "法式配餐面包",
    group: 28,
    infla_score: 0.034,
    expression: "C*(282/100)/1000"
  },
  {
    id: 1043,
    title: "饺子（猪肉茴香馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(233/100)/1000"
  },
  {
    id: 1044,
    title: "鸡汁干脆面",
    group: 28,
    infla_score: 0.034,
    expression: "C*(505/100)/1000"
  },
  {
    id: 1045,
    title: "黑芝麻糊",
    group: 28,
    infla_score: 0.034,
    expression: "C*(408/100)/1000"
  },
  {
    id: 1046,
    title: "春卷（素馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(139/100)/1000"
  },
  {
    id: 1047,
    title: "八宝粥椰树牌",
    group: 28,
    infla_score: 0.034,
    expression: "C*(69/100)/1000"
  },
  {
    id: 1048,
    title: "饺子（猪肉韭菜）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(250/100)/1000"
  },
  {
    id: 1049,
    title: "肉酱（海鲜鸡汁味米线）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(167/100)/1000"
  },
  {
    id: 1050,
    title: "汉堡包",
    group: 28,
    infla_score: 0.034,
    expression: "C*(256/100)/1000"
  },
  {
    id: 1051,
    title: "八宝粥（娃哈哈牌）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(64/100)/1000"
  },
  {
    id: 1052,
    title: "饺子（猪肉香菇馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(231/100)/1000"
  },
  {
    id: 1053,
    title: "肉酱（红烧牛肉方便面）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(200/100)/1000"
  },
  {
    id: 1054,
    title: "饺子（鸡肉蘑菇馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(186/100)/1000"
  },
  {
    id: 1055,
    title: "玉米片（即食粥）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(400/100)/1000"
  },
  {
    id: 1056,
    title: "方便面",
    group: 28,
    infla_score: 0.034,
    expression: "C*(472/100)/1000"
  },
  {
    id: 1057,
    title: "红烧牛肉味方便面",
    group: 28,
    infla_score: 0.034,
    expression: "C*(447/100)/1000"
  },
  {
    id: 1058,
    title: "猪肉白菜馅饺子",
    group: 28,
    infla_score: 0.034,
    expression: "C*(218/100)/1000"
  },
  {
    id: 1059,
    title: "三明治",
    group: 28,
    infla_score: 0.034,
    expression: "C*(750/100)/1000"
  },
  {
    id: 1060,
    title: "什锦炒饭",
    group: 28,
    infla_score: 0.034,
    expression: "C*(188/100)/1000"
  },
  {
    id: 1061,
    title: "干酪汉堡包",
    group: 28,
    infla_score: 0.034,
    expression: "C*(860/100)/1000"
  },
  {
    id: 1062,
    title: "鳕鱼方便面（面饼+调味料+珍料+调味油+蔬菜）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(470/100)/1000"
  },
  {
    id: 1063,
    title: "饺子（三鲜馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(240/100)/1000"
  },
  {
    id: 1064,
    title: "鸡腿汉堡",
    group: 28,
    infla_score: 0.034,
    expression: "C*(850/100)/1000"
  },
  {
    id: 1065,
    title: "猪肉馅包子",
    group: 28,
    infla_score: 0.034,
    expression: "C*(227/100)/1000"
  },
  {
    id: 1066,
    title: "干酪汉堡包（普通型，夹单层肉饼，无调料酱）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(800/100)/1000"
  },
  {
    id: 1067,
    title: "鸡肉汉堡（肯德基）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(900/100)/1000"
  },
  {
    id: 1068,
    title: "饺子（猪肉芹菜馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(253/100)/1000"
  },
  {
    id: 1069,
    title: "麦片（原味奶香）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(406/100)/1000"
  },
  {
    id: 1070,
    title: "红烧牛肉方便面",
    group: 28,
    infla_score: 0.034,
    expression: "C*(451/100)/1000"
  },
  {
    id: 1071,
    title: "海鲜味方便面",
    group: 28,
    infla_score: 0.034,
    expression: "C*(451/100)/1000"
  },
  {
    id: 1072,
    title: "饺子（猪肉虾仁馅）",
    group: 28,
    infla_score: 0.034,
    expression: "C*(267/100)/1000"
  },
  {
    id: 1073,
    title: "玉米片",
    group: 28,
    infla_score: 0.034,
    expression: "C*(365/100)/1000"
  },
  {
    id: 1074,
    title: "冰棍",
    group: 29,
    expression: "C*(47/100)/1000"
  },
  {
    id: 1075,
    title: "果味奶",
    group: 29,
    expression: "C*(20/100)/1000"
  },
  {
    id: 1076,
    title: "橙汁饮料（光明牌）",
    group: 29,
    expression: "C*(44/100)/1000"
  },
  {
    id: 1077,
    title: "AD钙奶",
    group: 29,
    expression: "C*(55/100)/1000"
  },
  {
    id: 1078,
    title: "橙汁汽水",
    group: 29,
    expression: "C*(20/100)/1000"
  },
  {
    id: 1079,
    title: "橙珍",
    group: 29,
    expression: "C*(25/100)/1000"
  },
  {
    id: 1080,
    title: " 特制汽水",
    group: 29,
    expression: "C*(42/100)/1000"
  },
  {
    id: 1081,
    title: "巧克力豆奶",
    group: 29,
    expression: "C*(97/100)/1000"
  },
  {
    id: 1082,
    title: "椰子汁饮料",
    group: 29,
    expression: "C*(102/100)/1000"
  },
  {
    id: 1083,
    title: "核桃乳（儿童型）",
    group: 29,
    expression: "C*(44/100)/1000"
  },
  {
    id: 1084,
    title: "酸乳饮料",
    group: 29,
    expression: "C*(54/100)/1000"
  },
  {
    id: 1085,
    title: "大雪糕",
    group: 29,
    expression: "C*(74/100)/1000"
  },
  {
    id: 1086,
    title: "运动饮料",
    group: 29,
    expression: "C*(112/100)/1000"
  },
  {
    id: 1087,
    title: "柠檬汽水",
    group: 29,
    expression: "C*(38/100)/1000"
  },
  {
    id: 1088,
    title: "橙汁饮料（三得利牌）",
    group: 29,
    expression: "C*(47/100)/1000"
  },
  {
    id: 1089,
    title: "粒粒果奶饮料",
    group: 29,
    expression: "C*(30/100)/1000"
  },
  {
    id: 1090,
    title: "苹果汁饮料（亨氏）",
    group: 29,
    expression: "C*(212/100)/1000"
  },
  {
    id: 1091,
    title: "核桃乳中老年",
    group: 29,
    expression: "C*(52/100)/1000"
  },
  {
    id: 1092,
    title: "冰淇淋（脆皮甜筒）",
    group: 29,
    expression: "C*(158/100)/1000"
  },
  {
    id: 1093,
    title: "麦乳精",
    group: 29,
    expression: "C*(212/100)/1000"
  },
  {
    id: 1094,
    title: "杏仁露",
    group: 29,
    expression: "C*(300/100)/1000"
  },
  {
    id: 1095,
    title: "山楂果肉饮料",
    group: 29,
    expression: "C*(55/100)/1000"
  },
  {
    id: 1096,
    title: "胡萝卜素王",
    group: 29,
    expression: "C*(55/100)/1000"
  },
  {
    id: 1097,
    title: "可口可乐",
    group: 29,
    expression: "C*(43/100)/1000"
  },
  {
    id: 1098,
    title: "奶饮料",
    group: 29,
    expression: "C*(53/100)/1000"
  },
  {
    id: 1099,
    title: "百令可乐",
    group: 29,
    expression: "C*(28/100)/1000"
  },
  {
    id: 1100,
    title: "橙汁饮料",
    group: 29,
    expression: "C*(46/100)/1000"
  },
  {
    id: 1101,
    title: "冰激凌",
    group: 29,
    expression: "C*(127/100)/1000"
  },
  {
    id: 1102,
    title: "雪糕（红豆缘）",
    group: 29,
    expression: "C*(212/100)/1000"
  },
  {
    id: 1103,
    title: "可乐",
    group: 29,
    expression: "C*(35/100)/1000"
  },
  {
    id: 1104,
    title: "冰激凌（加奶油）",
    group: 29,
    expression: "C*(250/100)/1000"
  },
  {
    id: 1105,
    title: "冰砖",
    group: 29,
    expression: "C*(212/100)/1000"
  },
  {
    id: 1106,
    title: "雪糕",
    group: 29,
    expression: "C*(147/100)/1000"
  },
  {
    id: 1107,
    title: "浓缩橘汁",
    group: 29,
    expression: "C*(235/100)/1000"
  },
  {
    id: 1108,
    title: "娃娃头",
    group: 29,
    expression: "C*(212/100)/1000"
  },
  {
    id: 1109,
    title: "橘子晶",
    group: 29,
    expression: "C*(390/100)/1000"
  },
  {
    id: 1110,
    title: "果真饮料",
    group: 29,
    expression: "C*(250/100)/1000"
  },
  {
    id: 1111,
    title: "茶水",
    group: 30,
    expression: "C*(0/100)/1000"
  },
  {
    id: 1112,
    title: "枸杞子",
    group: 30,
    expression: "C*(258/100)/1000"
  },
  {
    id: 1113,
    title: "铁观音茶",
    group: 30,
    expression: "C*(304/100)/1000"
  },
  {
    id: 1114,
    title: "咖啡粉",
    group: 30,
    expression: "C*(218/100)/1000"
  },
  {
    id: 1115,
    title: "白芷",
    group: 30,
    expression: "C*(324/100)/1000"
  },
  {
    id: 1116,
    title: "咖啡伴侣",
    group: 30,
    expression: "C*(554/100)/1000"
  },
  {
    id: 1118,
    title: "花茶",
    group: 30,
    expression: "C*(281/100)/1000"
  },
  {
    id: 1119,
    title: "绿茶",
    group: 30,
    expression: "C*(296/100)/1000"
  },
  {
    id: 1120,
    title: "红茶",
    group: 30,
    expression: "C*(294/100)/1000"
  },
  {
    id: 1121,
    title: "加餐黄酒",
    group: 31,
    expression: "C*(37/100)/1000"
  },
  {
    id: 1122,
    title: "葡萄酒",
    group: 31,
    expression: "C*(72/100)/1000"
  },
  {
    id: 1123,
    title: "贡米佳酿",
    group: 31,
    expression: "C*(79/100)/1000"
  },
  {
    id: 1124,
    title: "红葡萄酒",
    group: 31,
    expression: "C*(74/100)/1000"
  },
  {
    id: 1125,
    title: "啤酒（楚天啤酒，2.6度）",
    group: 31,
    expression: "C*(16/100)/1000"
  },
  {
    id: 1126,
    title: "糯香酒",
    group: 31,
    expression: "C*(36/100)/1000"
  },
  {
    id: 1127,
    title: "黄酒",
    group: 31,
    expression: "C*(66/100)/1000"
  },
  {
    id: 1128,
    title: "精制小麦酒",
    group: 31,
    expression: "C*(238/100)/1000"
  },
  {
    id: 1129,
    title: "江米酒",
    group: 31,
    expression: "C*(91/100)/1000"
  },
  {
    id: 1130,
    title: "小麦酒（48度）",
    group: 31,
    expression: "C*(284/100)/1000"
  },
  {
    id: 1131,
    title: "五粮液",
    group: 31,
    expression: "C*(311/100)/1000"
  },
  {
    id: 1132,
    title: "茅台酒",
    group: 31,
    expression: "C*(317/100)/1000"
  },
  {
    id: 1133,
    title: "啤酒（燕京牌，4%）",
    group: 31,
    expression: "C*(27/100)/1000"
  },
  {
    id: 1134,
    title: "麦饭石啤酒",
    group: 31,
    expression: "C*(25/100)/1000"
  },
  {
    id: 1135,
    title: "曲酒",
    group: 31,
    expression: "C*(330/100)/1000"
  },
  {
    id: 1136,
    title: "白葡萄酒",
    group: 31,
    expression: "C*(66/100)/1000"
  },
  {
    id: 1137,
    title: "啤酒（清爽型啤酒，6度）",
    group: 31,
    expression: "C*(35/100)/1000"
  },
  {
    id: 1138,
    title: "啤酒（特质啤酒，5度）",
    group: 31,
    expression: "C*(30/100)/1000"
  },
  {
    id: 1139,
    title: "五粮春（44.4度）",
    group: 31,
    expression: "C*(260/100)/1000"
  },
  {
    id: 1140,
    title: "京酒（浓香型，39%）",
    group: 31,
    expression: "C*(221/100)/1000"
  },
  {
    id: 1141,
    title: "白兰地",
    group: 31,
    expression: "C*(226/100)/1000"
  },
  {
    id: 1142,
    title: "汉口白酒",
    group: 31,
    expression: "C*(295/100)/1000"
  },
  {
    id: 1143,
    title: "老白酒",
    group: 31,
    expression: "C*(295/100)/1000"
  },
  {
    id: 1144,
    title: "小麦酒（50度）",
    group: 31,
    expression: "C*(297/100)/1000"
  },
  {
    id: 1145,
    title: "低度汉酒",
    group: 31,
    expression: "C*(216/100)/1000"
  },
  {
    id: 1146,
    title: "特制三粮酒",
    group: 31,
    expression: "C*(339/100)/1000"
  },
  {
    id: 1147,
    title: "善酿酒",
    group: 31,
    expression: "C*(99/100)/1000"
  },
  {
    id: 1148,
    title: "二锅头（58度）",
    group: 31,
    expression: "C*(351/100)/1000"
  },
  {
    id: 1149,
    title: "碧绿酒",
    group: 31,
    expression: "C*(239/100)/1000"
  },
  {
    id: 1150,
    title: "汉酒",
    group: 31,
    expression: "C*(364/100)/1000"
  },
  {
    id: 1151,
    title: "三粮小麦",
    group: 31,
    expression: "C*(330/100)/1000"
  },
  {
    id: 1152,
    title: "古井贡酒（浓香型，38%）",
    group: 31,
    expression: "C*(222/100)/1000"
  },
  {
    id: 1153,
    title: "啤酒（青岛牌，4.3%）",
    group: 31,
    expression: "C*(38/100)/1000"
  },
  {
    id: 1154,
    title: "景泰大曲",
    group: 31,
    expression: "C*(304/100)/1000"
  },
  {
    id: 1155,
    title: "甘州大曲",
    group: 31,
    expression: "C*(312/100)/1000"
  },
  {
    id: 1156,
    title: "剑南春",
    group: 31,
    expression: "C*(312/100)/1000"
  },
  {
    id: 1157,
    title: "汾酒",
    group: 31,
    expression: "C*(317/100)/1000"
  },
  {
    id: 1158,
    title: "剑南春（浓香型，40%）",
    group: 31,
    expression: "C*(222/100)/1000"
  },
  {
    id: 1159,
    title: "啤酒",
    group: 31,
    expression: "C*(32/100)/1000"
  },
  {
    id: 1160,
    title: "青稞酒",
    group: 31,
    expression: "C*(343/100)/1000"
  },
  {
    id: 1161,
    title: "董酒",
    group: 31,
    expression: "C*(272/100)/1000"
  },
  {
    id: 1162,
    title: "竹叶青酒",
    group: 31,
    expression: "C*(307/100)/1000"
  },
  {
    id: 1163,
    title: "宁河大曲",
    group: 31,
    expression: "C*(314/100)/1000"
  },
  {
    id: 1164,
    title: "酒泉酒",
    group: 31,
    expression: "C*(343/100)/1000"
  },
  {
    id: 1165,
    title: "二锅头（56度）",
    group: 31,
    expression: "C*(338/100)/1000"
  },
  {
    id: 1166,
    title: "麦芽糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(331/100)/1000"
  },
  {
    id: 1167,
    title: "白砂糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(400/100)/1000"
  },
  {
    id: 1168,
    title: "红糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(389/100)/1000"
  },
  {
    id: 1169,
    title: "什锦糖果",
    group: 32,
    infla_score: -0.024,
    expression: "C*(399/100)/1000"
  },
  {
    id: 1170,
    title: "绵白糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(396/100)/1000"
  },
  {
    id: 1171,
    title: "蜂蜜",
    group: 32,
    infla_score: -0.024,
    expression: "C*(321/100)/1000"
  },
  {
    id: 1172,
    title: "水晶糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(395/100)/1000"
  },
  {
    id: 1173,
    title: "奶糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(407/100)/1000"
  },
  {
    id: 1174,
    title: "充气巧克力",
    group: 32,
    infla_score: -0.024,
    expression: "C*(527/100)/1000"
  },
  {
    id: 1175,
    title: "水果味糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(407/100)/1000"
  },
  {
    id: 1176,
    title: "夹心糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(494/100)/1000"
  },
  {
    id: 1177,
    title: "芝麻南糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(548/100)/1000"
  },
  {
    id: 1178,
    title: "果仁巧克力",
    group: 32,
    infla_score: -0.024,
    expression: "C*(824/100)/1000"
  },
  {
    id: 1179,
    title: "羊油",
    group: 32,
    infla_score: -0.024,
    expression: "C*(824/100)/1000"
  },
  {
    id: 1180,
    title: "牛奶巧克力",
    group: 32,
    infla_score: -0.024,
    expression: "C*(575/100)/1000"
  },
  {
    id: 1182,
    title: "牛奶糖",
    group: 32,
    infla_score: -0.024,
    expression: "C*(435/100)/1000"
  },
  {
    id: 1183,
    title: "巧克力",
    group: 32,
    infla_score: -0.024,
    expression: "C*(586/100)/1000"
  },
  {
    id: 1185,
    title: "马蹄软糖",
    group: 33,
    expression: "C*(359/100)/1000"
  },
  {
    id: 1186,
    title: "芝麻油【香油】",
    group: 33,
    expression: "C*(898/100)/1000"
  },
  {
    id: 1187,
    title: "豆油",
    group: 33,
    expression: "C*(900/100)/1000"
  },
  {
    id: 1188,
    title: "混合油（菜+棕）",
    group: 33,
    expression: "C*(900/100)/1000"
  },
  {
    id: 1189,
    title: "色拉油",
    group: 33,
    expression: "C*(900/100)/1000"
  },
  {
    id: 1190,
    title: "花生油",
    group: 33,
    expression: "C*(900/100)/1000"
  },
  {
    id: 1191,
    title: "猪油（炼）",
    group: 34,
    expression: "C*(897/100)/1000"
  },
  {
    id: 1192,
    title: "牛油",
    group: 34,
    expression: "C*(835/100)/1000"
  },
  {
    id: 1193,
    title: "豆瓣辣酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(59/100)/1000"
  },
  {
    id: 1194,
    title: "醋",
    group: 35,
    infla_score: 0.026,
    expression: "C*(30/100)/1000"
  },
  {
    id: 1195,
    title: "腐乳（白，王致和牌）【酱豆腐】",
    group: 35,
    infla_score: 0.026,
    expression: "C*(153/100)/1000"
  },
  {
    id: 1196,
    title: "香油辣酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(54/100)/1000"
  },
  {
    id: 1197,
    title: "腐乳（臭）【臭豆腐】",
    group: 35,
    infla_score: 0.026,
    expression: "C*(130/100)/1000"
  },
  {
    id: 1198,
    title: "腐乳（白，酱豆腐）",
    group: 35,
    infla_score: 0.026,
    expression: "C*(133/100)/1000"
  },
  {
    id: 1199,
    title: "腐乳（臭，臭豆腐）",
    group: 35,
    infla_score: 0.026,
    expression: "C*(151/100)/1000"
  },
  {
    id: 1200,
    title: "辣椒酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(31/100)/1000"
  },
  {
    id: 1201,
    title: "香辣味腐乳",
    group: 35,
    infla_score: 0.026,
    expression: "C*(158/100)/1000"
  },
  {
    id: 1202,
    title: "酱油",
    group: 35,
    infla_score: 0.026,
    expression: "C*(63/100)/1000"
  },
  {
    id: 1203,
    title: "甜面酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(136/100)/1000"
  },
  {
    id: 1204,
    title: "豆瓣酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(178/100)/1000"
  },
  {
    id: 1205,
    title: "牛肉辣瓣酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(129/100)/1000"
  },
  {
    id: 1206,
    title: "腐乳（红，酱豆腐）",
    group: 35,
    infla_score: 0.026,
    expression: "C*(204/100)/1000"
  },
  {
    id: 1207,
    title: "大酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(131/100)/1000"
  },
  {
    id: 1208,
    title: "五香豆豉",
    group: 35,
    infla_score: 0.026,
    expression: "C*(259/100)/1000"
  },
  {
    id: 1209,
    title: "麻辣酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(135/100)/1000"
  },
  {
    id: 1210,
    title: "番茄沙司",
    group: 35,
    infla_score: 0.026,
    expression: "C*(150/100)/1000"
  },
  {
    id: 1211,
    title: "柠檬酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(283/100)/1000"
  },
  {
    id: 1212,
    title: "芝麻酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(630/100)/1000"
  },
  {
    id: 1213,
    title: "黄豆酱油",
    group: 35,
    infla_score: 0.026,
    expression: "C*(38/100)/1000"
  },
  {
    id: 1214,
    title: "花生酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(600/100)/1000"
  },
  {
    id: 1215,
    title: "草莓酱",
    group: 35,
    infla_score: 0.026,
    expression: "C*(200/100)/1000"
  },
  {
    id: 1216,
    title: "辣椒粉",
    group: 36,
    infla_score: -0.031,
    expression: "C*(203/100)/1000"
  },
  {
    id: 1217,
    title: "花椒",
    group: 36,
    infla_score: -0.031,
    expression: "C*(258/100)/1000"
  },
  {
    id: 1218,
    title: "全料蒸肉粉",
    group: 36,
    infla_score: -0.031,
    expression: "C*(342/100)/1000"
  },
  {
    id: 1219,
    title: "咖喱",
    group: 36,
    infla_score: -0.031,
    expression: "C*(300/100)/1000"
  },
  {
    id: 1220,
    title: "胡椒粉",
    group: 36,
    infla_score: -0.031,
    expression: "C*(351/100)/1000"
  },
  {
    id: 1221,
    title: "石榴",
    group: 37,
    infla_score: 0.024,
    expression: "C*(63/100)/1000"
  },
  {
    id: 1222,
    title: "红粉皮石榴",
    group: 37,
    infla_score: 0.024,
    expression: "C*(63/100)/1000"
  },
  {
    id: 1223,
    title: "葡萄",
    group: 37,
    infla_score: 0.024,
    expression: "C*(43/100)/1000"
  },
  {
    id: 1224,
    title: "无花果",
    group: 37,
    infla_score: 0.024,
    expression: "C*(59/100)/1000"
  },
  {
    id: 1225,
    title: "马奶子葡萄",
    group: 37,
    infla_score: 0.024,
    expression: "C*(40/100)/1000"
  },
  {
    id: 1226,
    title: "猕猴桃",
    group: 37,
    infla_score: 0.024,
    expression: "C*(56/100)/1000"
  },
  {
    id: 1227,
    title: "红提子葡萄",
    group: 37,
    infla_score: 0.024,
    expression: "C*(52/100)/1000"
  },
  {
    id: 1228,
    title: "荷柿",
    group: 37,
    infla_score: 0.024,
    expression: "C*(52/100)/1000"
  },
  {
    id: 1229,
    title: "巨峰葡萄",
    group: 37,
    infla_score: 0.024,
    expression: "C*(50/100)/1000"
  },
  {
    id: 1230,
    title: "葡萄干",
    group: 37,
    infla_score: 0.024,
    expression: "C*(341/100)/1000"
  },
  {
    id: 1231,
    title: "紫葡萄",
    group: 37,
    infla_score: 0.024,
    expression: "C*(43/100)/1000"
  },
  {
    id: 1232,
    title: "青皮石榴",
    group: 37,
    infla_score: 0.024,
    expression: "C*(50/100)/1000"
  },
  {
    id: 1233,
    title: "玫瑰香葡萄",
    group: 37,
    infla_score: 0.024,
    expression: "C*(50/100)/1000"
  },
  {
    id: 1234,
    title: "柿饼",
    group: 37,
    infla_score: 0.024,
    expression: "C*(250/100)/1000"
  },
  {
    id: 1235,
    title: "蜜橘",
    group: 38,
    expression: "C*(42/100)/1000"
  },
  {
    id: 1236,
    title: "金橘",
    group: 38,
    expression: "C*(55/100)/1000"
  },
  {
    id: 1237,
    title: "菠萝",
    group: 38,
    expression: "C*(41/100)/1000"
  },
  {
    id: 1238,
    title: "葡萄柚",
    group: 38,
    expression: "C*(43/100)/1000"
  },
  {
    id: 1239,
    title: "芦柑",
    group: 38,
    expression: "C*(43/100)/1000"
  },
  {
    id: 1240,
    title: "柚",
    group: 38,
    expression: "C*(41/100)/1000"
  },
  {
    id: 1241,
    title: "哈蜜瓜",
    group: 38,
    expression: "C*(34/100)/1000"
  },
  {
    id: 1242,
    title: "福橘",
    group: 38,
    expression: "C*(45/100)/1000"
  },
  {
    id: 1244,
    title: "早橘",
    group: 38,
    expression: "C*(57/100)/1000"
  },
  {
    id: 1245,
    title: "柿",
    group: 38,
    expression: "C*(71/100)/1000"
  },
  {
    id: 1246,
    title: "橙",
    group: 38,
    expression: "C*(47/100)/1000"
  },
  {
    id: 1247,
    title: "柑橘（X）",
    group: 38,
    expression: "C*(51/100)/1000"
  }
];
const cusSelects = () => "../../../components/cus-selects-fan/cus-selects-fan.js";
const _sfc_main = {
  components: {
    cusSelects
  },
  data() {
    return {
      //根据自己需求获得的下拉数据，如果数据不是{label:'',value:''}结构的就需要起一个别名来代指一下，就需要valueType
      selectList: foods,
      originSelectList: JSON.parse(JSON.stringify(foods)),
      alias: {
        //别名来代指一下
        label: "title",
        value: "id"
      },
      foodsList: [{
        key: 0,
        weightVal: "",
        nameVal: "",
        infla_score: 0,
        expression: "",
        result: ""
      }],
      showIcon: false,
      closeOptions: false
    };
  },
  mounted() {
  },
  methods: {
    toScore() {
      let isEemptyVal = [];
      this.foodsList.forEach((item) => {
        isEemptyVal.push(item.nameVal == "", item.weightVal == "");
      });
      if (isEemptyVal.includes(true)) {
        common_vendor.index.showToast({
          title: "未填写完，无法评分",
          icon: "none",
          duration: 2e3
        });
      } else {
        let totalScore = 0;
        this.foodsList.forEach((item) => {
          if (!item.infla_score) {
            item.result = 0;
          }
          let num = Number(item.result);
          totalScore += num;
        });
        totalScore = totalScore * 1e3;
        totalScore = this.fixed(totalScore, 4);
        console.log("分数", this.foodsList, totalScore);
        if (isNaN(totalScore)) {
          totalScore = "无";
        }
        common_vendor.index.switchTab({
          url: "/pages/score/index"
        });
        common_vendor.index.setStorageSync("totalScore", totalScore);
      }
    },
    handleNumber(index, e) {
      let val = e.replace(/[^\d]/g, "");
      this.$set(this.foodsList, index, {
        weightVal: val
      });
    },
    inputWeight(index, e) {
      if (this.foodsList[index].weightVal) {
        let score = "";
        let caculateResult = "";
        if (!e.detail && Number(e)) {
          score = this.foodsList[index].expression.replace("C", e);
        } else if (e.detail.value && Number(e.detail.value)) {
          score = this.foodsList[index].expression.replace("C", e.detail.value);
        } else {
          common_vendor.index.showToast({
            title: "请输入数字",
            icon: "none",
            duration: 2e3
          });
        }
        caculateResult = this.fixed(this.caculateParse(this.tokenCode(score)), 4);
        if (this.foodsList[index].infla_score) {
          caculateResult = caculateResult * this.foodsList[index].infla_score;
        }
        score = this.fixed(caculateResult, 4);
        this.foodsList[index].result = score;
        console.log("离开输入框", score);
      }
    },
    changeSelect(index, foodId) {
      let foodObj = this.selectList.find((item) => item.id == foodId);
      this.foodsList[index].nameVal = foodObj.title;
      this.foodsList[index].expression = foodObj.expression;
      this.foodsList[index].infla_score = foodObj.infla_score;
      this.inputWeight(index, this.foodsList[index].weightVal);
    },
    inputSelect(index, e) {
      this.inputCon = e;
    },
    closeSelect(index, e) {
      this.closeOptions = e;
      let isExist = this.selectList.find((item) => item.title == this.inputCon);
      if (this.inputCon && !isExist && !this.closeOptions) {
        common_vendor.index.showToast({
          title: "无此食物，请重新选择",
          icon: "none",
          duration: 2e3
        });
        console.log("弹出提醒无此食物", this.inputCon, !isExist, !this.closeOptions);
      } else if (isExist) {
        this.changeSelect(index, isExist.id);
      }
      console.log("下拉框关闭时", this.foodsList[index].nameVal);
    },
    fixed(num, bit) {
      let dig = Math.pow(10, bit);
      return Math.round(num * dig) / dig;
    },
    addFoods() {
      this.showIcon = true;
      let arrlength = this.foodsList.length;
      this.foodsList.splice(arrlength, 0, {
        key: arrlength,
        weightVal: "",
        nameVal: "",
        infla_score: 0,
        expression: ""
      });
    },
    deleteFoods(index) {
      this.foodsList.splice(index, 1);
      if (this.foodsList.length == 1) {
        this.showIcon = false;
      }
    },
    // 用JS编写简单的脚本语言(四则运算)
    // 参考：https://www.jianshu.com/p/c983f2df9d56 
    // 此方法计算得出公式的结果
    caculateParse(tokens, operator) {
      let operatorStack = [];
      let numStack = [];
      let precedence = {
        "(": -1,
        ")": 0,
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
      };
      operator = operator || {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
      };
      function allow() {
        return numStack.length >= 2 && operatorStack.length >= 1;
      }
      function count() {
        let e2 = numStack.pop();
        let e1 = numStack.pop();
        let op = operatorStack.pop();
        let fn = operator[op];
        if (fn)
          numStack.push(fn(e1, e2));
      }
      for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token.value == "(") {
          operatorStack.push(token.value);
        } else if (token.type == "number") {
          numStack.push(Number(token.value));
        } else if (token.type == "operator" || token.type == "Punctuator") {
          while (allow() && precedence[token.value] <= precedence[operatorStack.slice(-1)])
            count();
          if (token.value == ")")
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
        ss = ss + (i == ii ? "^" : " ");
      return str + "\n" + ss;
    },
    // 此方法将公式的每个数字或者符号分隔在一个数组中
    // 格式过滤与语法检测
    tokenCode(str) {
      let tokens = [];
      let token, currentChar;
      let prev = {};
      let bract = [];
      for (let i = 0; i < str.length; i++) {
        currentChar = str[i];
        if (currentChar == " ")
          continue;
        if (/[0-9]/.test(currentChar)) {
          token = {
            type: "number",
            value: currentChar
          };
          let pot = false;
          let space = false;
          for (i++; i < str.length; i++) {
            currentChar = str.charAt(i);
            if (/[0-9]/.test(currentChar)) {
              if (space)
                throw new Error(`数字格式不正确  
索引 ${i},字符 ${currentChar} 
${this.printErrStr(str, i)}`);
              token.value += currentChar;
            } else if (currentChar === ".") {
              if (space)
                throw new Error(`数字格式不正确  
索引 ${i},字符 ${currentChar} 
${this.printErrStr(str, i)}`);
              if (pot)
                throw new Error(`小数点格式不正确  
索引 ${i},字符 ${currentChar} 
${this.printErrStr(str, i)}`);
              token.value += currentChar;
              pot = true;
            } else if (currentChar === " ") {
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
        } else if ("+-*/".includes(currentChar)) {
          token = {
            type: "operator",
            value: currentChar
          };
          if (currentChar == "-" && (tokens.length == 0 || i > 0 && (prev.type == "operator" || prev.value == "(")) && !prev.prefix) {
            token.prefix = true;
          } else if (i > 0 && prev.type != "operator" && prev.value != "(" && !prev.prefix)
            ;
          else {
            throw new Error(`符号格式不正确 
索引 ${i},字符 ${currentChar} 
 ${this.printErrStr(str, i)}`);
          }
        } else if (currentChar === "(" && prev.value != ")" && !prev.prefix) {
          token = {
            type: "Punctuator",
            value: currentChar
          };
          bract.push(i);
        } else if (currentChar === ")" && prev.value != "(" && !prev.prefix) {
          token = {
            type: "Punctuator",
            value: currentChar
          };
          if (bract.pop() == void 0)
            throw new Error(
              `括号不匹配  
索引 ${i},字符 ${currentChar} 
 ${this.printErrStr(str, i)}`
            );
        } else {
          throw new Error(`无法识别的字符 
索引 ${i},字符 ${currentChar} 
 ${this.printErrStr(str, i)}`);
        }
        tokens.push(token);
        prev = token;
      }
      if (bract.length > 0)
        throw new Error(`索引 ${bract[0]},字符 '${str[bract[0]]}', 括号不匹配 `);
      return tokens;
    }
  }
};
if (!Array) {
  const _component_cus_selects = common_vendor.resolveComponent("cus-selects");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_component_cus_selects + _easycom_uni_easyinput2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.foodsList, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.deleteFoods(index), item.key),
        b: common_vendor.o((e) => $options.changeSelect(index, e), item.key),
        c: common_vendor.o((e) => $options.closeSelect(index, e), item.key),
        d: common_vendor.o((e) => $options.inputSelect(index, e), item.key),
        e: "9b4f7924-0-" + i0,
        f: common_vendor.o(($event) => item.nameVal = $event, item.key),
        g: common_vendor.p({
          filterable: true,
          searchType: 1,
          placeholder: "请输入关键字",
          noDataText: "无匹配项",
          valueType: $data.alias,
          data: $data.selectList,
          modelValue: item.nameVal
        }),
        h: common_vendor.o((e) => $options.inputWeight(index, e), item.key),
        i: "9b4f7924-1-" + i0,
        j: common_vendor.o(($event) => item.weightVal = $event, item.key),
        k: common_vendor.p({
          trim: "all",
          placeholder: "请输入重量",
          type: "number",
          modelValue: item.weightVal
        }),
        l: item.key
      };
    }),
    b: $data.showIcon,
    c: common_vendor.o((...args) => $options.addFoods && $options.addFoods(...args)),
    d: common_vendor.o((...args) => $options.toScore && $options.toScore(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b4f7924"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/index/record/record.vue"]]);
wx.createPage(MiniProgramPage);
