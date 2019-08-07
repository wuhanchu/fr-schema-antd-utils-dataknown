"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthority = getAuthority;
exports.setAuthority = setAuthority;

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