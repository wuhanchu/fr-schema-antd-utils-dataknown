"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListColumn = getListColumn;
exports.getExportColumn = getExportColumn;
exports.createInput = createInput;
exports.convertDecoratorProps = convertDecoratorProps;
exports.createComponent = createComponent;
exports.createFilter = createFilter;
exports.createForm = createForm;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _componentDict = _interopRequireDefault(require("./componentDict"));

var _frSchema = require("fr-schema");

var _basic = _interopRequireDefault(require("../styles/basic.less"));

var _clone = _interopRequireDefault(require("clone"));

var _global = require("../styles/global");

var _moment = _interopRequireDefault(require("moment"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SelectOption = _antd.Select.Option;
var MentionsOption = _antd.Mentions.Option;
var FormItem = _antd.Form.Item;
var TabPane = _antd.Tabs.TabPane;
/**
 * get the table column
 * @param schema
 * @returns {Array}
 */

function getListColumn(schema, fieldConfList) {
  var oneRow = [];
  Object.keys(schema).sort(function (a, b) {
    return (schema[a].orderIndex === undefined || schema[a].orderIndex === null ? 9999 : schema[a].orderIndex) - (schema[b].orderIndex === undefined || schema[b].orderIndex === null ? 9999 : schema[b].orderIndex);
  }).forEach(function (key, index) {
    var item = schema[key];

    if (item.listHide || fieldConfList && !fieldConfList.includes(key)) {
      return;
    }

    oneRow.push(fieldToColumn(key, item));
  });
  return oneRow;
}
/**
 * 查找导出字段
 * @param schema
 * @param fieldConfList
 * @returns {Array}
 */


function getExportColumn(schema, fieldConfList) {
  var oneRow = [];
  Object.keys(schema).forEach(function (key) {
    var item = schema[key];

    if (item.addHide || fieldConfList && !fieldConfList.includes(key)) {
      return;
    }

    oneRow.push(fieldToColumn(key, item));
  });
  return oneRow.sort(function (a, b) {
    return (a.orderIndex || 9999) - (b.orderIndex || 9999);
  });
}
/**
 * 字段转换成列表项
 *
 * @param key 配置的key
 * @param item 字段项目
 */


function fieldToColumn(key, item) {
  var addItem = _objectSpread({}, item, {
    key: key,
    dataIndex: item.dict || item.type === "DatePicker" || item.unit ? key + "_remark" : key,
    render: item.render || function (value) {
      switch (item.type) {
        case "Avatar":
          return _react["default"].createElement(_antd.Avatar, {
            src: value
          });

        default:
          return _react["default"].createElement("div", {
            style: {
              wordWrap: "break-word",
              wordBreak: "break-all"
            }
          }, value);
      }
    }
  });

  return addItem;
}
/**
 * create the input0
 * @param item schema的field 属性
 * @param data 当前record的数据
 * @param form form对象
 * @param action 当前操作
 * @param itmePorps 会传入到FormItem的属性，没有传{}
 * colNum 一行有几个字段
 * @returns {*}
 */


function createInput(item, data, form) {
  var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _frSchema.actions.add;
  var itemProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var colNum = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var type = item.type || "Input"; // component props

  var props = _objectSpread({
    form: form,
    readOnly: action === _frSchema.actions.show || action === _frSchema.actions.update && item.readOnly,
    disabled: action === _frSchema.actions.show || action === _frSchema.actions.update && item.readOnly,
    onChange: function (event) {
      var value = event && event.currentTarget ? event.currentTarget.value : event;

      if (this && this.state && this.setState && this.state.data) {
        var _data = _objectSpread({}, this.state.data);

        _data[item.dataIndex] = value;
        this.setState({
          data: _data
        });
      }

      item.onChange && item.onChange.bind(this)(value, this && this.state, form);
    }.bind(this)
  }, item.props); //  create component


  var component = null;
  var decoratorProps = {};
  var defaultWidth = _global.globalStyle.form.input.width * (colNum > 3 ? 3 : colNum) / colNum; // initialValue

  var initialValue = data && data[item.dataIndex]; // 是否有定制方法

  form && delete props.defaultValue;

  if (item.renderInput) {
    var tempProps = _objectSpread({
      style: item.style || {
        width: defaultWidth
      },
      placeholder: !props.readOnly && "\u8BF7\u8F93\u5165".concat(item.title)
    }, props);

    component = item.renderInput.bind(this)(item, data, tempProps, action);
  } else {
    component = createComponent.bind(this)(item, data, props, action, defaultWidth);
  } // decoratorProps


  switch (type) {
    case "MultiSelect":
      initialValue = data && selectValueConvert(item, data[item.dataIndex]);
      break;

    case "Select":
      initialValue = data && selectValueConvert(item, data[item.dataIndex]);
      break;

    case "DatePicker":
      initialValue = initialValue ? (0, _moment["default"])(initialValue, _moment["default"].ISO_8601) : null;
      break;
  }

  decoratorProps = convertDecoratorProps(item); // 初始化数据

  if (component.props.defaultValue && action === _frSchema.actions.add && (initialValue === null || initialValue === undefined)) {
    initialValue = component.props.defaultValue;
    delete component.props.defaultValue;
  }

  if (initialValue) {
    decoratorProps.initialValue = initialValue;
  } //  delete the defaultValue
  // component.props && (delete component.props.defaultValue)


  return (!this || !this.state || !(item.infoShowFunc && item.infoShowFunc(this.state.data))) && _react["default"].createElement(FormItem, (0, _extends2["default"])({
    key: item.dataIndex,
    labelCol: _global.globalStyle.form.labelCol,
    wrapperCol: _global.globalStyle.form.wrapperCol,
    label: item.title + (item.unit ? "(" + item.unit + ")" : ""),
    extra: item.extra
  }, itemProps, item.itemProps), form ? form.getFieldDecorator(item.dataIndex, decoratorProps)(component) : component);
}
/**
 * 转换字段定义成 fieldDecorator
 * @param item
 * @returns {{rules: {message: (boolean|string), required: *}[]}}
 */


function convertDecoratorProps(item) {
  var _ref = item.decoratorProps || {},
      rules = _ref.rules,
      otherDecoratorProps = (0, _objectWithoutProperties2["default"])(_ref, ["rules"]);

  var decoratorProps = _objectSpread({
    rules: [{
      required: item.required,
      message: "\u8BF7\u8F93\u5165".concat(item.title, "\uFF01")
    }].concat(rules || [])
  }, otherDecoratorProps || {});

  return decoratorProps;
}
/**
 * 创建输入控件
 * @param item filed模型
 * @returns {React.SFCElement<{[p: string]: *}>}
 */


function createComponent(item, data, props, action) {
  var defaultWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 200;
  var type = item.type || "Input";
  var component,
      defaultValue = null;
  var options = [];

  switch (type) {
    case "Avatar":
      component = _react["default"].createElement(_antd.Avatar, props);
      break;

    case "MultiSelect":
      var mode = "multiple"; //default value

      if (action === _frSchema.actions.add) {
        Object.values(item.dict).forEach(function (dictItem) {
          if (dictItem["default"]) {
            defaultValue = defaultValue || [];
            defaultValue.push(dictItem.value);
          }
        });
      }

    case "Select":
      //default value
      if (!defaultValue && action === _frSchema.actions.add && item.dict) {
        Object.values(item.dict).some(function (dictItem) {
          // 在from下的默认值由 form 来传入
          if (!props.form && dictItem["default"]) {
            props.defaultValue = dictItem.value;
            return true;
          }
        });
      } // options


      item.dict && Object.values(item.dict).forEach(function (dictItem) {
        //check the dict Whether it matches
        if (dictItem.condition && (action === _frSchema.actions.add || action === _frSchema.actions.update)) {
          if (dictItem.condition instanceof Function) {
            if (!dictItem.condition(this.state.data)) {
              return;
            }
          } else if (Object.keys(dictItem.condition).some(function (key) {
            return !this || !this.state || !this.state.data || this.state.data[key] !== dictItem.condition[key];
          }.bind(this))) {
            return;
          }
        } // add to options


        return options.push(_react["default"].createElement(SelectOption, {
          key: dictItem.value,
          value: dictItem.value
        }, dictItem.remark));
      }.bind(this)); // judge whether show search

      var searchOptions = options.length > 10 ? {
        showSearch: true,
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase && option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      } : {}; // create the select

      component = _react["default"].createElement(_antd.Select, (0, _extends2["default"])({
        showSearch: true,
        allowClear: true,
        style: _objectSpread({
          width: defaultWidth
        }, item.style || {}),
        mode: mode,
        optionFilterProp: "children",
        placeholder: !props.readOnly && "请选择",
        disabled: props.readOnly
      }, searchOptions, props), options);
      break;

    case _componentDict["default"].Mentions:
      // options
      item.options && Object.values(item.options).forEach(function (dictItem) {
        // add to options
        return options.push(_react["default"].createElement(MentionsOption, {
          key: dictItem.value,
          value: dictItem.value
        }, dictItem.remark));
      }.bind(this)); // create the components

      component = _react["default"].createElement(_antd.Mentions, (0, _extends2["default"])({
        rows: "3"
      }, props), options);
      break;
    // create the upload input

    case "Upload":
      component = _react["default"].createElement(_antd.Upload, (0, _extends2["default"])({
        multiple: false,
        beforeUpload: function beforeUpload(file) {
          return false;
        }
      }, props), _react["default"].createElement(_antd.Button, null, _react["default"].createElement(_antd.Icon, {
        type: "upload"
      }), " \u9009\u62E9\u6587\u4EF6"));
      break;
    // create the upload input
    // case schemaFieldType.Table:
    //
    //     const Component = await import(item.componentPath)
    //     component = <Component {...props} />
    //     break
    //
    //  other component

    default:
      component = _react["default"].createElement(_componentDict["default"][type], _objectSpread({
        style: {
          width: defaultWidth
        },
        placeholder: !props.readOnly && "\u8BF7\u8F93\u5165".concat(item.title)
      }, props));
  } //return


  return component;
}
/**
 * 根据字段类型转换初始值
 * @param item
 * @param initialValue
 * @returns {*}
 */


function selectValueConvert(item, initialValue) {
  var result = initialValue;

  if (result === null || result == undefined) {
    return result;
  }

  if (item.type === _frSchema.schemaFieldType.MultiSelect && typeof initialValue === "string") {
    result = initialValue.split(",");

    if (typeof Object.values(item.dict)[0].value === "number") {
      result = result.map(function (value) {
        return parseInt(value);
      });
    }
  }

  if (item.type === _frSchema.schemaFieldType.Select) {
    if (!item.dict || !Object.values(item.dict)[0]) {
      return result;
    }

    if (typeof Object.values(item.dict)[0].value === "number" && typeof initialValue === "string") {
      result = parseInt(initialValue);
    } else if (typeof Object.values(item.dict)[0].value === "string") {
      result = initialValue.toString();
    }
  }

  return result;
}
/**
 * 增加搜索栏s输入框
 * @param form
 * @param inSchema
 * @param span
 * @returns {*[]}
 */


function createFilter(form, inSchema, span) {
  var schema = (0, _clone["default"])(inSchema);
  Object.keys(schema).forEach(function (key) {
    if (!schema[key]) {
      delete schema[key];
      return;
    }

    schema[key].dict && Object.keys(schema[key].dict).forEach(function (dictItem) {
      delete schema[key].dict[dictItem]["default"];
    });
  });
  var filter = Object.keys(schema).map(function (key) {
    return _react["default"].createElement(_antd.Col, {
      span: schema[key].span || span,
      key: "filter_" + key
    }, createInput.bind(null)(_objectSpread({}, schema[key], {
      dataIndex: key,
      required: false,
      props: {
        style: _objectSpread({}, schema[key].props && schema[key].props.style || {})
      }
    }), {}, form, _frSchema.actions.add));
  });
  return filter;
}
/**
 * 创建表单
 * colNum 表单列数
 * @param schema
 */


function createForm(column, data, form) {
  var _this = this;

  var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _frSchema.actions.add;
  var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var otherTabs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var extend = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var colNum = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var result = null; // create the from

  column.forEach(function (item) {
    if (!result) {
      result = item.tabKey ? {} : [];
    } // 修改隐藏 只读


    if (action === _frSchema.actions.update && item.editHide && !data[item.dataIndex]) {
      return;
    }

    var component = createInput.bind(_this)(item, data, form, action, {
      style: style
    }, colNum);

    if (result instanceof Array) {
      result.push({
        column: item,
        component: component
      });
    } else {
      result[item.tabKey] = result[item.tabKey] || [];
      result[item.tabKey].push({
        column: item,
        component: component
      });
    }
  }); // other tabs

  if (result instanceof Array) {
    return renderInputList(result, colNum);
  } else {
    return _react["default"].createElement(_antd.Tabs, {
      tabPosition: "left"
    }, Object.keys(result).map(function (listKey) {
      return _react["default"].createElement(TabPane, {
        tab: listKey,
        key: listKey
      }, result[listKey].length < 10 ? renderInputList(result[listKey], colNum) : renderInputList(result[listKey], colNum), extend[listKey] || null);
    }), Object.keys(otherTabs).map(function (key) {
      return _react["default"].createElement(TabPane, {
        tab: key,
        key: key
      }, otherTabs[key]);
    }));
  }
}
/**
 * render form list
 * @param list
 * @param colNum
 * @returns {Array}
 */


function renderInputList(list, colNum) {
  var itemList = [];
  var tempMum = 0;
  var tempList = [];
  list.forEach(function (item, index) {
    tempMum += item.column.colNum || 1;
    tempList.push(item);
    var push = false; //  分组情况下 强制换行

    if (index === 0 && item.column.groupName) {
      itemList.push(_react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
        className: _basic["default"].title
      }, list[index + 1].column.groupName)));
    }

    if (list[index + 1] && list[index + 1].column.groupName && item.column.groupName !== list[index + 1].column.groupName) {
      push = true;
    }

    if (push || tempMum >= colNum || index === list.length - 1) {
      itemList.push(_react["default"].createElement(_antd.Row, {
        key: "tempList_".concat(index)
      }, tempList.map(function (tempItem, tempIndex) {
        return _react["default"].createElement(_antd.Col, {
          key: "tempList_".concat(index, "_").concat(tempIndex, "}"),
          span: 24 / colNum * (tempItem.column.colNum || 1)
        }, tempItem.component);
      })));
      tempMum = 0;
      tempList = [];
    }

    if (push) {
      itemList.push(_react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_antd.Divider, {
        style: {
          margin: "5px 2px 5px 2px"
        }
      }), _react["default"].createElement("div", {
        className: _basic["default"].title
      }, list[index + 1].column.groupName)));
    }
  });
  return itemList;
}