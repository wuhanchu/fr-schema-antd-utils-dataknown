import frSchema from "fr-schema"
test("test import", () => {
    const frSchemaAll = require("../lib/index.js")
    console.log("frSchema", frSchema)
    console.log("frSchemaAll", frSchemaAll)
})
