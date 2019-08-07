import utils from "./utils"
import components from "./components"

export let schemas = null
export let services = null

/**
 * 根据模型和服务 初始化 工具
 * @param {object} initSchema
 * @param {object} initServices
 */
function init(initSchema, initServices) {
    schemas = initSchema
    services = initServices
}

export default { init, components, utils, services, schemas }
