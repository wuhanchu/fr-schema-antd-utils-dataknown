"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _InfoForm = _interopRequireDefault(require("./InfoForm"));

var _dva = require("dva");

var _dec, _dec2, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormItem = _antd.Form.Item;
var ConfForm = (_dec = (0, _dva.connect)(function (_ref) {
  var weixinMember = _ref.weixinMember,
      user = _ref.user,
      loading = _ref.loading;
  return {
    member: weixinMember.member,
    user: user.currentUser,
    loading: loading.models.weixinMember
  };
}), _dec2 = _antd.Form.create(), _dec(_class = _dec2(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(ConfForm, _PureComponent);

  function ConfForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ConfForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ConfForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleSubmit = function (e) {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          form = _this$props.form,
          member = _this$props.member,
          addon = _this$props.addon;
      e.preventDefault();
      form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log("handleSubmit", values); // const value = JSON.stringify(values);

          member.addons[addon] = values;
          dispatch({
            type: "weixinMember/update",
            payload: _objectSpread({}, member, {
              addon_config: JSON.stringify(member.addons)
            })
          });
        }
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(ConfForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          dispatch = _this$props2.dispatch,
          user = _this$props2.user;
      dispatch({
        type: "weixinMember/getCurrent"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          member = _this$props3.member,
          addon = _this$props3.addon,
          resource = _this$props3.resource,
          form = _this$props3.form,
          loading = _this$props3.loading;

      if (!member) {
        return null;
      }

      var data = addon && member && member.addons[addon];
      var submitFormLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 10,
            offset: 7
          }
        }
      };
      return _react["default"].createElement(_antd.Form, {
        onSubmit: this.handleSubmit,
        hideRequiredMark: true
      }, _react["default"].createElement(_InfoForm["default"], {
        values: data,
        form: form,
        resource: resource || "weixinMember"
      }), _react["default"].createElement(FormItem, (0, _extends2["default"])({}, submitFormLayout, {
        style: {
          marginTop: 32
        }
      }), _react["default"].createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: loading
      }, "\u4FDD\u5B58")));
    }
  }]);
  return ConfForm;
}(_react.PureComponent), _temp)) || _class) || _class);
var _default = ConfForm;
exports["default"] = _default;