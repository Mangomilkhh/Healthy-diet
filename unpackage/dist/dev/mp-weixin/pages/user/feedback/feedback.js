"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    smsTest() {
      plus.messaging.sendMessage(msg);
      var msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS);
      msg.to = ["13682301788"];
      msg.body = "This is HTML5 Plus example test message";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.smsTest && $options.smsTest(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e9b0a919"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/user/feedback/feedback.vue"]]);
wx.createPage(MiniProgramPage);
