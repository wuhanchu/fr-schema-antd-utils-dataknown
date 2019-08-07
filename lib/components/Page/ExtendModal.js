"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _component = require("../../utils/component");

var _dec, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TabPane = _antd.Tabs.TabPane;
var ExtendForm = (_dec = _antd.Form.create(), _dec(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(ExtendForm, _PureComponent);

  function ExtendForm(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ExtendForm);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExtendForm).call(this, props));

    _this.renderContent = function (data) {
      var column = _this.state.column;
      var form = _this.props.form;
      return _component.createForm.bind((0, _assertThisInitialized2["default"])(_this))(column, data, form);
    };

    _this.onSave = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          onOk = _this$props.onOk;
      var data = _this.props.data;
      form.validateFields(function (err, fieldsValue) {
        var param = _this.state.data ? _objectSpread({}, _this.state.data) : {};
        Object.keys(fieldsValue).forEach(function (key) {
          param[key] = fieldsValue[key] instanceof Array ? fieldsValue[key].join(",") : fieldsValue[key];
        });
        if (err) return;

        _this.setState({
          loading: true
        },
        /*#__PURE__*/
        (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee() {
          var result;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return onOk(fieldsValue, data);

                case 3:
                  result = _context.sent;

                  if (result !== false) {
                    _this.props.onCancel();
                  }

                case 5:
                  _context.prev = 5;

                  _this.setState({
                    loading: false
                  });

                  return _context.finish(5);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0,, 5, 8]]);
        })));
      });
    };

    _this.state = {
      data: props.recoord || {},
      updateFlag: !!props.recoord,
      loading: false // set column

    };
    _this.state.column = _this.props.column;
    return _this;
  }

  (0, _createClass2["default"])(ExtendForm, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$props2 = this.props,
          _onCancel = _this$props2.onCancel,
          title = _this$props2.title;
      var _this$state = this.state,
          data = _this$state.data,
          loading = _this$state.loading;
      return _react["default"].createElement(_antd.Modal, (_React$createElement = {
        width: 640,
        bodyStyle: {
          padding: "32px 40px 48px"
        },
        destroyOnClose: true,
        title: title,
        visible: true
      }, (0, _defineProperty2["default"])(_React$createElement, "bodyStyle", {
        paddingLeft: 0
      }), (0, _defineProperty2["default"])(_React$createElement, "okButtonProps", loading), (0, _defineProperty2["default"])(_React$createElement, "onOk", this.onSave), (0, _defineProperty2["default"])(_React$createElement, "onCancel", function onCancel() {
        _onCancel && _onCancel();
      }), (0, _defineProperty2["default"])(_React$createElement, "okButtonProps", {
        loading: loading
      }), _React$createElement), this.renderContent(data));
    }
  }]);
  return ExtendForm;
}(_react.PureComponent), _temp)) || _class);

var ExtendModal =
/*#__PURE__*/
function (_PureComponent2) {
  (0, _inherits2["default"])(ExtendModal, _PureComponent2);

  function ExtendModal(props) {
    var _this2;

    (0, _classCallCheck2["default"])(this, ExtendModal);
    _this2 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExtendModal).call(this, props));
    _this2.state = {
      visible: props.visible
    };
    return _this2;
  }

  (0, _createClass2["default"])(ExtendModal, [{
    key: "show",
    value: function show(data) {
      this.setState({
        visible: true,
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var visible = this.state.visible;

      if (!visible) {
        return null;
      }

      return _react["default"].createElement(ExtendForm, (0, _extends2["default"])({}, this.props, {
        onCancel: function onCancel() {
          _this3.setState({
            visible: false
          });

          _this3.props.onCancel && _this3.props.onCancel();
        }
      }));
    }
  }]);
  return ExtendModal;
}(_react.PureComponent);

exports["default"] = ExtendModal;