"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500,
      homeList: [
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2bbeffd9.png",
          text: "早餐记录",
          badge: "0",
          type: "primary",
          height: 102,
          width: 112,
          navigate: "/pages/index/record/record"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2bbf0104.png",
          text: "中餐记录",
          badge: "0",
          type: "primary",
          height: 102,
          width: 112,
          navigate: "/pages/index/record/record"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2bbeffd0.png",
          text: "晚餐记录",
          badge: "0",
          type: "primary",
          height: 102,
          width: 112,
          navigate: "/pages/index/record/record"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2bbf01b8.png",
          text: "零食记录",
          badge: "0",
          type: "primary",
          height: 102,
          width: 112,
          navigate: "/pages/index/record/record"
        }
      ],
      homeList2: [{
        url: "https://www.freeimg.cn/i/2024/02/24/65d9f2bbf002c.png",
        text: "估重",
        badge: "0",
        type: "primary",
        height: 102,
        width: 112,
        navigate: "/pages/index/estimate/estimate"
      }]
    };
  },
  methods: {
    toRecords(item) {
      common_vendor.index.navigateTo({
        url: item.navigate
      });
    },
    toEstimate(item) {
      common_vendor.index.navigateTo({
        url: item.navigate
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: $data.interval,
    d: $data.duration,
    e: common_vendor.f($data.homeList, (item, index, i0) => {
      return {
        a: item.width + "rpx",
        b: item.height + "rpx",
        c: item.url,
        d: common_vendor.t(item.text),
        e: common_vendor.o(($event) => $options.toRecords(item), index),
        f: index,
        g: "1cf27b2a-1-" + i0 + ",1cf27b2a-0",
        h: common_vendor.p({
          index
        })
      };
    }),
    f: common_vendor.p({
      column: 4,
      ["show-border"]: false
    }),
    g: common_vendor.f($data.homeList2, (item, index, i0) => {
      return {
        a: item.width + "rpx",
        b: item.height + "rpx",
        c: item.url,
        d: common_vendor.t(item.text),
        e: common_vendor.o(($event) => $options.toEstimate(item), index),
        f: index,
        g: "1cf27b2a-3-" + i0 + ",1cf27b2a-2",
        h: common_vendor.p({
          index
        })
      };
    }),
    h: common_vendor.p({
      column: 1,
      highlight: true,
      ["show-border"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
