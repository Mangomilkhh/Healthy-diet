"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(4, (item, index, i0) => {
      return {
        a: "1cf27b2a-2-" + i0 + "," + ("1cf27b2a-1-" + i0),
        b: index,
        c: "1cf27b2a-1-" + i0 + ",1cf27b2a-0",
        d: common_vendor.p({
          index
        })
      };
    }),
    b: common_vendor.p({
      type: "image",
      size: 40,
      color: "#777"
    }),
    c: common_vendor.o(_ctx.change),
    d: common_vendor.p({
      column: 4,
      highlight: true
    }),
    e: common_vendor.p({
      type: "image",
      size: 40,
      color: "#777"
    }),
    f: common_vendor.o(_ctx.change),
    g: common_vendor.p({
      column: 1,
      highlight: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
