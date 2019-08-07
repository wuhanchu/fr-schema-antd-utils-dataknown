"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshToken = exports.getToken = exports["default"] = exports.OAuthToken = void 0;

var ClientOAuth2 = require("client-oauth2");

var axios = require("axios");

var OAuthToken = ClientOAuth2.Token;
exports.OAuthToken = OAuthToken;

var _default = new ClientOAuth2({
  clientId: "web",
  accessTokenUri: "/auth/oauth2/token",
  authorizationUri: "/auth/oauth2/token?grant_type=refresh_token",
  scopes: "server"
});

exports["default"] = _default;

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

exports.getToken = getToken;

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

exports.refreshToken = refreshToken;