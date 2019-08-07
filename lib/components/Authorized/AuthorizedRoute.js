"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _umi = require("umi");

var _react = _interopRequireDefault(require("react"));

var _Authorized = _interopRequireDefault(require("./Authorized"));

var AuthorizedRoute = function AuthorizedRoute(_ref) {
  var Component = _ref.component,
      _render = _ref.render,
      authority = _ref.authority,
      redirectPath = _ref.redirectPath,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["component", "render", "authority", "redirectPath"]);
  return _react["default"].createElement(_Authorized["default"], {
    authority: authority,
    noMatch: _react["default"].createElement(_umi.Route, (0, _extends2["default"])({}, rest, {
      render: function render() {
        return _react["default"].createElement(_umi.Redirect, {
          to: {
            pathname: redirectPath
          }
        });
      }
    }))
  }, _react["default"].createElement(_umi.Route, (0, _extends2["default"])({}, rest, {
    render: function render(props) {
      return Component ? _react["default"].createElement(Component, props) : _render(props);
    }
  })));
};

var _default = AuthorizedRoute;
exports["default"] = _default;