"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_recommend_table_tableData = require("./tableData.js");
const _sfc_main = {
  data() {
    return {
      searchVal: "",
      tableData: [],
      // 每页数据量
      pageSize: 100,
      // 当前页
      pageCurrent: 1,
      // 数据总量
      total: 0,
      loading: false
    };
  },
  // 目标表格页面接收数据
  onLoad() {
    this.selectedIndexs = [];
    this.getData(1);
    if (this.$route) {
      const data = JSON.parse(decodeURIComponent(this.$route.query.data));
      common_vendor.index.setNavigationBarTitle({
        title: data
      });
    }
  },
  methods: {
    // 搜索
    search() {
      this.getData(1, this.searchVal);
    },
    // 获取数据
    getData(pageCurrent, value = "") {
      this.loading = true;
      this.pageCurrent = pageCurrent;
      this.request({
        pageSize: this.pageSize,
        pageCurrent,
        value,
        success: (res) => {
          this.tableData = res.data;
          this.total = res.total;
          this.loading = false;
        }
      });
    },
    // 伪request请求
    request(options) {
      const { pageSize, pageCurrent, success, value } = options;
      let total = pages_recommend_table_tableData.tableData.length;
      let data = pages_recommend_table_tableData.tableData.filter((item, index) => {
        const idx = index - (pageCurrent - 1) * pageSize;
        return idx < pageSize && idx >= 0;
      });
      if (value) {
        data = [];
        pages_recommend_table_tableData.tableData.forEach((item) => {
          if (item.name.indexOf(value) !== -1) {
            data.push(item);
          }
        });
        total = data.length;
      }
      setTimeout(() => {
        typeof success === "function" && success({
          data,
          total
        });
      }, 500);
    }
  }
};
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "100",
      align: "center"
    }),
    b: common_vendor.p({
      width: "100",
      align: "center"
    }),
    c: common_vendor.p({
      align: "center"
    }),
    d: common_vendor.f($data.tableData, (item, index, i0) => {
      return {
        a: common_vendor.t(item.good),
        b: "7d4d96db-6-" + i0 + "," + ("7d4d96db-5-" + i0),
        c: common_vendor.t(item.ordinary),
        d: "7d4d96db-7-" + i0 + "," + ("7d4d96db-5-" + i0),
        e: common_vendor.t(item.reduce),
        f: "7d4d96db-8-" + i0 + "," + ("7d4d96db-5-" + i0),
        g: index,
        h: "7d4d96db-5-" + i0 + ",7d4d96db-0"
      };
    }),
    e: common_vendor.sr("table", "7d4d96db-0"),
    f: common_vendor.p({
      loading: $data.loading,
      border: true,
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/recommend/table/table.vue"]]);
wx.createPage(MiniProgramPage);
