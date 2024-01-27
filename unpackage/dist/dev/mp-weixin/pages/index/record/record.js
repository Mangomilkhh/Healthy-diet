"use strict";
const common_vendor = require("../../../common/vendor.js");
const cusSelects = () => "../../../components/cus-selects-fan/cus-selects-fan.js";
const _sfc_main = {
  components: {
    cusSelects
  },
  data() {
    return {
      weightVal: "",
      nameVal: "",
      //根据自己需求获得的下拉数据，如果数据不是{label:'',value:''}结构的就需要起一个别名来代指一下，就需要valueType
      selectList: [],
      // selectList: [
      // 	{
      // 		id: 1,
      // 		title: 'hahah',
      // 	},
      // 	{
      // 		id: 2,
      // 		title: 'hahah1',
      // 	},
      // 	{
      // 		id: 3,
      // 		title: 'hahah3',
      // 	}
      // ],
      alias: {
        //别名来代指一下
        label: "title",
        value: "id"
      }
    };
  },
  mounted() {
    for (let i = 0; i < 2e3; i++) {
      this.selectList.push({
        id: i,
        title: "hahah" + i
      });
    }
  },
  methods: {
    toScore() {
      common_vendor.index.switchTab({
        url: "/pages/score/index"
      });
    },
    input() {
    },
    changeSelect(e) {
      console.log("1111", e);
    }
  }
};
if (!Array) {
  const _component_cus_selects = common_vendor.resolveComponent("cus-selects");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_component_cus_selects + _easycom_uni_easyinput2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.changeSelect),
    b: common_vendor.o(($event) => $data.nameVal = $event),
    c: common_vendor.p({
      filterable: true,
      searchType: 1,
      placeholder: "请输入关键字",
      valueType: $data.alias,
      data: $data.selectList,
      modelValue: $data.nameVal
    }),
    d: common_vendor.o($options.input),
    e: common_vendor.o(($event) => $data.weightVal = $event),
    f: common_vendor.p({
      trim: "all",
      placeholder: "请输入重量",
      modelValue: $data.weightVal
    }),
    g: common_vendor.o((...args) => $options.toScore && $options.toScore(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b4f7924"], ["__file", "D:/1前端/uniapp/Healthy-diet/pages/index/record/record.vue"]]);
wx.createPage(MiniProgramPage);
