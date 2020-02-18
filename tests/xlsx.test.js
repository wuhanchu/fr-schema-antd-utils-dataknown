import { exportDataByTemplate } from "../src/utils/xlsx"

test("test import", async () => {
    const response = await exportDataByTemplate(
        "sdf",
        [{ a: "12" }],
        "http://localhost:8001/import/%E6%8E%8C%E6%95%B0_%E7%9F%A5%E6%96%99_%E7%9F%A5%E8%AF%86%E5%BA%93%E4%BF%A1%E6%81%AF%E5%AF%BC%E5%85%A5.xlsx"
    )
    console.log("response", response)
})
