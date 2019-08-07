"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _DataList2 = _interopRequireDefault(require("./DataList"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * meta 包含
 * resource
 * service
 * title
 * selectedRows
 * scroll table whether can scroll
 */
var ListPage =
/*#__PURE__*/
function (_DataList) {
  (0, _inherits2["default"])(ListPage, _DataList);

  function ListPage(props, meta) {
    var _this;

    (0, _classCallCheck2["default"])(this, ListPage);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ListPage).call(this, props, meta));
    _this.meta = _objectSpread({}, meta || {}, {}, _this.props.meta);
    return _this;
  }

  (0, _createClass2["default"])(ListPage, [{
    key: "render",
    value: function render() {
      var _this$meta = this.meta,
          title = _this$meta.title,
          content = _this$meta.content,
          tabList = _this$meta.tabList,
          tabDefaultActiveKey = _this$meta.tabDefaultActiveKey;
      return _react["default"].createElement(_antd.PageHeader, {
        title: title && title + "列表",
        content: content || this.renderHeaderContent && this.renderHeaderContent(),
        tabList: tabList,
        tabDefaultActiveKey: tabDefaultActiveKey,
        onTabChange: this.handleTabChange
      }, (0, _get2["default"])((0, _getPrototypeOf2["default"])(ListPage.prototype), "render", this).call(this));
    }
  }]);
  return ListPage;
}(_DataList2["default"]);

var _default = ListPage;
exports["default"] = _default;