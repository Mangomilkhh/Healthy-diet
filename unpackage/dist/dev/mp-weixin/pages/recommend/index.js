"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      list: [
        {
          url: "/static/recommend/r1.png",
          text: "谷薯类",
          badge: "0",
          type: "primary",
          height: 95,
          width: 95,
          top: 5,
          navigator: "grains",
          table_title: "谷薯类及制品"
        },
        {
          url: "/static/recommend/r2.png",
          text: "蔬菜类",
          badge: "1",
          type: "success",
          height: 100,
          width: 95,
          top: 0,
          navigator: "vegetables",
          table_title: "蔬菜类及制品"
        },
        {
          url: "/static/recommend/r3.png",
          text: "水果类",
          badge: "99",
          type: "warning",
          height: 80,
          width: 95,
          top: 20,
          navigator: "fruits",
          table_title: "水果类及制品"
        },
        {
          url: "/static/recommend/r4.png",
          text: "畜肉类",
          badge: "2",
          type: "error",
          height: 85,
          width: 100,
          top: 15,
          navigator: "meat",
          table_title: "畜肉类及制品"
        },
        {
          url: "/static/recommend/r5.png",
          text: "蛋类",
          height: 95,
          width: 100,
          top: 5,
          navigator: "eggs",
          table_title: "蛋类及制品"
        },
        {
          url: "/static/recommend/r6.png",
          text: "乳类",
          height: 100,
          width: 105,
          top: 0,
          navigator: "milks",
          table_title: "乳类及制品"
        },
        {
          url: "/static/recommend/r7.png",
          text: "禽肉类",
          height: 85,
          width: 115,
          top: 15,
          navigator: "poultry",
          table_title: "禽肉类及制品"
        },
        {
          url: "/static/recommend/r8.png",
          text: "坚果类",
          height: 100,
          width: 100,
          top: 0,
          navigator: "nuts",
          table_title: "坚果类"
        },
        {
          url: "/static/recommend/r9.png",
          text: "油脂类",
          height: 100,
          width: 65,
          top: 0,
          navigator: "oils",
          table_title: "油脂类"
        }
      ]
    };
  },
  methods: {
    toTable(item) {
      common_vendor.index.navigateTo({
        // url: '/pages/recommend/table/table',
        url: "/pages/recommend/table/table?data=" + encodeURIComponent(JSON.stringify(item))
      });
    },
    toQuestion() {
      common_vendor.index.navigateTo({
        url: "/pages/recommend/question/question"
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
        g: common_vendor.o(($event) => $options.toTable(item), index),
        h: index,
        i: "1d687fed-1-" + i0 + ",1d687fed-0",
        j: common_vendor.p({
          index
        })
      });
    }),
    b: common_vendor.p({
      column: 3,
      ["show-border"]: false,
      square: false
    }),
    c: "70rpx",
    d: "90rpx",
    e: common_vendor.o($options.toQuestion),
    f: common_vendor.p({
      column: 1,
      highlight: true,
      ["show-border"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d687fed"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/recommend/index.vue"]]);
wx.createPage(MiniProgramPage);
