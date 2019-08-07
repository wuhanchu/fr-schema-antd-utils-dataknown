import React from "react"
import { PageHeader } from 'antd';

import DataList from "./DataList"
import {
    Button,
    Col,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Icon,
    Input,
    Menu,
    message,
    Modal,
    Popconfirm,
    Row,
    Select,
    Switch,
    Tabs
} from "antd"

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
        this.meta = { ...(meta || {}), ...this.props.meta }
    }

    render() {
        const { title, content, tabList, tabDefaultActiveKey } = this.meta

        return (
            <PageHeader
                title={title && title + "列表"}
                content={
                    content ||
                    (this.renderHeaderContent && this.renderHeaderContent())
                }
                tabList={tabList}
                tabDefaultActiveKey={tabDefaultActiveKey}
                onTabChange={this.handleTabChange}
            >
                {super.render()}
            </PageHeader>
        )
    }
}

export default ListPage
