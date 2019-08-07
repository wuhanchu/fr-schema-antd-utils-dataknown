"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _Charts = require("@/components/Charts");

/**
 * 减少使用 dangerouslySetInnerHTML
 */
var Yuan =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Yuan, _React$PureComponent);

  function Yuan() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Yuan);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Yuan)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.rendertoHtml = function () {
      var children = _this.props.children;

      if (_this.main) {
        _this.main.innerHTML = (0, _Charts.yuan)(children);
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(Yuan, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.rendertoHtml();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.rendertoHtml();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("span", {
        ref: function ref(_ref) {
          _this2.main = _ref;
        }
      });
    }
  }]);
  return Yuan;
}(_react["default"].PureComponent);

exports["default"] = Yuan;