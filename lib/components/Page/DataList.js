"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _StandardTable = _interopRequireDefault(require("../StandardTable"));

var _antd = require("antd");

var _frSchema = _interopRequireWildcard(require("fr-schema"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _react = _interopRequireWildcard(require("react"));

var _component = require("../../utils/component");

var _Authorized = _interopRequireDefault(require("../Authorized/Authorized"));

var _DataList = _interopRequireDefault(require("./DataList.less"));

var _InfoModal = _interopRequireDefault(require("./InfoModal"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var schemas = _frSchema["default"].schemas;

var getValue = function getValue(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  }).join(",");
};
/**
 *
 * offline: 是否开启离线模式
 * meta:{
 *   scroll: table whether can scroll
 *   selectedRows
 *   resource: schema resource name，
 *   service: remote service,
 *   title: page title,
 *   infoProps: infoForm props
 *   handleChangeCallback: data change call back
 *   queryArgs: fixed query args
 * }
 */


var DataList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(DataList, _PureComponent);

  function DataList(props, meta) {
    var _this;

    (0, _classCallCheck2["default"])(this, DataList);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DataList).call(this, props));

    _this.handleStandardTableChange = function (pagination, filtersArg, sorter) {
      var formValues = _this.state.formValues;

      var params = _objectSpread({}, formValues);

      var filters = Object.keys(filtersArg).reduce(function (obj, key) {
        var newObj = _objectSpread({}, obj);

        newObj[key] = getValue(filtersArg[key]);
        return newObj;
      }, {});
      Object.assign(params, filters);

      if (sorter.field) {
        params.sort = "".concat(sorter.order == "ascend" ? "" : "-").concat(sorter.field.replace("_remark", ""));
      }

      _this.setState({
        pagination: {
          currentPage: pagination.current,
          pageSize: pagination.pageSize
        },
        formValues: params
      }, function () {
        return _this.refreshList();
      });
    };

    _this.handleSelectRows = function (rows) {
      _this.setState({
        selectedRows: rows
      });
    };

    _this.handleFormReset = function () {
      var form = _this.props.form;
      form.resetFields();

      _this.setState({
        pagination: null,
        formValues: {}
      }, function () {
        _this.refreshList();
      });
    };

    _this.handleSearch = function (e) {
      e.preventDefault();
      var form = _this.props.form;
      form.validateFields(function (err, fieldsValue) {
        if (err) return;
        var allValues = form.getFieldsValue();

        var values = _objectSpread({}, allValues, {
          updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf()
        });

        _this.setState({
          formValues: values
        }); // refresh the list


        var formValues = {};
        Object.keys(values).forEach(function (key) {
          if (!values[key]) {
            return;
          }

          formValues[key] = values[key];
        });

        _this.setState({
          pagination: null,
          formValues: formValues
        },
        /*#__PURE__*/
        (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.refreshList();

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      });
    };

    _this.handleModalVisible = function (flag, record, action) {
      _this.setState({
        modalVisible: !!flag,
        infoData: record,
        action: action
      });
    };

    _this.handleAdd =
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(data, schema) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 修改当前数据
                _this.state.data.list.push(decorateItem(data, _this.schema));

                _this.setState({
                  data: _this.state.data
                }); // 更新


                if (_this.props.offline) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this.service.post(data, schema);

              case 5:
                _this.refreshList();

                _antd.message.success("添加成功");

                _this.handleModalVisible();

                _this.handleChangeCallback && _this.handleChangeCallback();
                _this.props.handleChangeCallback && _this.props.handleChangeCallback();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleUpdate =
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(data, schema) {
        var idKey;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // 修改当前数据
                idKey = getPrimaryKey(_this.schema);

                _this.state.data.list.some(function (item, index) {
                  if (data[idKey] == item[idKey]) {
                    _this.state.data.list[index] = decorateItem(data, _this.schema);
                    return true;
                  }
                });

                _this.setState({
                  data: _this.state.data
                }); // 更新


                if (_this.props.offline) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 6;
                return _this.service.put(data, schema);

              case 6:
                _this.refreshList();

                _antd.message.success("修改成功");

                _this.handleModalVisible();

                _this.handleChangeCallback && _this.handleChangeCallback();
                _this.props.handleChangeCallback && _this.props.handleChangeCallback();

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleDelete =
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(data) {
        var idKey;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // 修改当前数据
                idKey = getPrimaryKey(_this.schema);

                _this.state.data.list.some(function (item, index) {
                  if (data[idKey] == item[idKey]) {
                    _this.state.data.list.splice(index, 1);

                    return true;
                  }
                });

                _this.setState({
                  data: _this.state.data
                }); // 更新


                if (_this.props.offline) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 6;
                return _this.service["delete"](_objectSpread({
                  id: data[idKey]
                }, data));

              case 6:
                _this.refreshList();

                _antd.message.success("删除成功");

                _this.handleModalVisible();

                _this.handleChangeCallback && _this.handleChangeCallback();
                _this.props.handleChangeCallback && _this.props.handleChangeCallback();

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.renderList = function () {
      var inProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var loading = _this.props.loading;
      var _this$meta = _this.meta,
          showSelect = _this$meta.showSelect,
          scroll = _this$meta.scroll,
          mini = _this$meta.mini;
      var _this$state = _this.state,
          data = _this$state.data,
          listLoading = _this$state.listLoading,
          selectedRows = _this$state.selectedRows; // judge weather hide select

      var otherProps = {};

      if (!showSelect) {
        otherProps.rowSelection = null;
      }

      if (mini) {
        otherProps.pagination = false;
      }

      var columns = _this.getColumns();

      return _react["default"].createElement(_StandardTable["default"], (0, _extends2["default"])({
        bordered: true,
        rowKey: _this.meta.idKey || "id",
        selectedRows: selectedRows,
        loading: !data || loading || listLoading,
        data: data,
        columns: columns,
        scroll: scroll,
        size: "small",
        onSelectRow: _this.handleSelectRows,
        onChange: _this.handleStandardTableChange
      }, otherProps, inProps));
    };

    _this.init(props, meta);

    return _this;
  }
  /**
   * create search filter
   * @param params
   */


  (0, _createClass2["default"])(DataList, [{
    key: "createFilters",
    value: function createFilters(inSchema) {
      var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
      return (0, _component.createFilter)(this.props.form, inSchema, span);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.refreshList();
    }
    /**
     * 组件初始化
     * @param props
     * @param meta
     */

  }, {
    key: "init",
    value: function init(props, meta) {
      // 设置meta
      this.meta = _objectSpread({}, this.meta || {}, {}, meta, {}, props.meta || {});
      this.refreshMeta(); // 设置 state

      var tempState = {
        data: {
          list: props.value || [],
          pagination: {}
        },
        listLoading: true,
        modalVisible: false,
        updateModalVisible: false,
        expandForm: false,
        selectedRows: [],
        formValues: {},
        infoData: {}
      };

      if (this._ismounted) {
        this.setState(tempState);
      } else {
        this.state = tempState;
      }
    }
    /**
     * 更新组件的元数据信息
     */

  }, {
    key: "refreshMeta",
    value: function refreshMeta() {
      this.schema = this.meta.schema || schemas[this.meta.resource];
      this.service = this.meta.service || this.service;
      this.meta.idKey = getPrimaryKey(this.schema);

      if (this.meta.authorityKey) {
        this.meta.authority = {
          add: this.meta.authorityKey + "_add",
          update: this.meta.authorityKey + "_upd",
          "delete": this.meta.authorityKey + "_del"
        };
      }
    }
    /**
     * 获取当前显示的字段列表
     * @returns {Array|null}
     */

  }, {
    key: "getColumns",
    value: function getColumns() {
      var renderOperateColumn = this.props.renderOperateColumn;
      var fields = this.meta.fields;
      var columns = (0, _component.getListColumn)(this.schema, fields);
      var operationBar = renderOperateColumn ? renderOperateColumn.bind(this)() : this.renderOperateColumn();
      columns.sort(function (a, b) {
        return (a.orderIndex === undefined || a.orderIndex === null ? 9999 : a.orderIndex) - (b.orderIndex === undefined || b.orderIndex === null ? 9999 : b.orderIndex);
      });
      operationBar && columns.push(operationBar);
      this.columns = columns;
      return this.columns;
    }
    /**
     * 表格操作列
     * @returns {{width: string, fixed: (*|string), title: string, render: (function(*, *=): *)}}
     */

  }, {
    key: "renderOperateColumn",
    value: function renderOperateColumn() {
      var _this2 = this;

      var scroll = this.meta.scroll;
      return !this.props.readOnly && {
        title: "操作",
        fixed: scroll && "right",
        render: function render(text, record) {
          return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_Authorized["default"], {
            authority: _this2.meta.authority && _this2.meta.authority.update,
            noMatch: null
          }, _react["default"].createElement("a", {
            onClick: function onClick() {
              return _this2.handleModalVisible(true, record, _frSchema.actions.edit);
            }
          }, "\u4FEE\u6539")), _react["default"].createElement(_Authorized["default"], {
            authority: _this2.meta.authority && _this2.meta.authority["delete"],
            noMatch: null
          }, _react["default"].createElement(_antd.Divider, {
            type: "vertical"
          }), _react["default"].createElement(_antd.Popconfirm, {
            title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",
            onConfirm: function onConfirm(e) {
              _this2.handleDelete(record);

              e.stopPropagation();
            }
          }, _react["default"].createElement("a", null, "\u5220\u9664"))), _this2.renderOperateColumnExtend(record));
        }
      };
    }
    /**
     * 表格操作列，扩展方法
     */

  }, {
    key: "renderOperateColumnExtend",
    value: function renderOperateColumnExtend(record) {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._ismounted = true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (nextProps.meta && nextProps.meta !== this.props.meta) {
        console.log("DataList componentWillReceiveProps");
        this.meta = nextProps.meta;
        this.columns = null;
        this.refreshMeta();
        this.setState({
          pagination: null,
          formValues: {}
        }, function () {
          _this3.refreshList();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.state.data) {
        this.props.onChange && this.props.onChange(this.state.data.list);
      }
    }
  }, {
    key: "refreshList",
    value: function () {
      var _refreshList = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6() {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!this.service || this.props.offline)) {
                  _context6.next = 3;
                  break;
                }

                this.setState({
                  data: _objectSpread({}, this.state.data || {}, {
                    list: this.state.data && this.state.data.list || []
                  }),
                  listLoading: false
                });
                return _context6.abrupt("return");

              case 3:
                this.setState({
                  listLoading: true
                },
                /*#__PURE__*/
                (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee5() {
                  var data, list;
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this4.requestList();

                        case 2:
                          data = _context5.sent;
                          list = decorateList(data.list, _this4.schema);
                          _this4.convertList && (list = _this4.convertList(list));

                          _this4.setState({
                            selectedRows: [],
                            data: _objectSpread({}, data, {
                              list: list
                            }),
                            listLoading: false
                          });

                        case 6:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function refreshList() {
        return _refreshList.apply(this, arguments);
      }

      return refreshList;
    }()
    /**
     * 个性化转换对应的list数据
     * @param list
     * @returns {*}
     */

  }, {
    key: "convertList",
    value: function convertList(list) {
      return list;
    }
    /**
     * 查询当前数据
     * @returns {Promise<*>}
     */

  }, {
    key: "requestList",
    value: function () {
      var _requestList = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7() {
        var tempArgs,
            queryArgs,
            data,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                tempArgs = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
                queryArgs = this.meta.queryArgs;
                _context7.next = 4;
                return this.service.get(_objectSpread({}, queryArgs, {}, this.state.formValues || {}, {}, this.state.pagination || {}, {}, tempArgs));

              case 4:
                data = _context7.sent;
                data = this.dataConvert(data);
                return _context7.abrupt("return", data);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function requestList() {
        return _requestList.apply(this, arguments);
      }

      return requestList;
    }()
    /**
     * 数据转换
     * @param data
     */

  }, {
    key: "dataConvert",
    value: function dataConvert(data) {
      return data;
    }
  }, {
    key: "componentWillUpdate",

    /**
     * 模块讲修改
     * @param nextProps
     */
    value: function componentWillUpdate(nextProps, nextState) {
      if (!(0, _lodash["default"])(this.state.data, nextState.data)) {
        this.props.onChange && this.props.onChange(this.state.data.list);
      }
    }
    /**
     * 操作栏按钮
     */

  }, {
    key: "renderOperationButtons",
    value: function renderOperationButtons() {
      var _this5 = this;

      if (this.props.renderOperationButtons) {
        return this.props.renderOperationButtons();
      }

      console.log("this.meta.authority", this.meta.authority);
      return _react["default"].createElement(_Authorized["default"], {
        authority: this.meta.authority && this.meta.authority.add,
        noMatch: null
      }, !this.props.readOnly && _react["default"].createElement(_antd.Button, {
        type: "primary",
        onClick: function onClick() {
          return _this5.handleModalVisible(true, null, _frSchema.actions.add);
        }
      }, "\u65B0\u589E"));
    }
    /**
     * 渲染操作栏
     * @returns {*}
     */

  }, {
    key: "renderOperationBar",
    value: function renderOperationBar() {
      var _this6 = this;

      var showSelect = this.meta.showSelect;
      var selectedRows = this.state.selectedRows;

      var menu = _react["default"].createElement(_antd.Menu, {
        onClick: function onClick(e) {
          var dispatch = _this6.props.dispatch;
          var selectedRows = _this6.state.selectedRows;
          if (!selectedRows) return;

          switch (e.key) {
            case "remove":
              dispatch({
                type: _this6.meta.resource + "/remove",
                payload: {
                  key: selectedRows.map(function (row) {
                    return row.key;
                  })
                },
                callback: function callback() {
                  _this6.setState({
                    selectedRows: []
                  });
                }
              });
              break;

            default:
              break;
          }
        },
        selectedKeys: []
      }, _react["default"].createElement(_Authorized["default"], {
        authority: this.meta.authority && this.meta.authority["delete"],
        noMatch: null
      }, _react["default"].createElement(_antd.Menu.Item, {
        key: "remove"
      }, "\u5220\u9664")));

      return _react["default"].createElement("div", {
        className: _DataList["default"].tableListOperator
      }, _react["default"].createElement(_antd.Row, {
        type: "flex",
        justify: "space-between"
      }, _react["default"].createElement(_antd.Col, null, this.renderOperationButtons(), showSelect && selectedRows.length > 0 && _react["default"].createElement("span", null, _react["default"].createElement(_antd.Button, null, "\u6279\u91CF\u64CD\u4F5C"), _react["default"].createElement(_antd.Dropdown, {
        overlay: menu
      }, _react["default"].createElement(_antd.Button, null, "\u66F4\u591A\u64CD\u4F5C ", _react["default"].createElement(_antd.Icon, {
        type: "down"
      }))))), _react["default"].createElement(_antd.Col, null, this.renderOperationExtend())));
    }
    /**
     * 操作栏扩展
     */

  }, {
    key: "renderOperationExtend",
    value: function renderOperationExtend() {}
    /**
     * 列表扩展
     */

  }, {
    key: "renderExtend",
    value: function renderExtend() {}
    /**
     * 渲染表格
     * @param inProps
     * @returns {*}
     */

  }, {
    key: "renderInfoModal",

    /**
     * render the info modal
     */
    value: function renderInfoModal() {
      if (this.props.renderInfoModal) {
        return this.props.renderInfoModal();
      }

      var form = this.props.form;
      var renderForm = this.props.renderForm || this.renderForm;
      var _this$meta2 = this.meta,
          resource = _this$meta2.resource,
          title = _this$meta2.title,
          addArgs = _this$meta2.addArgs;
      var _this$state2 = this.state,
          modalVisible = _this$state2.modalVisible,
          infoData = _this$state2.infoData,
          action = _this$state2.action;
      var updateMethods = {
        handleModalVisible: this.handleModalVisible,
        handleUpdate: this.handleUpdate,
        handleAdd: this.handleAdd
      };
      return modalVisible && _react["default"].createElement(_InfoModal["default"], (0, _extends2["default"])({
        renderForm: renderForm,
        title: title,
        action: action,
        resource: resource
      }, updateMethods, {
        visible: modalVisible,
        values: infoData,
        addArgs: addArgs,
        meta: this.meta,
        schema: this.schema
      }, this.meta.infoProps));
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        hasError: true
      });
      console.log("component error", error);
    }
  }, {
    key: "render",
    value: function render() {
      var mini = this.meta.mini;
      var modalVisible = this.state.modalVisible;
      var _this$props = this.props,
          renderOperationBar = _this$props.renderOperationBar,
          renderSearchBar = _this$props.renderSearchBar,
          renderOperateColumn = _this$props.renderOperateColumn;
      var operationBar = null;

      if (renderOperationBar) {
        operationBar = renderOperationBar();
      } else {
        operationBar = this.renderOperationBar && this.renderOperationBar();
      }

      var searchBar = null;

      if (renderSearchBar) {
        searchBar = renderSearchBar();
      } else {
        searchBar = this.renderSearchBar && this.renderSearchBar();
      }

      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_antd.Card, {
        bordered: false,
        style: {
          width: "100%"
        }
      }, _react["default"].createElement("div", {
        className: _DataList["default"].tableListForm
      }, searchBar), _react["default"].createElement("div", {
        className: _DataList["default"].tableList
      }, this.renderSearchForm && _react["default"].createElement("div", {
        className: _DataList["default"].tableListForm
      }, this.renderSearchForm()), operationBar, this.renderList())), modalVisible && this.renderInfoModal(), this.renderExtend && this.renderExtend());
    }
  }]);
  return DataList;
}(_react.PureComponent);

var _default = DataList;
exports["default"] = _default;
