"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBaseModel = createBaseModel;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _antd = require("antd");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      _regenerator["default"].mark(function fetch(_ref, _ref2) {
        var payload, call, put, select, _ref3, currentUser, _ref4, token, response;

        return _regenerator["default"].wrap(function fetch$(_context) {
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
      _regenerator["default"].mark(function add(_ref5, _ref6) {
        var payload, callback, call, put, response;
        return _regenerator["default"].wrap(function add$(_context2) {
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
                _antd.message.success("新增成功");

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, add);
      }),
      remove:
      /*#__PURE__*/
      _regenerator["default"].mark(function remove(_ref7, _ref8) {
        var payload, callback, call, put;
        return _regenerator["default"].wrap(function remove$(_context3) {
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
                _antd.message.success("删除成功");

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, remove);
      }),
      update:
      /*#__PURE__*/
      _regenerator["default"].mark(function update(_ref9, _ref10) {
        var payload, callback, call, put, response;
        return _regenerator["default"].wrap(function update$(_context4) {
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
                _antd.message.success("修改成功");

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