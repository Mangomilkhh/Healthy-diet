"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      list: [
        {
          url: "/static/recommend/r1.png",
          text: "Grid 1",
          badge: "0",
          type: "primary",
          height: 95,
          width: 95,
          top: 5
        },
        {
          url: "/static/recommend/r2.png",
          text: "Grid 2",
          badge: "1",
          type: "success",
          height: 100,
          width: 95,
          top: 0
        },
        {
          url: "/static/recommend/r3.png",
          text: "Grid 3",
          badge: "99",
          type: "warning",
          height: 80,
          width: 95,
          top: 20
        },
        {
          url: "/static/recommend/r4.png",
          text: "Grid 4",
          badge: "2",
          type: "error",
          height: 85,
          width: 100,
          top: 15
        },
        {
          url: "/static/recommend/r5.png",
          text: "Grid 5",
          height: 95,
          width: 100,
          top: 5
        },
        {
          url: "/static/recommend/r6.png",
          text: "Grid 6",
          height: 100,
          width: 105,
          top: 0
        },
        {
          url: "/static/recommend/r7.png",
          text: "Grid 7",
          height: 85,
          width: 115,
          top: 15
        },
        {
          url: "/static/recommend/r8.png",
          text: "Grid 8",
          height: 100,
          width: 100,
          top: 0
        },
        {
          url: "/static/recommend/r9.png",
          text: "Grid 9",
          height: 100,
          width: 65,
          top: 0
        }
      ]
    };
  },
  methods: {
    change(e) {
      common_vendor.index.showToast({
        title: `点击第${1}个宫格`,
        icon: "none"
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
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.top + "rpx",
        b: item.width + "rpx",
        c: item.height + "rpx",
        d: item.url,
        e: common_vendor.t(item.text),
        f: item.badge
      }, item.badge ? {} : {}, {
        g: index,
        h: "1d687fed-1-" + i0 + ",1d687fed-0",
        i: common_vendor.p({
          index
        })
      });
    }),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      column: 3,
      ["show-border"]: false,
      square: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d687fed"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/recommend/index.vue"]]);
wx.createPage(MiniProgramPage);
