"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _frSchema = require("fr-schema");

var _index = require("../../index");

var _component = require("../../utils/component");

require("./InfoForm.less");

/**
 * values: null,
 * form: form,
 * schema: null, // option
 * resource: null, // schema or resource  two choose one
 * action: null,
 * style: null,
 * otherTabs: null,
 * extend: null,
 * colNum: null,
 */
var InfoForm =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(InfoForm, _PureComponent);

  function InfoForm(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InfoForm);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InfoForm).call(this, props));
    _this.state = {
      data: props.values || {},
      updateFlag: !!props.values // set column

    };
    _this.state.column = (0, _frSchema.getInfoColumn)(props.schema || _index.schemas[props.resource], props.action);
    return _this;
  }

  (0, _createClass2["default"])(InfoForm, [{
    key: "renderContent",
    value: function renderContent(data) {
      var column = this.state.column;
      var _this$props = this.props,
          form = _this$props.form,
          action = _this$props.action,
          style = _this$props.style,
          otherTabs = _this$props.otherTabs,
          extend = _this$props.extend,
          colNum = _this$props.colNum;
      return _component.createForm.bind(this)(column, data, form, action, style, otherTabs, extend, colNum);
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      return this.renderContent(data);
    }
  }]);
  return InfoForm;
}(_react.PureComponent);

var _default = InfoForm;
exports["default"] = _default;