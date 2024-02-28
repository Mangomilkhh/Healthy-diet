"use strict";
const common_vendor = require("../../../common/vendor.js");
const knowledges = [
  {
    title: "平衡膳食八大原则",
    img: "https://www.freeimg.cn/i/2024/02/25/65db50991f3b1.png"
  },
  {
    title: "饮食与慢性低度炎症",
    img: "https://www.freeimg.cn/i/2024/02/25/65db5098ec5dc.png"
  },
  {
    title: "抗炎饮食预防肿瘤的专家共识",
    img: "https://www.freeimg.cn/i/2024/02/25/65db5095ce99e.png"
  },
  {
    title: "中国居民平衡膳食宝塔与餐盘",
    img: "https://www.freeimg.cn/i/2024/02/25/65db50956f48c.png"
  }
];
const _sfc_main = {
  data() {
    return {
      knowledgeList: knowledges
    };
  },
  methods: {
    toPic(item) {
      common_vendor.index.navigateTo({
        url: "/pages/user/knowledge/picPage?data=" + encodeURIComponent(JSON.stringify(item))
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.knowledgeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.o(($event) => $options.toPic(item), index),
        c: index,
        d: "3b05c598-1-" + i0 + ",3b05c598-0"
      };
    }),
    b: common_vendor.p({
      showArrow: true,
      ["thumb-size"]: "lg",
      link: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/user/knowledge/knowledge.vue"]]);
wx.createPage(MiniProgramPage);
