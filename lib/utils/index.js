"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var authority = _interopRequireWildcard(require("./authority"));

var component = _interopRequireWildcard(require("./component"));

var componentDict = _interopRequireWildcard(require("./componentDict"));

var file = _interopRequireWildcard(require("./file"));

var model = _interopRequireWildcard(require("./model"));

var request = _interopRequireWildcard(require("./request"));

var url = _interopRequireWildcard(require("./url"));

var utils = _interopRequireWildcard(require("./utils"));

var xlsx = _interopRequireWildcard(require("./xlsx"));

var _default = {
  authority: authority,
  component: component,
  componentDict: componentDict,
  file: file,
  model: model,
  request: request,
  url: url,
  utils: utils,
  xlsx: xlsx
};
exports["default"] = _default;