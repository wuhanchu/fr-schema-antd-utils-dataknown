(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemas", function() { return schemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);


var schemas = null;
var services = null;
/**
 * 根据模型和服务 初始化 工具
 * @param {object} initSchema
 * @param {object} initServices
 */

function init(initSchema, initServices) {
  schemas = initSchema;
  services = initServices;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  components: _components__WEBPACK_IMPORTED_MODULE_1__["default"],
  utils: _utils__WEBPACK_IMPORTED_MODULE_0__["default"],
  services: services,
  schemas: schemas
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _componentDict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);









/* harmony default export */ __webpack_exports__["default"] = ({
  authority: _authority__WEBPACK_IMPORTED_MODULE_0__,
  component: _component__WEBPACK_IMPORTED_MODULE_1__,
  componentDict: _componentDict__WEBPACK_IMPORTED_MODULE_2__,
  file: _file__WEBPACK_IMPORTED_MODULE_3__,
  model: _model__WEBPACK_IMPORTED_MODULE_4__,
  request: _request__WEBPACK_IMPORTED_MODULE_5__,
  url: _url__WEBPACK_IMPORTED_MODULE_6__,
  utils: _utils__WEBPACK_IMPORTED_MODULE_7__,
  xlsx: _xlsx__WEBPACK_IMPORTED_MODULE_8__
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthority", function() { return getAuthority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthority", function() { return setAuthority; });
// use localStorage to store the authority info, which might be sent from server in actual project.
function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  var authorityString = typeof str === "undefined" ? localStorage.getItem("antd-pro-authority") : str; // authorityString could be admin, "admin", ["admin"]

  var authority;

  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }

  if (typeof authority === "string") {
    return [authority];
  }

  return authority || ["admin"];
}
function setAuthority(authority) {
  var proAuthority = typeof authority === "string" ? [authority] : authority;
  return localStorage.setItem("antd-pro-authority", JSON.stringify(proAuthority));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListColumn", function() { return getListColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExportColumn", function() { return getExportColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInput", function() { return createInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecoratorProps", function() { return convertDecoratorProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componentDict__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fr_schema__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_basic_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _styles_basic_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_basic_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var SelectOption = antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option;
var MentionsOption = antd__WEBPACK_IMPORTED_MODULE_4__["Mentions"].Option;
var FormItem = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"].TabPane;
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
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
            src: value
          });

        default:
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
  var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add;
  var itemProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var colNum = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var type = item.type || "Input"; // component props

  var props = _objectSpread({
    form: form,
    readOnly: action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].show || action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].update && item.readOnly,
    disabled: action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].show || action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].update && item.readOnly,
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
  var defaultWidth = _styles_global__WEBPACK_IMPORTED_MODULE_9__["globalStyle"].form.input.width * (colNum > 3 ? 3 : colNum) / colNum; // initialValue

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
      initialValue = initialValue ? moment__WEBPACK_IMPORTED_MODULE_10___default()(initialValue, moment__WEBPACK_IMPORTED_MODULE_10___default.a.ISO_8601) : null;
      break;
  }

  decoratorProps = convertDecoratorProps(item); // 初始化数据

  if (component.props.defaultValue && action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add && (initialValue === null || initialValue === undefined)) {
    initialValue = component.props.defaultValue;
    delete component.props.defaultValue;
  }

  if (initialValue) {
    decoratorProps.initialValue = initialValue;
  } //  delete the defaultValue
  // component.props && (delete component.props.defaultValue)


  return (!this || !this.state || !(item.infoShowFunc && item.infoShowFunc(this.state.data))) && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FormItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    key: item.dataIndex,
    labelCol: _styles_global__WEBPACK_IMPORTED_MODULE_9__["globalStyle"].form.labelCol,
    wrapperCol: _styles_global__WEBPACK_IMPORTED_MODULE_9__["globalStyle"].form.wrapperCol,
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
      otherDecoratorProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["rules"]);

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
      component = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], props);
      break;

    case "MultiSelect":
      var mode = "multiple"; //default value

      if (action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add) {
        Object.values(item.dict).forEach(function (dictItem) {
          if (dictItem["default"]) {
            defaultValue = defaultValue || [];
            defaultValue.push(dictItem.value);
          }
        });
      }

    case "Select":
      //default value
      if (!defaultValue && action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add && item.dict) {
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
        if (dictItem.condition && (action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add || action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].update)) {
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


        return options.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SelectOption, {
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

      component = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
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

    case _componentDict__WEBPACK_IMPORTED_MODULE_5__["default"].Mentions:
      // options
      item.options && Object.values(item.options).forEach(function (dictItem) {
        // add to options
        return options.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MentionsOption, {
          key: dictItem.value,
          value: dictItem.value
        }, dictItem.remark));
      }.bind(this)); // create the components

      component = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Mentions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        rows: "3"
      }, props), options);
      break;
    // create the upload input

    case "Upload":
      component = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Upload"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        multiple: false,
        beforeUpload: function beforeUpload(file) {
          return false;
        }
      }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
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
      component = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_componentDict__WEBPACK_IMPORTED_MODULE_5__["default"][type], _objectSpread({
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

  if (item.type === fr_schema__WEBPACK_IMPORTED_MODULE_6__["schemaFieldType"].MultiSelect && typeof initialValue === "string") {
    result = initialValue.split(",");

    if (typeof Object.values(item.dict)[0].value === "number") {
      result = result.map(function (value) {
        return parseInt(value);
      });
    }
  }

  if (item.type === fr_schema__WEBPACK_IMPORTED_MODULE_6__["schemaFieldType"].Select) {
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
  var schema = clone__WEBPACK_IMPORTED_MODULE_8___default()(inSchema);
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
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      span: schema[key].span || span,
      key: "filter_" + key
    }, createInput.bind(null)(_objectSpread({}, schema[key], {
      dataIndex: key,
      required: false,
      props: {
        style: _objectSpread({}, schema[key].props && schema[key].props.style || {})
      }
    }), {}, form, fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add));
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

  var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].add;
  var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var otherTabs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var extend = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var colNum = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var result = null; // create the from

  column.forEach(function (item) {
    if (!result) {
      result = item.tabKey ? {} : [];
    } // 修改隐藏 只读


    if (action === fr_schema__WEBPACK_IMPORTED_MODULE_6__["actions"].update && item.editHide && !data[item.dataIndex]) {
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
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
      tabPosition: "left"
    }, Object.keys(result).map(function (listKey) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabPane, {
        tab: listKey,
        key: listKey
      }, result[listKey].length < 10 ? renderInputList(result[listKey], colNum) : renderInputList(result[listKey], colNum), extend[listKey] || null);
    }), Object.keys(otherTabs).map(function (key) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabPane, {
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
      itemList.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: _styles_basic_less__WEBPACK_IMPORTED_MODULE_7___default.a.title
      }, list[index + 1].column.groupName)));
    }

    if (list[index + 1] && list[index + 1].column.groupName && item.column.groupName !== list[index + 1].column.groupName) {
      push = true;
    }

    if (push || tempMum >= colNum || index === list.length - 1) {
      itemList.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        key: "tempList_".concat(index)
      }, tempList.map(function (tempItem, tempIndex) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          key: "tempList_".concat(index, "_").concat(tempIndex, "}"),
          span: 24 / colNum * (tempItem.column.colNum || 1)
        }, tempItem.component);
      })));
      tempMum = 0;
      tempList = [];
    }

    if (push) {
      itemList.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
        style: {
          margin: "5px 2px 5px 2px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: _styles_basic_less__WEBPACK_IMPORTED_MODULE_7___default.a.title
      }, list[index + 1].column.groupName)));
    }
  });
  return itemList;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

var TextArea = antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea,
    Password = antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password;
var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Radio"].Group;
var RangePicker = antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"].RangePicker;
/* harmony default export */ __webpack_exports__["default"] = ({
  Button: antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
  Upload: antd__WEBPACK_IMPORTED_MODULE_0__["Upload"],
  TreeSelect: antd__WEBPACK_IMPORTED_MODULE_0__["TreeSelect"],
  Input: antd__WEBPACK_IMPORTED_MODULE_0__["Input"],
  DatePicker: antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"],
  RangePicker: RangePicker,
  Slider: antd__WEBPACK_IMPORTED_MODULE_0__["Slider"],
  InputNumber: antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"],
  TextArea: TextArea,
  Select: antd__WEBPACK_IMPORTED_MODULE_0__["Select"],
  Radio: antd__WEBPACK_IMPORTED_MODULE_0__["Radio"],
  Option: Option,
  Switch: antd__WEBPACK_IMPORTED_MODULE_0__["Switch"],
  Avatar: antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"],
  RadioGroup: RadioGroup,
  Password: Password,
  Mentions: antd__WEBPACK_IMPORTED_MODULE_0__["Mentions"]
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fr-schema");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(12);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n._1x3hGr9gdY0D3w_KZDJY_4 {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n", ""]);
// Exports
exports.locals = {
	"title": "_1x3hGr9gdY0D3w_KZDJY_4"
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("clone");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentHeight", function() { return contentHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyle", function() { return globalStyle; });
// 不需要翻页高度
var contentHeight = document.documentElement.clientHeight - 120;
var globalStyle = {
  tree: {
    height: 700
  },
  // 表单
  form: {
    input: {
      width: 300 // 输入框宽度

    },
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  },
  // 搜索过滤器
  filter: {
    input: {
      width: 200 // 输入框宽度

    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s2ab", function() { return s2ab; });
var s2ab = function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);

  for (var i = 0; i !== s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }

  return buf;
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBaseModel", function() { return createBaseModel; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * create the base model
 * @param services
 * @returns {*}
 */

function createBaseModel(services) {
  var refreshList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    state: {
      data: {
        list: [],
        pagination: {}
      },
      info: null
    },
    effects: {
      fetch:
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function fetch(_ref, _ref2) {
        var payload, call, put, select, _ref3, currentUser, _ref4, token, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetch$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = _ref.payload;
                call = _ref2.call, put = _ref2.put, select = _ref2.select;
                _context.next = 4;
                return select(function (state) {
                  return state.user;
                });

              case 4:
                _ref3 = _context.sent;
                currentUser = _ref3.currentUser;
                _ref4 = currentUser && currentUser.user || {}, token = _ref4.token;
                _context.next = 9;
                return call(services.get, _objectSpread({
                  token: token
                }, payload));

              case 9:
                response = _context.sent;
                _context.next = 12;
                return put({
                  type: "save",
                  payload: {
                    data: response
                  }
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, fetch);
      }),
      add:
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function add(_ref5, _ref6) {
        var payload, callback, call, put, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function add$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = _ref5.payload, callback = _ref5.callback;
                call = _ref6.call, put = _ref6.put;
                _context2.next = 4;
                return call(services.post, payload);

              case 4:
                response = _context2.sent;
                _context2.next = 7;
                return put({
                  type: "save",
                  payload: {
                    info: response
                  }
                });

              case 7:
                if (callback) callback();
                _context2.t0 = refreshList;

                if (!_context2.t0) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 12;
                return put({
                  type: "fetch"
                });

              case 12:
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("新增成功");

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, add);
      }),
      remove:
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function remove(_ref7, _ref8) {
        var payload, callback, call, put;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function remove$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = _ref7.payload, callback = _ref7.callback;
                call = _ref8.call, put = _ref8.put;
                _context3.next = 4;
                return call(services["delete"], payload);

              case 4:
                _context3.next = 6;
                return put({
                  type: "save",
                  payload: {
                    info: null
                  }
                });

              case 6:
                if (callback) callback();
                _context3.t0 = refreshList;

                if (!_context3.t0) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 11;
                return put({
                  type: "fetch"
                });

              case 11:
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("删除成功");

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, remove);
      }),
      update:
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function update(_ref9, _ref10) {
        var payload, callback, call, put, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function update$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                payload = _ref9.payload, callback = _ref9.callback;
                call = _ref10.call, put = _ref10.put;
                _context4.next = 4;
                return call(services.put, payload);

              case 4:
                response = _context4.sent;
                _context4.next = 7;
                return put({
                  type: "save",
                  payload: {
                    info: response
                  }
                });

              case 7:
                if (callback) callback();
                _context4.t0 = refreshList;

                if (!_context4.t0) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 12;
                return put({
                  type: "fetch"
                });

              case 12:
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("修改成功");

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, update);
      })
    },
    reducers: {
      save: function save(state, action) {
        return _objectSpread({}, state, {}, action.payload);
      }
    }
  };
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dva_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var dva_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dva_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var hash_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hash_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var _extensions_oauth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新增或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新增或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};

var checkStatus =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(response) {
    var errorText, data, error;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errorText = null;
            _context.prev = 1;
            _context.next = 4;
            return response.clone().json();

          case 4:
            data = _context.sent;
            errorText = data.error_description || data.extMessage || data.errorMessage;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", response);

          case 11:
            if (!(!(errorText && errorText !== "") && response.status >= 200 && response.status < 300)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", response);

          case 13:
            // if (response.status !== 401) {
            //   notification.error({
            //     message: `请求错误 ${response.status}: ${response.url}`,
            //     description: errorText,
            //   });
            // }
            error = new Error(errorText);
            error.name = response.status;
            error.response = response;
            throw error;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function checkStatus(_x) {
    return _ref.apply(this, arguments);
  };
}();

var cachedSave = function cachedSave(response, hashcode) {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  // const contentType = response.headers.get("Content-Type")
  // if (contentType && contentType.match(/application\/json/i)) {
  //     // All data is saved as text
  //     response
  //         .clone()
  //         .text()
  //         .then(content => {
  //             sessionStorage.setItem(hashcode, content)
  //             sessionStorage.setItem(`${hashcode}:timestamp`, Date.now())
  //         })
  //         .catch(e => {
  //             console.log("cachedSave", e.message)
  //         })
  // }
  return response;
};
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */


function request(obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    expirys: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isAntdPro"])()
  };
  // adapt the other param
  var url = obj;

  if (obj instanceof Object) {
    url = obj.url;
  }
  /**
   * Produce fingerprints based on url and parameters
   * Maybe url has the same parameters
   */


  var fingerprint = url + (options.body ? JSON.stringify(options.body) : "");
  var hashcode = hash_js__WEBPACK_IMPORTED_MODULE_5___default.a.sha256().update(fingerprint).digest("hex");
  var defaultOptions = {
    credentials: "include"
  };

  var newOptions = _objectSpread({}, defaultOptions, {
    body: obj.data
  }, obj, {}, options);

  if (newOptions.method === "POST" || newOptions.method === "PUT" || newOptions.method === "PATCH" || newOptions.method === "DELETE") {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = _objectSpread({
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      }, newOptions.headers);
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = _objectSpread({
        Accept: "application/json"
      }, newOptions.headers);
    }
  }

  var expirys = options.expirys; // options.expirys !== false, return the cache,

  if (options.expirys) {
    var cached = sessionStorage.getItem(hashcode);
    var whenCached = sessionStorage.getItem("".concat(hashcode, ":timestamp"));

    if (cached !== null && whenCached !== null) {
      var age = (Date.now() - whenCached) / 1000;

      if (age < expirys) {
        var response = new Response(new Blob([cached]));
        return response.json();
      }

      sessionStorage.removeItem(hashcode);
      sessionStorage.removeItem("".concat(hashcode, ":timestamp"));
    }
  }

  return new Promise(function (resolve, reject) {
    var token = localStorage.getItem("token");

    if (!token) {
      resolve(null);
    }

    token = JSON.parse(token);

    if (token.expires > Date.now()) {
      resolve(token);
    } else if (!options.skipOauth) {
      return Object(_extensions_oauth__WEBPACK_IMPORTED_MODULE_7__["refreshToken"])().then(function (token) {
        var expires = Date.now() + token.data.expires_in;
        localStorage.setItem("token", JSON.stringify(_objectSpread({}, token.data, {
          expires: expires
        })));
        resolve(token.data);
      })["catch"](function (e) {
        window.g_app._store.dispatch({
          type: "login/logout"
        });
      });
    } else {
      resolve(null);
    }
  }).then(function (token) {
    if (token) {
      newOptions.headers = newOptions.headers || {};
      newOptions.headers.Authorization = "Bearer ".concat(token.access_token);
    }

    return dva_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, newOptions);
  }).then(checkStatus).then(function (response) {
    return cachedSave(response, hashcode);
  }).then(
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(response) {
      var contentType, result, error;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(newOptions.method === "DELETE" || response.status === 204)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", response.text());

            case 2:
              contentType = response.headers.get("content-type");

              if (!(contentType && contentType.indexOf("application/json") !== -1)) {
                _context2.next = 15;
                break;
              }

              _context2.next = 6;
              return response.json();

            case 6:
              result = _context2.sent;

              if (!(result && result.errorMessage)) {
                _context2.next = 12;
                break;
              }

              error = new Error(result.errorMessage);
              error.name = response.status;
              error.response = response;
              throw error;

            case 12:
              return _context2.abrupt("return", result);

            case 15:
              return _context2.abrupt("return", response.text());

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }())["catch"](function (e) {
    var status = e.name;
    console.log("window.g_app._store", window.g_app._store);

    if (status === 401 && window.g_app._store) {
      // @HACK

      /* eslint-disable no-underscore-dangle */
      if (!window.location.href.includes("login")) {
        window.g_app._store.dispatch({
          type: "login/logout"
        });

        antd__WEBPACK_IMPORTED_MODULE_4__["notification"].error({
          message: "账户出错"
        });
      }

      return;
    }

    antd__WEBPACK_IMPORTED_MODULE_4__["message"].error(e.message);
    return new Promise(function (resolve, reject) {
      reject(e.message);
    });
  });
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("dva/fetch");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hash.js");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedZero", function() { return fixedZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeDistance", function() { return getTimeDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlainNode", function() { return getPlainNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitUppercase", function() { return digitUppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return getRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageQuery", function() { return getPageQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryPath", function() { return getQueryPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWan", function() { return formatWan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAntdPro", function() { return isAntdPro; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nzh_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var nzh_cn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nzh_cn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function fixedZero(val) {
  return val * 1 < 10 ? "0".concat(val) : val;
}
function getTimeDistance(type) {
  var now = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  if (type === "today") {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment__WEBPACK_IMPORTED_MODULE_2___default()(now), moment__WEBPACK_IMPORTED_MODULE_2___default()(now.getTime() + (oneDay - 1000))];
  }

  if (type === "week") {
    var day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    var beginTime = now.getTime() - day * oneDay;
    return [moment__WEBPACK_IMPORTED_MODULE_2___default()(beginTime), moment__WEBPACK_IMPORTED_MODULE_2___default()(beginTime + (7 * oneDay - 1000))];
  }

  if (type === "month") {
    var _year = now.getFullYear();

    var month = now.getMonth();
    var nextDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(now).add(1, "months");
    var nextYear = nextDate.year();
    var nextMonth = nextDate.month();
    return [moment__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_year, "-").concat(fixedZero(month + 1), "-01 00:00:00")), moment__WEBPACK_IMPORTED_MODULE_2___default()(moment__WEBPACK_IMPORTED_MODULE_2___default()("".concat(nextYear, "-").concat(fixedZero(nextMonth + 1), "-01 00:00:00")).valueOf() - 1000)];
  }

  var year = now.getFullYear();
  return [moment__WEBPACK_IMPORTED_MODULE_2___default()("".concat(year, "-01-01 00:00:00")), moment__WEBPACK_IMPORTED_MODULE_2___default()("".concat(year, "-12-31 23:59:59"))];
}
function getPlainNode(nodeList) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var arr = [];
  nodeList.forEach(function (node) {
    var item = node;
    item.path = "".concat(parentPath, "/").concat(item.path || "").replace(/\/+/g, "/");
    item.exact = true;

    if (item.children && !item.component) {
      arr.push.apply(arr, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(getPlainNode(item.children, item.path)));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }

      arr.push(item);
    }
  });
  return arr;
}
function digitUppercase(n) {
  return nzh_cn__WEBPACK_IMPORTED_MODULE_4___default.a.toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn("Two path are equal!"); // eslint-disable-line
  }

  var arr1 = str1.split("/");
  var arr2 = str2.split("/");

  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  }

  if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }

  return 3;
}

function getRenderArr(routes) {
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    // 去重
    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    }); // 是否包含

    var isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    });

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }

  return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */


function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  }); // Replace path to '' eg. path='user' /user/name => name

  routes = routes.map(function (item) {
    return item.replace(path, "");
  }); // Get the route to be rendered to remove the deep rendering

  var renderArr = getRenderArr(routes); // Conversion and stitching parameters

  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _objectSpread({
      exact: exact
    }, routerData["".concat(path).concat(item)], {
      key: "".concat(path).concat(item),
      path: "".concat(path).concat(item)
    });
  });
  return renderRoutes;
}
function getPageQuery() {
  return Object(qs__WEBPACK_IMPORTED_MODULE_5__["parse"])(window.location.href.split("?")[1]);
}
function getQueryPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var search = Object(qs__WEBPACK_IMPORTED_MODULE_5__["stringify"])(query);

  if (search.length) {
    return "".concat(path, "?").concat(search);
  }

  return path;
}
/* eslint no-useless-escape:0 */

var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
function isUrl(path) {
  return reg.test(path);
}
function formatWan(val) {
  var v = val * 1;
  if (!v || Number.isNaN(v)) return "";
  var result = val;

  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, result, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      style: {
        position: "relative",
        top: -2,
        fontSize: 14,
        fontStyle: "normal",
        marginLeft: 2
      }
    }, "\u4E07"));
  }

  return result;
} // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

function isAntdPro() {
  return window.location.hostname === "preview.pro.ant.design";
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("nzh/cn");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthToken", function() { return OAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return refreshToken; });
var ClientOAuth2 = __webpack_require__(31);

var axios = __webpack_require__(32);

var OAuthToken = ClientOAuth2.Token;
/* harmony default export */ __webpack_exports__["default"] = (new ClientOAuth2({
  clientId: "web",
  accessTokenUri: "/auth/oauth2/token",
  authorizationUri: "/auth/oauth2/token?grant_type=refresh_token",
  scopes: "server"
}));
var getToken = function getToken(params) {
  var username = params.userName,
      password = params.password,
      code = params.code;
  var grantType = "password";
  var scope = "server";
  var randomStr = Math.random().toString(36).substr(2);
  return axios({
    method: "POST",
    url: "/api/auth/oauth/token",
    headers: {
      Authorization: "Basic dGFyb2NvOnRhcm9jbw=="
    },
    params: {
      username: username,
      password: password,
      randomStr: randomStr,
      code: code,
      grant_type: grantType,
      scope: scope
    }
  });
};
var refreshToken = function refreshToken() {
  var token = localStorage.getItem("token");

  if (!token) {
    return new Promise(function (resolve) {
      resolve(null);
    });
  }

  token = JSON.parse(token);
  var grantType = "refresh_token";
  return axios({
    method: "POST",
    url: "/api/auth/oauth/token",
    headers: {
      Authorization: "Basic dGFyb2NvOnRhcm9jbw=="
    },
    params: {
      grant_type: grantType,
      refresh_token: token.refresh_token
    }
  });
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("client-oauth2");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParams", function() { return getUrlParams; });
function getUrlParams(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportData", function() { return exportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportTable", function() { return exportTable; });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);



/**
 * 导出数据
 * @param fileName
 * @param data
 * @param columns
 */

function exportData(fileName, data, columns) {
  // 删除操作栏
  var tempData = data.map(function (item) {
    var result = {};
    columns.forEach(function (column) {
      result[column["title"]] = item[column["dataIndex"]];
    });
    return result;
  });
  var ws = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.json_to_sheet(tempData);
  var ws_name = fileName;
  var workbook = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_new();
  var sheet = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_append_sheet(workbook, ws, ws_name); // write

  var wbout = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.write(workbook, {
    bookType: "xlsx",
    bookSST: true,
    type: "binary"
  });
  var fname = fileName + "." + "xlsx";
  var blob = new Blob([Object(_file__WEBPACK_IMPORTED_MODULE_2__["s2ab"])(wbout)], {
    type: "application/octet-stream"
  });
  file_saver__WEBPACK_IMPORTED_MODULE_1___default.a.saveAs(blob, fname);
}
/**
 * 导出表格
 * @param fileName
 * @param data
 * @param statics
 * @param extendParam
 */

function exportTable(fileName, data, statics) {
  var table = document.getElementsByTagName("table")[0]; // 删除操作栏

  var workbook = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_new();
  var sheet = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.table_to_sheet(table);
  var sheetData = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_to_json(sheet);
  sheetData = sheetData.map(function (item) {
    delete item["操作"];
    return item;
  });
  sheet = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.json_to_sheet(statics);
  xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_add_json(sheet, ef, {
    origin:  true ? statics.length + 2 : undefined
  }); // show convert

  Object.values(sheet).forEach(function (item) {
    if (item.v && typeof item.v === "number" && item.v > 9999999) {
      item.t = "s";
      item.v = item.v.toString();
    }
  });
  sheet["!cols"] = [];
  var length = {};
  sheetData.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      var sonItem = item[key];
      length[key] = sonItem && sonItem.toString().length * 1.3 > (length[key] || 10) ? sonItem.toString().length * 1.3 : length[key] || 10;
    });
  });
  sheet["!cols"] = Object.values(length).map(function (item) {
    return {
      wch: item
    };
  });
  xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_append_sheet(workbook, sheet, "SheetJS"); // write

  var wbout = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.write(workbook, {
    bookType: "xlsx",
    bookSST: true,
    type: "binary"
  });
  var fname = fileName + "." + "xlsx";
  var blob = new Blob([Object(_file__WEBPACK_IMPORTED_MODULE_2__["s2ab"])(wbout)], {
    type: "application/octet-stream"
  });
  file_saver__WEBPACK_IMPORTED_MODULE_1___default.a.saveAs(blob, fname);
}
/* harmony default export */ __webpack_exports__["default"] = (xlsx__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Authorized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({
  Authorized: _Authorized__WEBPACK_IMPORTED_MODULE_1__["default"]
}, _Page__WEBPACK_IMPORTED_MODULE_2__));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Authorized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _Secured__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _CheckPermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _renderAuthorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
 // import AuthorizedRoute from './AuthorizedRoute';




_Authorized__WEBPACK_IMPORTED_MODULE_0__["default"].Secured = _Secured__WEBPACK_IMPORTED_MODULE_1__["default"]; // Authorized.AuthorizedRoute = AuthorizedRoute;

_Authorized__WEBPACK_IMPORTED_MODULE_0__["default"].check = _CheckPermissions__WEBPACK_IMPORTED_MODULE_2__["default"];
var RenderAuthorize = Object(_renderAuthorize__WEBPACK_IMPORTED_MODULE_3__["default"])(_Authorized__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (RenderAuthorize);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckPermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);



var Authorized = function Authorized(_ref) {
  var children = _ref.children,
      authority = _ref.authority,
      _ref$noMatch = _ref.noMatch,
      noMatch = _ref$noMatch === void 0 ? null : _ref$noMatch;
  var childrenRender = typeof children === 'undefined' ? null : children;
  var dom = Object(_CheckPermissions__WEBPACK_IMPORTED_MODULE_1__["default"])(authority, childrenRender, noMatch);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dom);
};

/* harmony default export */ __webpack_exports__["default"] = (Authorized);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPermissions", function() { return checkPermissions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderAuthorize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _PromiseRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);

 // eslint-disable-next-line import/no-cycle


/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 | Permission judgment } authority
 * @param { 你的权限 | Your permission description } currentAuthority
 * @param { 通过的组件 | Passing components } target
 * @param { 未通过的组件 | no pass components } Exception
 */

var checkPermissions = function checkPermissions(authority, currentAuthority, target, Exception) {
  // 没有判定权限.默认查看所有
  // Retirement authority, return target;
  if (!authority) {
    return target;
  } // 数组处理


  if (Array.isArray(authority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(function (item) {
        return authority.includes(item);
      })) {
        return target;
      }
    } else if (authority.includes(currentAuthority)) {
      return target;
    }

    return Exception;
  } // string 处理


  if (typeof authority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(function (item) {
        return authority === item;
      })) {
        return target;
      }
    } else if (authority === currentAuthority) {
      return target;
    }

    return Exception;
  } // Promise 处理


  if (authority instanceof Promise) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PromiseRender__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ok: target,
      error: Exception,
      promise: authority
    });
  } // Function 处理


  if (typeof authority === 'function') {
    try {
      var bool = authority(currentAuthority); // 函数执行后返回值是 Promise

      if (bool instanceof Promise) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PromiseRender__WEBPACK_IMPORTED_MODULE_2__["default"], {
          ok: target,
          error: Exception,
          promise: bool
        });
      }

      if (bool) {
        return target;
      }

      return Exception;
    } catch (error) {
      throw error;
    }
  }

  throw new Error('unsupported parameters');
};



function check(authority, target, Exception) {
  return checkPermissions(authority, _renderAuthorize__WEBPACK_IMPORTED_MODULE_1__["CURRENT"], target, Exception);
}

/* harmony default export */ __webpack_exports__["default"] = (check);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT", function() { return CURRENT; });
/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */
var CURRENT = 'NULL';
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */

var renderAuthorize = function renderAuthorize(Authorized) {
  return function (currentAuthority) {
    if (currentAuthority) {
      if (typeof currentAuthority === 'function') {
        CURRENT = currentAuthority();
      }

      if (Object.prototype.toString.call(currentAuthority) === '[object String]' || Array.isArray(currentAuthority)) {
        CURRENT = currentAuthority;
      }
    } else {
      CURRENT = 'NULL';
    }

    return Authorized;
  };
};


/* harmony default export */ __webpack_exports__["default"] = (function (Authorized) {
  return renderAuthorize(Authorized);
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PromiseRender; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Secured__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49);









 // eslint-disable-next-line import/no-cycle

var PromiseRender =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PromiseRender, _React$Component);

  function PromiseRender() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PromiseRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PromiseRender)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      component: function component() {
        return null;
      }
    };

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      var component = _this.state.component;

      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default()(nextProps, _this.props)) {
        _this.setRenderComponent(nextProps);
      }

      if (nextState.component !== component) return true;
      return false;
    };

    _this.checkIsInstantiation = function (target) {
      if (Object(_Secured__WEBPACK_IMPORTED_MODULE_9__["isComponentClass"])(target)) {
        var Target = target;
        return function (props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Target, props);
        };
      }

      if (react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement(target)) {
        return function (props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(target, props);
        };
      }

      return function () {
        return target;
      };
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PromiseRender, [{
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
          rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props, ["ok", "error", "promise"]);

      return Component ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, rest) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          margin: 'auto',
          paddingTop: 50,
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Spin"], {
        size: "large"
      }));
    }
  }]);

  return PromiseRender;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentClass", function() { return isComponentClass; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckPermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);


/**
 * 默认不能访问任何页面
 * default is "NULL"
 */

var Exception403 = function Exception403() {
  return 403;
};

var isComponentClass = function isComponentClass(component) {
  if (!component) return false;
  var proto = Object.getPrototypeOf(component);
  if (proto === react__WEBPACK_IMPORTED_MODULE_0___default.a.Component || proto === Function.prototype) return true;
  return isComponentClass(proto);
}; // Determine whether the incoming component has been instantiated
// AuthorizedRoute is already instantiated
// Authorized  render is already instantiated, children is no instantiated
// Secured is not instantiated

var checkIsInstantiation = function checkIsInstantiation(target) {
  if (isComponentClass(target)) {
    var Target = target;
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Target, props);
    };
  }

  if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(target)) {
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(target, props);
    };
  }

  return function () {
    return target;
  };
};
/**
 * 用于判断是否拥有权限访问此 view 权限
 * authority 支持传入 string, () => boolean | Promise
 * e.g. 'user' 只有 user 用户能访问
 * e.g. 'user,admin' user 和 admin 都能访问
 * e.g. ()=>boolean 返回true能访问,返回false不能访问
 * e.g. Promise  then 能访问   catch不能访问
 * e.g. authority support incoming string, () => boolean | Promise
 * e.g. 'user' only user user can access
 * e.g. 'user, admin' user and admin can access
 * e.g. () => boolean true to be able to visit, return false can not be accessed
 * e.g. Promise then can not access the visit to catch
 * @param {string | function | Promise} authority
 * @param {ReactNode} error 非必需参数
 */


var authorize = function authorize(authority, error) {
  /**
   * conversion into a class
   * 防止传入字符串时找不到staticContext造成报错
   * String parameters can cause staticContext not found error
   */
  var classError = false;

  if (error) {
    classError = function classError() {
      return error;
    };
  }

  if (!authority) {
    throw new Error('authority is required');
  }

  return function decideAuthority(target) {
    var component = Object(_CheckPermissions__WEBPACK_IMPORTED_MODULE_1__["default"])(authority, target, classError || Exception403);
    return checkIsInstantiation(component);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (authorize);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfForm", function() { return _ConfForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DataList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataList", function() { return _DataList__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ExtendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendModal", function() { return _ExtendModal__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _InfoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoForm", function() { return _InfoForm__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _InfoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoModal", function() { return _InfoModal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ListPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return _ListPage__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _InfoForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_10__);








var _dec, _dec2, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FormItem = antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item;
var ConfForm = (_dec = Object(dva__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (_ref) {
  var weixinMember = _ref.weixinMember,
      user = _ref.user,
      loading = _ref.loading;
  return {
    member: weixinMember.member,
    user: user.currentUser,
    loading: loading.models.weixinMember
  };
}), _dec2 = antd__WEBPACK_IMPORTED_MODULE_8__["Form"].create(), _dec(_class = _dec2(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ConfForm, _PureComponent);

  function ConfForm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ConfForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ConfForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ConfForm, [{
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit,
        hideRequiredMark: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_InfoForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        values: data,
        form: form,
        resource: resource || "weixinMember"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FormItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, submitFormLayout, {
        style: {
          marginTop: 32
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: loading
      }, "\u4FDD\u5B58")));
    }
  }]);

  return ConfForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (ConfForm);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fr_schema__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _InfoForm_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var _InfoForm_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_InfoForm_less__WEBPACK_IMPORTED_MODULE_9__);










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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(InfoForm, _PureComponent);

  function InfoForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InfoForm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InfoForm).call(this, props));
    _this.state = {
      data: props.values || {},
      updateFlag: !!props.values // set column

    };
    _this.state.column = Object(fr_schema__WEBPACK_IMPORTED_MODULE_6__["getInfoColumn"])(props.schema || _index__WEBPACK_IMPORTED_MODULE_7__["schemas"][props.resource], props.action);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InfoForm, [{
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
      return _utils_component__WEBPACK_IMPORTED_MODULE_8__["createForm"].bind(this)(column, data, form, action, style, otherTabs, extend, colNum);
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      return this.renderContent(data);
    }
  }]);

  return InfoForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (InfoForm);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(54);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".ant-input-disabled {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-select-disabled {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-input[disabled] {\n  color: rgba(0, 0, 0, 0.85);\n}\n", ""]);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("dva");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _StandardTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fr_schema__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
/* harmony import */ var _Authorized_Authorized__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39);
/* harmony import */ var _DataList_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61);
/* harmony import */ var _DataList_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_DataList_less__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _InfoModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var schemas = fr_schema__WEBPACK_IMPORTED_MODULE_11___default.a.schemas;

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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(DataList, _PureComponent);

  function DataList(props, meta) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, DataList);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(DataList).call(this, props));

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
        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(data, schema) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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

                antd__WEBPACK_IMPORTED_MODULE_10__["message"].success("添加成功");

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
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(data, schema) {
        var idKey;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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

                antd__WEBPACK_IMPORTED_MODULE_10__["message"].success("修改成功");

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
      var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(data) {
        var idKey;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
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

                antd__WEBPACK_IMPORTED_MODULE_10__["message"].success("删除成功");

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

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_StandardTable__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(DataList, [{
    key: "createFilters",
    value: function createFilters(inSchema) {
      var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
      return Object(_utils_component__WEBPACK_IMPORTED_MODULE_14__["createFilter"])(this.props.form, inSchema, span);
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
      var columns = Object(_utils_component__WEBPACK_IMPORTED_MODULE_14__["getListColumn"])(this.schema, fields);
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
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Authorized_Authorized__WEBPACK_IMPORTED_MODULE_15__["default"], {
            authority: _this2.meta.authority && _this2.meta.authority.update,
            noMatch: null
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", {
            onClick: function onClick() {
              return _this2.handleModalVisible(true, record, fr_schema__WEBPACK_IMPORTED_MODULE_11__["actions"].update);
            }
          }, "\u4FEE\u6539")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Authorized_Authorized__WEBPACK_IMPORTED_MODULE_15__["default"], {
            authority: _this2.meta.authority && _this2.meta.authority["delete"],
            noMatch: null
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
            type: "vertical"
          }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Popconfirm"], {
            title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",
            onConfirm: function onConfirm(e) {
              _this2.handleDelete(record);

              e.stopPropagation();
            }
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", null, "\u5220\u9664"))), _this2.renderOperateColumnExtend(record));
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
      var _refreshList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
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
                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  var data, list;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
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
      var _requestList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
        var tempArgs,
            queryArgs,
            data,
            _args7 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
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
      if (!lodash_isequal__WEBPACK_IMPORTED_MODULE_12___default()(this.state.data, nextState.data)) {
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
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Authorized_Authorized__WEBPACK_IMPORTED_MODULE_15__["default"], {
        authority: this.meta.authority && this.meta.authority.add,
        noMatch: null
      }, !this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "primary",
        onClick: function onClick() {
          return _this5.handleModalVisible(true, null, fr_schema__WEBPACK_IMPORTED_MODULE_11__["actions"].add);
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
      var menu = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Authorized_Authorized__WEBPACK_IMPORTED_MODULE_15__["default"], {
        authority: this.meta.authority && this.meta.authority["delete"],
        noMatch: null
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        key: "remove"
      }, "\u5220\u9664")));
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _DataList_less__WEBPACK_IMPORTED_MODULE_16___default.a.tableListOperator
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        type: "flex",
        justify: "space-between"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], null, this.renderOperationButtons(), showSelect && selectedRows.length > 0 && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "\u6279\u91CF\u64CD\u4F5C"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        overlay: menu
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "\u66F4\u591A\u64CD\u4F5C ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        type: "down"
      }))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], null, this.renderOperationExtend())));
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
      return modalVisible && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_InfoModal__WEBPACK_IMPORTED_MODULE_17__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        bordered: false,
        style: {
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _DataList_less__WEBPACK_IMPORTED_MODULE_16___default.a.tableListForm
      }, searchBar), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _DataList_less__WEBPACK_IMPORTED_MODULE_16___default.a.tableList
      }, this.renderSearchForm && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _DataList_less__WEBPACK_IMPORTED_MODULE_16___default.a.tableListForm
      }, this.renderSearchForm()), operationBar, this.renderList())), modalVisible && this.renderInfoModal(), this.renderExtend && this.renderExtend());
    }
  }]);

  return DataList;
}(react__WEBPACK_IMPORTED_MODULE_13__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (DataList);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(StandardTable, _PureComponent);

  function StandardTable(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, StandardTable);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(StandardTable).call(this, props));

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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(StandardTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedRows = _this$props.selectedRows,
          otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["selectedRows"]);

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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a.standardTable
      }, selectedRows && selectedRows.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a.tableAlert
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
        message: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, "\u5DF2\u9009\u62E9", " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          style: {
            fontWeight: 600
          }
        }, selectedRowKeys.length), " ", "\u9879\xA0\xA0", needTotalList.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            style: {
              marginLeft: 8
            },
            key: item.dataIndex
          }, item.title, "\u603B\u8BA1\xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            style: {
              fontWeight: 600
            }
          }, item.render ? item.render(item.total) : item.total));
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          onClick: this.cleanSelectedKeys,
          style: {
            marginLeft: 24
          }
        }, "\u6E05\u7A7A")),
        type: "info",
        showIcon: true
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Table"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (StandardTable);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(59);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n._3DIwFW3a8TIQs4CsSc4K0h .ant-table-pagination {\n  margin-top: 24px;\n}\n._3DIwFW3a8TIQs4CsSc4K0h ._2woeW-_Cn5kjyzqfUsM6Ff {\n  margin-bottom: 16px;\n}\n", ""]);
// Exports
exports.locals = {
	"standardTable": "_3DIwFW3a8TIQs4CsSc4K0h",
	"tableAlert": "_2woeW-_Cn5kjyzqfUsM6Ff"
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("lodash.isequal");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(62);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n._1NmRferYTP50OPo70kNOQA ._1OgFPChvI9we5IPNrLqtzh {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n._1NmRferYTP50OPo70kNOQA ._1OgFPChvI9we5IPNrLqtzh button {\n  margin-right: 8px;\n}\n._2rIxpbO4UsGfJ4JdCbGMj0 .ant-form-item {\n  margin-bottom: 8px;\n  margin-right: 0;\n  display: flex;\n}\n._2rIxpbO4UsGfJ4JdCbGMj0 .ant-form-item > .ant-form-item-label {\n  width: auto;\n  line-height: 32px;\n  padding-right: 8px;\n}\n._2rIxpbO4UsGfJ4JdCbGMj0 .ant-form-item .ant-form-item-control {\n  line-height: 32px;\n}\n._2rIxpbO4UsGfJ4JdCbGMj0 .ant-form-item-control-wrapper {\n  flex: 1;\n}\n._2rIxpbO4UsGfJ4JdCbGMj0 ._3x7feqaZdLLEhDGZfY_Ro1 {\n  display: block;\n  white-space: nowrap;\n  margin-bottom: 8px;\n}\n@media screen and (max-width: 992px) {\n  ._2rIxpbO4UsGfJ4JdCbGMj0 .ant-form-item {\n    margin-right: 8px;\n  }\n}\n@media screen and (max-width: 768px) {\n  ._2rIxpbO4UsGfJ4JdCbGMj0 .ant-form-item {\n    margin-right: 8px;\n  }\n}\n", ""]);
// Exports
exports.locals = {
	"tableList": "_1NmRferYTP50OPo70kNOQA",
	"tableListOperator": "_1OgFPChvI9we5IPNrLqtzh",
	"tableListForm": "_2rIxpbO4UsGfJ4JdCbGMj0",
	"submitButtons": "_3x7feqaZdLLEhDGZfY_Ro1"
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureInfoModal", function() { return PureInfoModal; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _InfoForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
/* harmony import */ var fr_schema__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fr_schema__WEBPACK_IMPORTED_MODULE_14__);












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var confirm = antd__WEBPACK_IMPORTED_MODULE_12__["Modal"].confirm;
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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(PureInfoModal, _PureComponent);

  function PureInfoModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, PureInfoModal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PureInfoModal).call(this, props));
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
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(err, fieldsValue) {
          var param, idKey, idValue;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  param = addArgs ? _objectSpread({}, addArgs) : {};
                  idKey = Object(fr_schema__WEBPACK_IMPORTED_MODULE_14__["getPrimaryKey"])(_this.schema);

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
                  antd__WEBPACK_IMPORTED_MODULE_12__["message"].error("信息填写错误！" + Object.values(err)[0].errors[0].message);
                  return _context.abrupt("return");

                case 9:
                  if (_this.props.convertParam) {
                    param = _this.props.convertParam(param);
                  }

                  if (!(action === fr_schema__WEBPACK_IMPORTED_MODULE_14__["actions"].update)) {
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

      if (flag && action !== fr_schema__WEBPACK_IMPORTED_MODULE_14__["actions"].show) {
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
    onRef && onRef(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(PureInfoModal, [{
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
      })) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_InfoForm__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props, {
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
          otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props3, ["title", "action"]);

      var _this$state = this.state,
          visible = _this$state.visible,
          values = _this$state.values;

      if (!visible) {
        return null;
      } // 查看模式 不需要显示 按钮


      if (action == fr_schema__WEBPACK_IMPORTED_MODULE_14__["actions"].show) {
        otherProps.footer = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__["Modal"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
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
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_12__["Form"].create()(PureInfoModal));

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtendModal; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3);











var _dec, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var TabPane = antd__WEBPACK_IMPORTED_MODULE_11__["Tabs"].TabPane;
var ExtendForm = (_dec = antd__WEBPACK_IMPORTED_MODULE_11__["Form"].create(), _dec(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ExtendForm, _PureComponent);

  function ExtendForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ExtendForm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ExtendForm).call(this, props));

    _this.renderContent = function (data) {
      var column = _this.state.column;
      var form = _this.props.form;
      return _utils_component__WEBPACK_IMPORTED_MODULE_12__["createForm"].bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this))(column, data, form);
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
        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var result;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ExtendForm, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$props2 = this.props,
          _onCancel = _this$props2.onCancel,
          title = _this$props2.title;
      var _this$state = this.state,
          data = _this$state.data,
          loading = _this$state.loading;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Modal"], (_React$createElement = {
        width: 640,
        bodyStyle: {
          padding: "32px 40px 48px"
        },
        destroyOnClose: true,
        title: title,
        visible: true
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_React$createElement, "bodyStyle", {
        paddingLeft: 0
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_React$createElement, "okButtonProps", loading), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_React$createElement, "onOk", this.onSave), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_React$createElement, "onCancel", function onCancel() {
        _onCancel && _onCancel();
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_React$createElement, "okButtonProps", {
        loading: loading
      }), _React$createElement), this.renderContent(data));
    }
  }]);

  return ExtendForm;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]), _temp)) || _class);

var ExtendModal =
/*#__PURE__*/
function (_PureComponent2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ExtendModal, _PureComponent2);

  function ExtendModal(props) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ExtendModal);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ExtendModal).call(this, props));
    _this2.state = {
      visible: props.visible
    };
    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ExtendModal, [{
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

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ExtendForm, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
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
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DataList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ListPage, _DataList);

  function ListPage(props, meta) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ListPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ListPage).call(this, props, meta));
    _this.meta = _objectSpread({}, meta || {}, {}, _this.props.meta);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ListPage, [{
    key: "render",
    value: function render() {
      var _this$meta = this.meta,
          title = _this$meta.title,
          content = _this$meta.content,
          tabList = _this$meta.tabList,
          tabDefaultActiveKey = _this$meta.tabDefaultActiveKey;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
        title: title && title + "列表",
        content: content || this.renderHeaderContent && this.renderHeaderContent(),
        tabList: tabList,
        tabDefaultActiveKey: tabDefaultActiveKey,
        onTabChange: this.handleTabChange
      }, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ListPage.prototype), "render", this).call(this));
    }
  }]);

  return ListPage;
}(_DataList__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ListPage);

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/get");

/***/ })
/******/ ])["default"];
});