"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlParams = getUrlParams;

function getUrlParams(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}