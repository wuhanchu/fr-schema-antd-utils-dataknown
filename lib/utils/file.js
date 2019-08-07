"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s2ab = void 0;

var s2ab = function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);

  for (var i = 0; i !== s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }

  return buf;
};

exports.s2ab = s2ab;