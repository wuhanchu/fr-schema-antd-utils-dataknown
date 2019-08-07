"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureInfoModal = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _InfoForm = _interopRequireDefault(require("./InfoForm"));

var _frSchema = require("fr-schema");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getPrimaryKey = _frSchema.utils.schema.getPrimaryKey;
var confirm = _antd.Modal.confirm;
/**
 * title: null,
 * visible: false,
 * onRef: null,
 * action: null, // the action value
 * values: null, // the record value
 * addArgs:null, // meta data
 * handleModalVisible: null,
 * handleUpdate: null,
 * service:null,当前使用的service
 * schema:null,当前的schema
 * handleAdd: null,
 * componentDidMount: null,
 */

var PureInfoModal =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(PureInfoModal, _PureComponent);

  function PureInfoModal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PureInfoModal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PureInfoModal).call(this, props));
    _this.state = {
      loading: false
    };

    _this.show = function (values) {
      var addArgs = _this.props.addArgs;

      _this.setState({
        visible: true,
        values: _objectSpread({}, addArgs, {}, values)
      });
    };

    _this.hide = function () {
      _this.setState({
        visible: false,
        values: null
      });
    };

    _this.onSave = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          handleUpdate = _this$props.handleUpdate,
          handleAdd = _this$props.handleAdd,
          action = _this$props.action,
          addArgs = _this$props.addArgs;
      var values = _this.state.values;

      _this.setState({
        loading: true
      });

      form.validateFields(
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee(err, fieldsValue) {
          var param, idKey, idValue;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  param = addArgs ? _objectSpread({}, addArgs) : {};
                  idKey = getPrimaryKey(_this.schema);

                  if (values) {
                    idValue = values[idKey || "id"];
                    param.id = idValue;
                    param[idKey] = idValue;
                  }

                  Object.keys(fieldsValue).forEach(function (key) {
                    param[key] = fieldsValue[key] instanceof Array && fieldsValue[key][0] instanceof String ? fieldsValue[key].join(",") : fieldsValue[key];
                  });

                  if (!err) {
                    _context.next = 9;
                    break;
                  }

                  console.log("err", Object.values(err));

                  _antd.message.error("信息填写错误！" + Object.values(err)[0].errors[0].message);

                  return _context.abrupt("return");

                case 9:
                  if (_this.props.convertParam) {
                    param = _this.props.convertParam(param);
                  }

                  if (!(action === _frSchema.actions.update)) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 13;
                  return handleUpdate(param);

                case 13:
                  _context.next = 17;
                  break;

                case 15:
                  _context.next = 17;
                  return handleAdd(param);

                case 17:
                  _context.prev = 17;

                  _this.setState({
                    loading: false
                  });

                  return _context.finish(17);

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0,, 17, 20]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    _this.beforeFormClose = function () {
      var values = _this.state.values;
      var _this$props2 = _this.props,
          form = _this$props2.form,
          action = _this$props2.action;
      var fieldsValue = form.getFieldsValue();
      var flag = Object.keys(fieldsValue).some(function (key) {
        var result = fieldsValue[key] && (!values || values[key] != fieldsValue[key]); // moment 比较

        if (fieldsValue[key] && fieldsValue[key].isSame && values) {
          result = !fieldsValue[key].isSame(values[key]);
        }

        if (result) {
          console.log("\u5B57\u6BB5".concat(key, "\u88AB\u4FEE\u6539\u4E3A").concat(values));
        }

        return result;
      });

      if (flag && action !== _frSchema.actions.show) {
        confirm({
          title: "提示",
          content: "数据已做修改，确认关闭对话框？",
          okText: "关闭",
          cancelText: "取消",
          onOk: function onOk() {
            _this.closeModel();
          },
          onCancel: function onCancel() {
            return;
          }
        });
      } else {
        _this.closeModel();
      }
    };

    _this.closeModel = function () {
      var handleModalVisible = _this.props.handleModalVisible;

      _this.setState({
        visible: false
      });

      handleModalVisible && handleModalVisible();
    };

    var _addArgs = props.addArgs,
        visible = props.visible,
        onRef = props.onRef,
        _values = props.values,
        schema = props.schema;
    _this.state.visible = visible;
    _this.state.values = _objectSpread({}, _addArgs || {}, {}, _values || {});
    _this.schema = schema;
    onRef && onRef((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PureInfoModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var componentDidMount = this.props.componentDidMount;
      componentDidMount && componentDidMount();
    }
    /**
     * 确认保存
     */

  }, {
    key: "renderForm",

    /**
     * 渲染表单
     * @returns {*}
     */
    value: function renderForm() {
      var values = this.state.values;
      return this.props.renderForm && typeof this.props.renderForm == "function" ? this.props.renderForm(_objectSpread({}, this.props, {
        values: values
      })) : _react["default"].createElement(_InfoForm["default"], (0, _extends2["default"])({}, this.props, {
        values: values
      }));
    }
    /**
     * 弹出框关闭前调用
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var loading = this.state.loading;
      var _this$props3 = this.props,
          title = _this$props3.title,
          action = _this$props3.action,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props3, ["title", "action"]);
      var _this$state = this.state,
          visible = _this$state.visible,
          values = _this$state.values;

      if (!visible) {
        return null;
      } // 查看模式 不需要显示 按钮


      if (action == _frSchema.actions.show) {
        otherProps.footer = null;
      }

      return _react["default"].createElement(_antd.Modal, (0, _extends2["default"])({
        width: 700,
        destroyOnClose: true,
        title: title || "" + "信息",
        visible: true,
        onOk: this.onSave,
        okButtonProps: {
          loading: loading
        }
      }, otherProps, {
        onCancel: function onCancel() {
          return _this2.beforeFormClose();
        }
      }), this.renderForm());
    }
  }]);
  return PureInfoModal;
}(_react.PureComponent);

exports.PureInfoModal = PureInfoModal;

var _default = _antd.Form.create()(PureInfoModal);

exports["default"] = _default;