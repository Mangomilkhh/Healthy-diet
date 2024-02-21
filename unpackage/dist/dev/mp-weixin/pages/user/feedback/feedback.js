"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      to_name: "管理者",
      message: "",
      from_name: "",
      reply_to: "哈哈哈"
    };
  },
  methods: {
    sendEmail() {
      common_vendor.emailjs.send("service_x6dnloj", "template_uamuphk", {
        // to_name: this.to_name,
        from_name: this.from_name,
        // reply_to: this.reply_to,
        message: this.message
      }, "Xbsu_M_8c80CtHZfe").then(
        (result) => {
          common_vendor.index.showToast({
            title: "成功发送评价！",
            duration: 2e3
          });
          console.log("成功发送");
        },
        (error) => {
          console.log(error);
        }
      );
    },
    submit() {
      if (this.message === "") {
        return common_vendor.index.showToast({
          title: "请输入想说的话哟",
          icon: "none",
          duration: 2e3
        });
      }
      this.sendMail();
    },
    sendMail() {
      common_vendor.Ws.callFunction({
        name: "sendMail",
        data: {
          content: "用户" + this.from_name + "反馈：" + this.message
          // from_name: this.from_name,
        }
      }).then((res) => {
        console.log("8888", res);
        if (res.success === true) {
          common_vendor.index.showToast({
            title: "成功发送评价！",
            duration: 2e3
          });
          this.message = "";
        } else {
          common_vendor.index.showToast({
            title: "评价发送失败！",
            duration: 2e3
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.from_name,
    b: common_vendor.o(($event) => $data.from_name = $event.detail.value),
    c: $data.message,
    d: common_vendor.o(($event) => $data.message = $event.detail.value),
    e: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e9b0a919"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/user/feedback/feedback.vue"]]);
wx.createPage(MiniProgramPage);
