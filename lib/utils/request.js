"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fetch = _interopRequireDefault(require("dva/fetch"));

var _antd = require("antd");

var _hash = _interopRequireDefault(require("hash.js"));

var _utils = require("./utils");

var _oauth = require("../extensions/oauth");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(response) {
    var errorText, data, error;
    return _regenerator["default"].wrap(function _callee$(_context) {
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
    expirys: (0, _utils.isAntdPro)()
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

  var hashcode = _hash["default"].sha256().update(fingerprint).digest("hex");

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
      return (0, _oauth.refreshToken)().then(function (token) {
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

    return (0, _fetch["default"])(url, newOptions);
  }).then(checkStatus).then(function (response) {
    return cachedSave(response, hashcode);
  }).then(
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(response) {
      var contentType, result, error;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
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

        _antd.notification.error({
          message: "账户出错"
        });
      }

      return;
    }

    _antd.message.error(e.message);

    return new Promise(function (resolve, reject) {
      reject(e.message);
    });
  });
}