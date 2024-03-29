"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/score/index.js";
  "./pages/recommend/index.js";
  "./pages/user/index.js";
  "./pages/user/feedback/feedback.js";
  "./pages/user/knowledge/knowledge.js";
  "./pages/user/knowledge/picPage.js";
  "./pages/recommend/question/question.js";
  "./pages/index/record/record.js";
  "./pages/index/estimate/estimate.js";
  "./pages/recommend/table/table.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/1前端/uniapp/Healthy-diet/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
