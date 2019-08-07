"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixedZero = fixedZero;
exports.getTimeDistance = getTimeDistance;
exports.getPlainNode = getPlainNode;
exports.digitUppercase = digitUppercase;
exports.getRoutes = getRoutes;
exports.getPageQuery = getPageQuery;
exports.getQueryPath = getQueryPath;
exports.isUrl = isUrl;
exports.formatWan = formatWan;
exports.isAntdPro = isAntdPro;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _moment = _interopRequireDefault(require("moment"));

var _react = _interopRequireDefault(require("react"));

var _cn = _interopRequireDefault(require("nzh/cn"));

var _qs = require("qs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fixedZero(val) {
  return val * 1 < 10 ? "0".concat(val) : val;
}

function getTimeDistance(type) {
  var now = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  if (type === "today") {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [(0, _moment["default"])(now), (0, _moment["default"])(now.getTime() + (oneDay - 1000))];
  }

  if (type === "week") {
    var day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    var beginTime = now.getTime() - day * oneDay;
    return [(0, _moment["default"])(beginTime), (0, _moment["default"])(beginTime + (7 * oneDay - 1000))];
  }

  if (type === "month") {
    var _year = now.getFullYear();

    var month = now.getMonth();
    var nextDate = (0, _moment["default"])(now).add(1, "months");
    var nextYear = nextDate.year();
    var nextMonth = nextDate.month();
    return [(0, _moment["default"])("".concat(_year, "-").concat(fixedZero(month + 1), "-01 00:00:00")), (0, _moment["default"])((0, _moment["default"])("".concat(nextYear, "-").concat(fixedZero(nextMonth + 1), "-01 00:00:00")).valueOf() - 1000)];
  }

  var year = now.getFullYear();
  return [(0, _moment["default"])("".concat(year, "-01-01 00:00:00")), (0, _moment["default"])("".concat(year, "-12-31 23:59:59"))];
}

function getPlainNode(nodeList) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var arr = [];
  nodeList.forEach(function (node) {
    var item = node;
    item.path = "".concat(parentPath, "/").concat(item.path || "").replace(/\/+/g, "/");
    item.exact = true;

    if (item.children && !item.component) {
      arr.push.apply(arr, (0, _toConsumableArray2["default"])(getPlainNode(item.children, item.path)));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }

      arr.push(item);
    }
  });
  return arr;
}

function digitUppercase(n) {
  return _cn["default"].toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn("Two path are equal!"); // eslint-disable-line
  }

  var arr1 = str1.split("/");
  var arr2 = str2.split("/");

  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  }

  if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }

  return 3;
}

function getRenderArr(routes) {
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    // 去重
    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    }); // 是否包含

    var isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    });

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }

  return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */


function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  }); // Replace path to '' eg. path='user' /user/name => name

  routes = routes.map(function (item) {
    return item.replace(path, "");
  }); // Get the route to be rendered to remove the deep rendering

  var renderArr = getRenderArr(routes); // Conversion and stitching parameters

  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _objectSpread({
      exact: exact
    }, routerData["".concat(path).concat(item)], {
      key: "".concat(path).concat(item),
      path: "".concat(path).concat(item)
    });
  });
  return renderRoutes;
}

function getPageQuery() {
  return (0, _qs.parse)(window.location.href.split("?")[1]);
}

function getQueryPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var search = (0, _qs.stringify)(query);

  if (search.length) {
    return "".concat(path, "?").concat(search);
  }

  return path;
}
/* eslint no-useless-escape:0 */


var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

function isUrl(path) {
  return reg.test(path);
}

function formatWan(val) {
  var v = val * 1;
  if (!v || Number.isNaN(v)) return "";
  var result = val;

  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = _react["default"].createElement("span", null, result, _react["default"].createElement("span", {
      style: {
        position: "relative",
        top: -2,
        fontSize: 14,
        fontStyle: "normal",
        marginLeft: 2
      }
    }, "\u4E07"));
  }

  return result;
} // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性


function isAntdPro() {
  return window.location.hostname === "preview.pro.ant.design";
}