"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      totalScore: "无",
      state: "抗/促炎饮食",
      health: "有/不利于健康。"
    };
  },
  // 应用程序进入前台时触发，在此方法中可以加载页面数据，刷新页面等操作
  onShow() {
    let localScore = common_vendor.index.getStorageSync("totalScore");
    console.log("获取存储总分", localScore);
    this.totalScore = localScore;
    if (this.totalScore > 0) {
      this.state = "促炎饮食，";
      this.health = "不利于健康。";
    } else if (this.totalScore < 0) {
      this.state = "抗炎饮食，";
      this.health = "有利于健康。";
    } else if (this.totalScore == 0) {
      this.state = "既不是抗炎饮食也不是促炎饮食。";
      this.health = "";
    } else {
      this.state = "";
      this.health = "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.totalScore),
    b: $data.state
  }, $data.state ? {
    c: common_vendor.t($data.state)
  } : {}, {
    d: common_vendor.t($data.health)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4030d3be"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/score/index.vue"]]);
wx.createPage(MiniProgramPage);
