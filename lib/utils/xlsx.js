"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportData = exportData;
exports.exportTable = exportTable;
exports["default"] = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var _fileSaver = _interopRequireDefault(require("file-saver"));

var _file = require("./file");

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

  var ws = _xlsx["default"].utils.json_to_sheet(tempData);

  var ws_name = fileName;

  var workbook = _xlsx["default"].utils.book_new();

  var sheet = _xlsx["default"].utils.book_append_sheet(workbook, ws, ws_name); // write


  var wbout = _xlsx["default"].write(workbook, {
    bookType: "xlsx",
    bookSST: true,
    type: "binary"
  });

  var fname = fileName + "." + "xlsx";
  var blob = new Blob([(0, _file.s2ab)(wbout)], {
    type: "application/octet-stream"
  });

  _fileSaver["default"].saveAs(blob, fname);
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

  var workbook = _xlsx["default"].utils.book_new();

  var sheet = _xlsx["default"].utils.table_to_sheet(table);

  var sheetData = _xlsx["default"].utils.sheet_to_json(sheet);

  sheetData = sheetData.map(function (item) {
    delete item["操作"];
    return item;
  });
  sheet = _xlsx["default"].utils.json_to_sheet(statics);

  _xlsx["default"].utils.sheet_add_json(sheet, ef, {
    origin: "A" + statics ? statics.length + 2 : 1
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

  _xlsx["default"].utils.book_append_sheet(workbook, sheet, "SheetJS"); // write


  var wbout = _xlsx["default"].write(workbook, {
    bookType: "xlsx",
    bookSST: true,
    type: "binary"
  });

  var fname = fileName + "." + "xlsx";
  var blob = new Blob([(0, _file.s2ab)(wbout)], {
    type: "application/octet-stream"
  });

  _fileSaver["default"].saveAs(blob, fname);
}

var _default = _xlsx["default"];
exports["default"] = _default;