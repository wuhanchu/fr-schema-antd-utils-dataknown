import XLSX from "xlsx"
import fileSaver from "file-saver"
import { s2ab } from "./file"

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

    var ws = XLSX.utils.json_to_sheet(tempData)
    var ws_name = fileName

    let workbook = XLSX.utils.book_new()
    let sheet = XLSX.utils.book_append_sheet(workbook, ws, ws_name)

    // write
    const wbout = XLSX.write(workbook, {
        bookType: "xlsx",
        bookSST: true,
        type: "binary"
    })
    const fname = fileName + "." + "xlsx"
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" })
    fileSaver.saveAs(blob, fname)
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
        origin: "A" + statics ? statics.length + 2 : 1
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
                sonItem && sonItem.toString().length * 1.3 > (length[key] || 10)
                    ? sonItem.toString().length * 1.3
                    : length[key] || 10
        })
    })

    sheet["!cols"] = Object.values(length).map(item => ({
        wch: item
    }))

    XLSX.utils.book_append_sheet(workbook, sheet, "SheetJS")

    // write
    const wbout = XLSX.write(workbook, {
        bookType: "xlsx",
        bookSST: true,
        type: "binary"
    })
    const fname = fileName + "." + "xlsx"
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" })
    fileSaver.saveAs(blob, fname)
}

export default XLSX
