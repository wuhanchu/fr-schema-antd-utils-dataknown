"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Secured = require("./Secured");

// eslint-disable-next-line import/no-cycle
var PromiseRender =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PromiseRender, _React$Component);

  function PromiseRender() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PromiseRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PromiseRender)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      component: function component() {
        return null;
      }
    };

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      var component = _this.state.component;

      if (!(0, _isEqual["default"])(nextProps, _this.props)) {
        _this.setRenderComponent(nextProps);
      }

      if (nextState.component !== component) return true;
      return false;
    };

    _this.checkIsInstantiation = function (target) {
      if ((0, _Secured.isComponentClass)(target)) {
        var Target = target;
        return function (props) {
          return _react["default"].createElement(Target, props);
        };
      }

      if (_react["default"].isValidElement(target)) {
        return function (props) {
          return _react["default"].cloneElement(target, props);
        };
      }

      return function () {
        return target;
      };
    };

    return _this;
  }

  (0, _createClass2["default"])(PromiseRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setRenderComponent(this.props);
    }
  }, {
    key: "setRenderComponent",
    // set render Component : ok or error
    value: function setRenderComponent(props) {
      var _this2 = this;

      var ok = this.checkIsInstantiation(props.ok);
      var error = this.checkIsInstantiation(props.error);
      props.promise.then(function () {
        _this2.setState({
          component: ok
        });

        return true;
      })["catch"](function () {
        _this2.setState({
          component: error
        });
      });
    } // Determine whether the incoming component has been instantiated
    // AuthorizedRoute is already instantiated
    // Authorized  render is already instantiated, children is no instantiated
    // Secured is not instantiated

  }, {
    key: "render",
    value: function render() {
      var Component = this.state.component;
      var _this$props = this.props,
          ok = _this$props.ok,
          error = _this$props.error,
          promise = _this$props.promise,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["ok", "error", "promise"]);
      return Component ? _react["default"].createElement(Component, rest) : _react["default"].createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          margin: 'auto',
          paddingTop: 50,
          textAlign: 'center'
        }
      }, _react["default"].createElement(_antd.Spin, {
        size: "large"
      }));
    }
  }]);
  return PromiseRender;
}(_react["default"].Component);

exports["default"] = PromiseRender;