"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      picData: {}
    };
  },
  // 目标图片页面接收数据
  onLoad(options) {
    const data = JSON.parse(decodeURIComponent(options.data));
    common_vendor.index.setNavigationBarTitle({
      title: data.title
    });
    this.picData = data;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.picData.img
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/user/knowledge/picPage.vue"]]);
wx.createPage(MiniProgramPage);
