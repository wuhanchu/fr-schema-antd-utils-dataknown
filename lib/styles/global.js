"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalStyle = exports.contentHeight = void 0;
// 不需要翻页高度
var contentHeight = document.documentElement.clientHeight - 120;
exports.contentHeight = contentHeight;
var globalStyle = {
  tree: {
    height: 700
  },
  // 表单
  form: {
    input: {
      width: 300 // 输入框宽度

    },
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  },
  // 搜索过滤器
  filter: {
    input: {
      width: 200 // 输入框宽度

    }
  }
};
exports.globalStyle = globalStyle;