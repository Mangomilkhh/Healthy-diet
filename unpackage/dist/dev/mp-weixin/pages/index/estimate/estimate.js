"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      estimateList: [
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d0acce6.png",
          width: "290",
          height: "166"
          // top:'10'
        },
        {
          url: "../../../static/home/面条.png",
          width: "215",
          height: "160"
          // top:'10'
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d0bfc3b.png",
          width: "410",
          height: "193",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d03fcb6.png",
          width: "150",
          height: "130",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d040b3a.png",
          width: "183",
          height: "209",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d0bf671.png",
          width: "176",
          height: "202",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d0b00e3.png",
          width: "163",
          height: "172",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d032c08.png",
          width: "220",
          height: "141",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d03879a.png",
          width: "220",
          height: "135",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d03861d.png",
          width: "144",
          height: "154",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d03d4c1.png",
          width: "203",
          height: "131",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d03d1f9.png",
          width: "118",
          height: "135",
          top: "10"
        },
        {
          url: "https://www.freeimg.cn/i/2024/02/24/65d9f2d03e0a3.png",
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
