"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isLogin: "",
      user_img: "",
      user_name: "",
      extraIcon: {
        color: "#4cd964",
        size: "22",
        type: "gear-filled"
      }
    };
  },
  methods: {
    get_user() {
      common_vendor.index.getUserProfile({
        desc: "用户登录",
        success: (res) => {
          console.log(res);
          this.user_img = res.userInfo.avatarUrl;
          this.user_name = res.userInfo.nickName;
        }
      });
    },
    toFeedback() {
      common_vendor.index.navigateTo({
        url: "/pages/user/feedback/feedback"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.user_img,
    b: common_vendor.t($data.user_name),
    c: !$data.user_img && !$data.user_name,
    d: common_vendor.o((...args) => $options.get_user && $options.get_user(...args)),
    e: common_vendor.p({
      title: "营养知识",
      showArrow: true,
      thumb: "/static/user/u1.png",
      ["thumb-size"]: "lg",
      link: true
    }),
    f: common_vendor.o($options.toFeedback),
    g: common_vendor.p({
      title: "评价与反馈",
      showArrow: true,
      thumb: "/static/user/u2.png",
      ["thumb-size"]: "lg",
      link: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79e6a490"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
