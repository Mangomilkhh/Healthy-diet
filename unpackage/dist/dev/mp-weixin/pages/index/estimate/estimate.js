"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      estimateList: [
        {
          url: "../../../static/home/estimate/米饭.png",
          width: "290",
          height: "166"
          // top:'10'
        },
        {
          url: "../../../static/home/estimate/面条.png",
          width: "215",
          height: "160"
          // top:'10'
        },
        {
          url: "../../../static/home/estimate/瘦肉.png",
          width: "410",
          height: "193",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/大豆.png",
          width: "150",
          height: "130",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/菠菜.png",
          width: "183",
          height: "209",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/油菜.png",
          width: "176",
          height: "202",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/芹菜.png",
          width: "163",
          height: "172",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/e1.png",
          width: "220",
          height: "141",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/e2.png",
          width: "220",
          height: "135",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/e3.png",
          width: "144",
          height: "154",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/e4.png",
          width: "203",
          height: "131",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/e5.png",
          width: "118",
          height: "135",
          top: "10"
        },
        {
          url: "../../../static/home/estimate/e6.png",
          width: "133",
          height: "200",
          top: "10"
        }
      ]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.estimateList, (item, key, i0) => {
      return {
        a: item.top + "rpx",
        b: item.width + "rpx",
        c: item.height + "rpx",
        d: item.url,
        e: key
      };
    }),
    b: common_vendor.p({
      ["is-shadow"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2b9e5841"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/index/estimate/estimate.vue"]]);
wx.createPage(MiniProgramPage);
