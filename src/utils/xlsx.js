import XLSX from "xlsx"
import fileSaver from "file-saver"
import { s2ab } from "./file"
import axios from "axios"
import * as _ from "lodash"

/**
 * 导出数据使用模板
 * @param fileName
 * @param data
 * @param templateUrl
 */
export async function exportDataByTemplate(
    fileName,
    data,
    columns,
    templateUrl
) {
    // get file
    const response = await axios.get(templateUrl, { responseType: "blob" })
    console.debug("response", response)
    // load to xlxs
    // const blob = new Blob([response.data])
    let workbook = XLSX.read(await response.data.arrayBuffer(), {
        type: "array"
    })

    let worksheet = workbook.Sheets[workbook.SheetNames[0]]

    // get the firstLine
    let firstLine = 1
    while (true) {
        const cell = worksheet["A" + firstLine]
        if (_.isNil(cell) || _.isNil(cell.v)) {
            break
        }
        firstLine++
    }

    // get the keymap
    let inData = []
    data.forEach(item => {
        let tempItem = []
        columns.forEach(column => {
            const value = item[column.key]
            if (value instanceof Array) {
                if (column.exportConcat) {
                    tempItem.concat(value)
                } else {
                    tempItem.push(value.join("|"))
                }
            } else {
                tempItem.push(value)
            }
        })
        inData.push(tempItem)
    })

    XLSX.utils.sheet_add_aoa(worksheet, inData, { origin: "A" + firstLine })

    // autoWidth(worksheet)
    // wr   ite
    saveWorkbook(workbook, fileName)
}

/**
 * 导出数据
 * @param fileName
 * @param data
 * @param columns
 */
export function exportData(fileName, data, columns) {
    // 删除操作栏
    const tempData = data.map(item => {
        let result = {}
        columns.forEach(column => {
            result[column["title"]] = item[column["dataIndex"]]
        })
        return result
    })

    let ws = XLSX.utils.json_to_sheet(tempData)
    let ws_name = fileName

    let workbook = XLSX.utils.book_new()
    let sheet = XLSX.utils.book_append_sheet(workbook, ws, ws_name)

    // write
    saveWorkbook(workbook, fileName)
}

/**
 * 导出表格
 * @param fileName
 * @param data
 * @param statics
 * @param extendParam
 */
export function exportTable(fileName, data, statics, ...extendParam) {
    let table = document.getElementsByTagName("table")[0]

    // 删除操作栏
    let workbook = XLSX.utils.book_new()
    let sheet = XLSX.utils.table_to_sheet(table)
    let sheetData = XLSX.utils.sheet_to_json(sheet)
    sheetData = sheetData.map(item => {
        delete item["操作"]
        return item
    })

    sheet = XLSX.utils.json_to_sheet(statics)
    XLSX.utils.sheet_add_json(sheet, ef, {
        origin: "A" + statics? statics.length + 2 : 1
    })

    // show convert
    Object.values(sheet).forEach(item => {
        if (item.v && typeof item.v === "number" && item.v > 9999999) {
            item.t = "s"
            item.v = item.v.toString()
        }
    })

    sheet["!cols"] = []
    let length = {}
    sheetData.forEach(item => {
        Object.keys(item).forEach(key => {
            const sonItem = item[key]
            length[key] =
                sonItem && sonItem.toString().length*1.3 > (length[key] || 10)
                    ? sonItem.toString().length*1.3
                    : length[key] || 10
        })
    })

    sheet["!cols"] = Object.values(length).map(item => ({
        wch: item
    }))

    XLSX.utils.book_append_sheet(workbook, sheet, "SheetJS")

    // write
    saveWorkbook(workbook, fileName)
}

/**
 * has'not finished
 * @param worksheet
 * @param startNum
 */
function autoWidth(worksheet, startNum = 1) {
    /*设置worksheet每列的最大宽度*/
    let data = XLSX.utils.sheet_to_row_txtect_array(worksheet)
    const colWidth = data.map(row =>
        row.map(val => {
            /*先判断是否为null/undefined*/
            if (val == null) {
                return {
                    wch: 10
                }
            } else if (val.toString().charCodeAt(0) > 255) {
                /*再判断是否为中文*/
                return {
                    wch: val.toString().length*2
                }
            } else {
                return {
                    wch: val.toString().length
                }
            }
        })
    )
    /*以第一行为初始值*/
    let result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
        for (let j = 0; j < colWidth[i].length; j++) {
            if (result[j]["wch"] < colWidth[i][j]["wch"]) {
                result[j]["wch"] = colWidth[i][j]["wch"]
            }
        }
    }
    worksheet["!cols"] = result
}

export function saveWorkbook(workbook, fileName) {
    XLSX.writeFile(workbook, fileName + ".xlsx", {
        bookType: "xlsx",
        type: "binary"
    })
}

export default XLSX
