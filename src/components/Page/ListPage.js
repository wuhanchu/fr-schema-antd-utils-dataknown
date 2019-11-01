import React from "react"

import DataList from "./DataList"
import { PageHeaderWrapper } from "@ant-design/pro-layout"

/**
 * meta 包含
 * resource
 * service
 * title
 * selectedRows
 * scroll table whether can scroll
 */
class ListPage extends DataList {
    constructor(props, meta) {
        super(props, meta)
        this.meta = { ...(this.meta || {}), ...this.props.meta }
    }

    render() {
        const { title, content, tabList, tabDefaultActiveKey } = this.meta

        return (
            <PageHeaderWrapper
                title={title && title + "列表"}
                content={
                    content ||
                    (this.renderHeaderContent && this.renderHeaderContent())
                }
                tabList={tabList}
                tabActiveKey={tabDefaultActiveKey}
            >
                {super.render()}
            </PageHeaderWrapper>
        )
    }
}

export default ListPage
