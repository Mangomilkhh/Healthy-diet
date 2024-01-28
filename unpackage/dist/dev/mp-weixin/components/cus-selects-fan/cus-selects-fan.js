"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    data: {
      type: Array,
      default: () => [
        {
          label: "2022-02",
          value: "02"
        },
        {
          label: "2022-01",
          value: "01"
        },
        {
          label: "2021-12",
          value: "12"
        },
        {
          label: "2021-11",
          value: "11"
        },
        {
          label: "2021-10",
          value: "10"
        },
        {
          label: "2021-09",
          value: "09"
        }
      ]
    },
    valueType: {
      type: Object,
      default: () => {
        return {
          label: "label",
          value: "value"
        };
      }
    },
    value: {
      type: [String, Number],
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    searchType: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    noDataText: {
      type: String,
      default: "暂无数据"
    },
    arrLeft: {
      type: Number,
      default: 20
    },
    size: {
      type: String,
      default: "40%"
    }
  },
  data() {
    return {
      show: false,
      readonly: true,
      isClick: false,
      totalArr: [],
      showData: [],
      selLabel: ""
    };
  },
  watch: {
    "filterable": {
      immediate: true,
      deep: true,
      handler(news) {
        this.readonly = !news;
      }
    },
    "data": {
      immediate: true,
      deep: true,
      handler(news) {
        this.showData = news;
        this.totalArr = news;
      }
    },
    "value": {
      immediate: true,
      deep: true,
      handler(news) {
        if (news) {
          let index = this.data.findIndex((ite) => ite[this.valueType.value] == news);
          if (index == -1) {
            common_vendor.index.showToast({
              title: "传入的value不存在",
              icon: "none",
              duration: 1500
            });
          } else {
            this.selLabel = this.data[index][this.valueType.label];
          }
        }
      }
    }
  },
  created() {
  },
  methods: {
    openSelect() {
      this.show = !this.show;
      this.isClick = !this.isClick;
    },
    change(item) {
      if (this.value != item[this.valueType]) {
        this.$emit("input", item[this.valueType.value]);
        this.$emit("change", item[this.valueType.value]);
      }
      this.selLabel = item[this.valueType.label];
      this.show = false;
      this.isClick = false;
      this.showData = this.data;
    },
    clearItem() {
      if (this.clearable) {
        this.$emit("input", "");
        this.$emit("change", "");
      }
      this.selLabel = "";
    },
    selectData(e) {
      let sel = e.detail.value;
      if (sel) {
        let arrCons = [];
        let selVal = [];
        this.data.forEach((item) => {
          arrCons.push(item);
        });
        arrCons.forEach((item) => {
          if (this.searchType == 1) {
            if (item[this.valueType.label].indexOf(sel) != -1) {
              selVal.push(item);
            }
          } else {
            if (item[this.valueType.label] == sel) {
              selVal.push(item);
            }
          }
        });
        this.show = true;
        this.showData = selVal;
      } else {
        this.showData = this.data;
      }
    }
  },
  beforeDestroy() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.readonly
  }, !$data.readonly ? {
    b: $data.isClick,
    c: common_vendor.o((...args) => $options.selectData && $options.selectData(...args)),
    d: $data.selLabel,
    e: $data.readonly,
    f: $data.readonly,
    g: $props.placeholder,
    h: common_vendor.o((...args) => $options.openSelect && $options.openSelect(...args))
  } : common_vendor.e({
    i: common_vendor.t($data.selLabel),
    j: !$data.selLabel
  }, !$data.selLabel ? {
    k: common_vendor.t($props.placeholder)
  } : {}, {
    l: $props.placeholder,
    m: common_vendor.o((...args) => $options.openSelect && $options.openSelect(...args))
  }), {
    n: !$props.value && !$props.clearable || $props.value && !$props.clearable || !$props.value && $props.clearable && !$props.filterable
  }, !$props.value && !$props.clearable || $props.value && !$props.clearable || !$props.value && $props.clearable && !$props.filterable ? {
    o: common_vendor.n($data.show ? "arrow_down" : "arrow_up")
  } : {}, {
    p: $props.value && $props.clearable
  }, $props.value && $props.clearable ? {} : {}, {
    q: common_vendor.o((...args) => $options.clearItem && $options.clearItem(...args)),
    r: common_vendor.n($data.isClick ? "select_input_select" : ""),
    s: $data.show
  }, $data.show ? common_vendor.e({
    t: common_vendor.f($data.showData, (item, index, i0) => {
      return {
        a: common_vendor.t(item[$props.valueType.label]),
        b: index,
        c: $props.value == item[$props.valueType.value] ? 1 : "",
        d: common_vendor.o(($event) => $options.change(item), index)
      };
    }),
    v: !$data.showData.length
  }, !$data.showData.length ? {
    w: common_vendor.t($props.noDataText)
  } : {}, {
    x: $props.arrLeft + "px",
    y: common_vendor.o(() => {
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2fe7f3f1"], ["__file", "D:/1前端/uniapp/Healthy-diet/components/cus-selects-fan/cus-selects-fan.vue"]]);
wx.createComponent(Component);
