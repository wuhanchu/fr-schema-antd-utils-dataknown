"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _index = _interopRequireDefault(require("./index.less"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function initTotalList(columns) {
  var totalList = [];
  columns.forEach(function (column) {
    if (column.needTotal) {
      totalList.push(_objectSpread({}, column, {
        total: 0
      }));
    }
  });
  return totalList;
}

var StandardTable =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(StandardTable, _PureComponent);

  function StandardTable(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StandardTable);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StandardTable).call(this, props));

    _this.handleRowSelectChange = function (selectedRowKeys, selectedRows) {
      var needTotalList = _this.state.needTotalList;
      needTotalList = needTotalList.map(function (item) {
        return _objectSpread({}, item, {
          total: selectedRows.reduce(function (sum, val) {
            return sum + parseFloat(val[item.dataIndex], 10);
          }, 0)
        });
      });
      var onSelectRow = _this.props.onSelectRow;

      if (onSelectRow) {
        onSelectRow(selectedRows);
      }

      _this.setState({
        selectedRowKeys: selectedRowKeys,
        needTotalList: needTotalList
      });
    };

    _this.handleTableChange = function (pagination, filters, sorter) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(pagination, filters, sorter);
      }
    };

    _this.cleanSelectedKeys = function () {
      _this.handleRowSelectChange([], []);
    };

    var columns = props.columns;

    var _needTotalList = initTotalList(columns);

    _this.state = {
      selectedRowKeys: [],
      needTotalList: _needTotalList
    };
    return _this;
  }

  (0, _createClass2["default"])(StandardTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedRows = _this$props.selectedRows,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["selectedRows"]);
      var _this$state = this.state,
          selectedRowKeys = _this$state.selectedRowKeys,
          needTotalList = _this$state.needTotalList;
      var _this$props2 = this.props,
          _this$props2$data = _this$props2.data,
          list = _this$props2$data.list,
          pagination = _this$props2$data.pagination,
          loading = _this$props2.loading,
          columns = _this$props2.columns,
          rowKey = _this$props2.rowKey,
          bordered = _this$props2.bordered;

      var paginationProps = _objectSpread({
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: function showTotal(total) {
          return "\u5171 ".concat(total, " \u6761\u8BB0\u5F55");
        },
        pageSizeOptions: ["10", "20", "50", "100", "200", "300"]
      }, pagination);

      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            disabled: record.disabled
          };
        }
      };
      return _react["default"].createElement("div", {
        className: _index["default"].standardTable
      }, selectedRows && selectedRows.length > 0 && _react["default"].createElement("div", {
        className: _index["default"].tableAlert
      }, _react["default"].createElement(_antd.Alert, {
        message: _react["default"].createElement(_react.Fragment, null, "\u5DF2\u9009\u62E9", " ", _react["default"].createElement("a", {
          style: {
            fontWeight: 600
          }
        }, selectedRowKeys.length), " ", "\u9879\xA0\xA0", needTotalList.map(function (item) {
          return _react["default"].createElement("span", {
            style: {
              marginLeft: 8
            },
            key: item.dataIndex
          }, item.title, "\u603B\u8BA1\xA0", _react["default"].createElement("span", {
            style: {
              fontWeight: 600
            }
          }, item.render ? item.render(item.total) : item.total));
        }), _react["default"].createElement("a", {
          onClick: this.cleanSelectedKeys,
          style: {
            marginLeft: 24
          }
        }, "\u6E05\u7A7A")),
        type: "info",
        showIcon: true
      })), _react["default"].createElement(_antd.Table, (0, _extends2["default"])({
        loading: loading,
        bordered: true,
        rowKey: rowKey || "key",
        rowSelection: rowSelection,
        dataSource: list,
        columns: columns,
        pagination: paginationProps,
        onChange: this.handleTableChange
      }, otherProps, {
        size: "middle"
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      // clean state
      if (nextProps.selectedRows.length === 0) {
        var needTotalList = initTotalList(nextProps.columns);
        return {
          selectedRowKeys: [],
          needTotalList: needTotalList
        };
      }

      return null;
    }
  }]);
  return StandardTable;
}(_react.PureComponent);

var _default = StandardTable;
exports["default"] = _default;