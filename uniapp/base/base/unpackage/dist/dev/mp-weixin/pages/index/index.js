"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("你好");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/codespace/uniapp/base/base/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
