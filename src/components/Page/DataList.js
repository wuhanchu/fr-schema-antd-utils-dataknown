import StandardTable from "../StandardTable"
import { Button, Card, Col, Divider, Form, message, Popconfirm, Row, Spin } from "antd"
import isEqual from "lodash.isequal"
import React, { Fragment, PureComponent } from "react"
import { createFilter, getListColumn } from "../../utils/component"
import Authorized from "../Authorized/Authorized"
import styles from "./DataList.less"
import InfoModal from "./InfoModal"
import frSchema from "@/outter/fr-schema/src"
import { exportData } from "../../utils/xlsx"

const { actions, schemas, decorateList, decorateItem, getPrimaryKey } = frSchema
const getValue = obj =>
    Object.keys(obj)
        .map(key => obj[key])
        .join(",")

/**
 *
 * offline: 是否开启离线模式
 * meta:{
 *   scroll: table whether can scroll
 *   selectedRows
 *   resource: schema resource name ，
 *   schema: schema name,
 *   service: remote service,
 *   title: page title,
 *   infoProps: infoForm props
 *   handleChangeCallback: data change call back
 *   queryArgs: fixed query args
 * }
 */
class DataList extends PureComponent {
    state = {
        data: {
            list: [],
            pagination: {}
        },
        listLoading: true,
        visibleModal: false,
        visibleModelUpdate: false,
        expandForm: false,
        selectedRows: [],
        formValues: {},
        infoData: {}
    }
    schema = {}

    constructor(props, meta) {
        super(props)
        this.init(props, meta)
    }

    /**
     * create search filter
     * @param params
     */
    createFilters(inSchema, span = 6) {
        return createFilter(this.props.form, inSchema, span)
    }

    componentDidMount() {
        this.refreshList()
        this._ismounted = true
    }

    /**
     * 组件初始化
     * @param props
     * @param meta
     */
    init(props, meta) {
        // 设置meta
        this.meta = { ...(this.meta || {}), ...meta, ...(props.meta || {}) }
        this.refreshMeta()

        // 设置 state
        const tempState = {
            data: {
                list: props.value || [],
                pagination: {}
            },
            listLoading: true,
            visibleModal: false,
            visibleModelUpdate: false,
            expandForm: false,
            selectedRows: [],
            formValues: {},
            infoData: {}
        }

        if (this._ismounted) {
            this.setState(tempState)
        } else {
            this.state = tempState
        }
    }

    /**
     * 更新组件的元数据信息
     */
    refreshMeta() {
        this.schema =
            this.props.schema || this.meta.schema || schemas[this.meta.resource]
        this.service = this.meta.service || this.service
        this.meta.idKey = frSchema.getPrimaryKey(this.schema)

        if (this.meta.authorityKey) {
            this.meta.authority = {
                add: this.meta.authorityKey + "_post",
                update: this.meta.authorityKey + "_patch",
                delete: this.meta.authorityKey + "_delete",
                export: this.meta.authorityKey + "_export",
                show: this.meta.authorityKey + "_get_by_id"
            }
        }
    }

    /**
     * 获取当前显示的字段列表
     * @param includeOperation 包含操作
     * @returns {Array|null}
     */
    getColumns(includeOperation = true) {
        const { renderOperateColumn } = this.props
        const { fields } = this.meta

        let columns = getListColumn(this.schema, fields)

        let operationBar = null
        if (renderOperateColumn !== null && includeOperation) {
            operationBar = renderOperateColumn
                ? renderOperateColumn.bind(this)()
                : this.renderOperateColumn()
        }

        columns.sort(function (a, b) {
            return (
                (a.orderIndex === undefined || a.orderIndex === null
                    ? 9999
                    : a.orderIndex) -
                (b.orderIndex === undefined || b.orderIndex === null
                    ? 9999
                    : b.orderIndex)
            )
        })

        operationBar && columns.push(operationBar)
        this.columns = columns
        console.debug("this.columns", this.columns)
        return this.columns
    }

    /**
     * 表格操作列
     * @returns {{width: string, fixed: (*|string), title: string, render: (function(*, *=): *)}}
     */

    renderOperateColumn(props = {}) {
        const { scroll } = this.meta
        const { showEdit = true, showDelete = true } = props
        return (
            !this.meta.readOnly &&
            !this.props.readOnly && {
                title: "操作",
                key: "operation",
                fixed: scroll && "right",
                render: (text, record) => (
                    <Fragment>
                        {showEdit && (
                            <Authorized
                                authority={
                                    this.meta.authority &&
                                    this.meta.authority.update
                                }
                                noMatch={null}
                            >
                                <a
                                    onClick={() =>
                                        this.handleVisibleModal(
                                            true,
                                            record,
                                            actions.edit
                                        )
                                    }
                                >
                                    修改
                                </a>
                            </Authorized>
                        )}
                        {showDelete && (
                            <Authorized
                                authority={
                                    this.meta.authority &&
                                    this.meta.authority.delete
                                }
                                noMatch={null}
                            >
                                <Divider type="vertical"/>
                                <Popconfirm
                                    title="是否要删除此行？"
                                    onConfirm={e => {
                                        this.handleDelete(record)
                                        e.stopPropagation()
                                    }}
                                >
                                    <a>删除</a>
                                </Popconfirm>
                            </Authorized>
                        )}
                        {this.renderOperateColumnExtend(record)}
                    </Fragment>
                )
            }
        )
    }

    /**
     * 表格操作列，扩展方法
     */
    renderOperateColumnExtend(record) {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.meta && nextProps.meta !== this.props.meta) {
            console.log("DataList ")
            this.meta = nextProps.meta
            this.columns = null
            this.refreshMeta()
            this.setState(
                {
                    pagination: null,
                    formValues: {}
                },
                () => {
                    this.refreshList()
                }
            )
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            this.props.onChange && this.props.onChange(this.state.data.list)
        }
    }

    async refreshList() {
        if (!this.service || this.props.offline) {
            this.setState({
                data: {
                    ...(this.state.data || {}),
                    list:
                        decorateList(
                            this.state.data && this.state.data.list,
                            this.schema
                        ) || []
                },
                listLoading: false
            })
            return
        }

        this.setState({ listLoading: true }, async () => {
            let data = await this.requestList()
            let list = decorateList(data.list, this.schema)
            this.convertList && (list = this.convertList(list))

            this.setState({
                selectedRows: [],
                data: {
                    ...data,
                    list
                },
                listLoading: false
            })
        })
    }

    /**
     * 个性化转换对应的list数据
     * @param list
     * @returns {*}
     */
    convertList(list) {
        return list
    }

    /**
     * 查询当前数据
     * @returns {Promise<*>}
     */
    async requestList(tempArgs = {}) {
        const { queryArgs } = this.meta

        let searchParams = this.getSearchParam()

        const params = {
            ...(queryArgs || {}),
            ...searchParams,
            ...(this.state.pagination || {}),
            ...tempArgs
        }

        let data = await this.service.get(params)
        data = this.dataConvert(data)
        return data
    }

    /**
     * get current search param
     */
    getSearchParam() {
        let searchParams = {}
        this.state.formValues && Object.keys(this.state.formValues).forEach(key => {
            searchParams[key] = (this.schema[key] && this.schema[key].searchPrefix || "") + this.state.formValues[key]
        })
        return searchParams
    }

    /**
     * 数据转换
     * @param data
     */
    dataConvert(data) {
        return data
    }

    handleStandardTableChange = (pagination, filtersArg, sorter) => {
        const { formValues } = this.state
        let params = { ...formValues }
        const filters = Object.keys(filtersArg).reduce((obj, key) => {
            const newObj = { ...obj }
            newObj[key] = getValue(filtersArg[key])
            return newObj
        }, {})
        Object.assign(params, filters)

        if (sorter.field) {
            params.order = `${sorter.field.replace("_remark", "")}${
                sorter.order == "ascend"? ".asc" : ".desc"
            }`
        }

        this.setState(
            {
                pagination: {
                    currentPage: pagination.current,
                    pageSize: pagination.pageSize
                },
                formValues: params
            },
            () => this.refreshList()
        )
    }

    handleSelectRows = rows => {
        this.setState({
            selectedRows: rows
        })
    }

    handleFormReset = () => {
        const { form } = this.props
        form.resetFields()
        this.setState(
            {
                pagination: null,
                formValues: {}
            },
            () => {
                this.refreshList()
            }
        )
    }

    /**
     * 处理搜索触发事件
     * @param e
     */
    handleSearch = e => {
        e.preventDefault()

        const { form } = this.props
        form.validateFields((err, fieldsValue) => {
            if (err) return

            const allValues = form.getFieldsValue()
            const values = {
                ...allValues,
                updatedAt:
                    fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf()
            }

            this.setState({
                formValues: values
            })

            // refresh the list
            const formValues = {}
            Object.keys(values).forEach(key => {
                if (!values[key]) {
                    return
                }

                formValues[key] = values[key]
            })

            this.setState(
                {
                    pagination: null,
                    formValues
                },
                async () => {
                    this.refreshList()
                }
            )
        })
    }

    /**
     * 信息界面展示
     * @param flag
     * @param record
     * @param action
     */
    handleVisibleModal = (flag, record, action) => {
        this.setState({
            visibleModal: !!flag,
            infoData: record,
            action
        })
    }

    /**
     * 处理数据新增
     * @param data
     * @returns {Promise<void>}
     */
    async handleAdd(data, schema) {
        // 更新
        let response
        if (!this.props.offline) {
            response = await this.service.post(data, schema)
        }

        // 修改当前数据
        this.state.data.list.push(decorateItem(data, this.schema))
        this.setState({
            data: this.state.data
        })

        this.refreshList()
        message.success("添加成功")
        this.handleVisibleModal()
        this.handleChangeCallback && this.handleChangeCallback()
        this.props.handleChangeCallback && this.props.handleChangeCallback()

        return response
    }

    /**
     * 处理数据更新
     * @param data
     * @returns {Promise<void>}
     */
    handleUpdate = async (data, schema, method = "patch") => {
        // 更新
        let response
        if (!this.props.offline) {
            response = await this.service[method](data, schema)
        }

        // 修改当前数据
        const idKey = getPrimaryKey(this.schema)

        this.state.data &&
        this.state.data.list.some((item, index) => {
            if (data[idKey] == item[idKey]) {
                this.state.data.list[index] = decorateItem(
                    data,
                    this.schema
                )
                return true
            }
        })

        //
        this.setState({
            data: this.state.data
        })
        this.refreshList()
        message.success("修改成功")

        //
        this.handleVisibleModal()
        this.handleChangeCallback && this.handleChangeCallback()
        this.props.handleChangeCallback && this.props.handleChangeCallback()

        return response
    }

    /**
     * 处理数据删除
     * @param data
     * @returns {Promise<void>}
     */
    handleDelete = async data => {
        // 更新
        let response
        if (!this.props.offline) {
            response = await this.service.delete({ id: data[idKey], ...data })
        }

        const showMessage = (response && response.msg) || "删除成功"

        // 修改当前数据
        const idKey = getPrimaryKey(this.schema)
        this.state.data.list.some((item, index) => {
            if (data[idKey] == item[idKey]) {
                this.state.data.list.splice(index, 1)
                return true
            }
        })
        this.setState({
            data: this.state.data
        })
        this.refreshList()
        message.success(showMessage)
        this.handleVisibleModal()
        this.handleChangeCallback && this.handleChangeCallback()
        this.props.handleChangeCallback && this.props.handleChangeCallback()

        return response
    }

    /**
     * multi delete data
     */
    handleDeleteMulti = async recordList => {
        // change current data
        const idKey = getPrimaryKey(this.schema)
        const valueList = recordList.map(record => record[idKey])

        this.state.data.list.forEach((item, index) => {
            if (valueList.indexOf(item[idKey]) >= 0) {
                this.state.data.list.splice(index, 1)
            }
        })
        this.setState({
            data: this.state.data
        })

        // invoke remote service
        if (!this.props.offline) {
            let args = {}
            args[idKey] = "in.(" + valueList.join(",") + ")"
            await this.service.deleteMulti(args)
        }

        //  refresh current data
        this.refreshList()
        message.success("删除成功")
        this.handleChangeCallback && this.handleChangeCallback()
        this.props.handleChangeCallback && this.props.handleChangeCallback()
    }

    /**
     * 模块讲修改
     * @param nextProps
     */
    componentWillUpdate(nextProps, nextState) {
        if (!isEqual(this.state.data, nextState.data)) {
            this.props.onChange && this.props.onChange(this.state.data.list)
        }
    }

    /**
     * 操作栏按钮
     */
    renderOperationButtons() {
        if (this.props.renderOperationButtons) {
            return this.props.renderOperationButtons()
        }

        return (
            <Fragment>
                <Authorized
                    authority={this.meta.authority && this.meta.authority.add}
                    noMatch={null}
                >
                    {!this.props.readOnly && (
                        <Button
                            type="primary"
                            onClick={() =>
                                this.handleVisibleModal(true, null, actions.add)
                            }
                        >
                            新增
                        </Button>
                    )}
                </Authorized>
                <Authorized
                    authority={
                        this.meta.authority && this.meta.authority.export
                    }
                    noMatch={null}
                >
                    <Button
                        loading={this.state.exportLoading}
                        onClick={async () => {
                            this.setState({ exportLoading: true }, async () => {
                                const columns = this.getColumns(false)
                                let data = this.state.data.list
                                if (this.props.exportMore) {
                                    let data = await this.requestList({
                                        pageSize: 1000000
                                    })
                                    data = decorateList(data.list, this.schema)
                                }

                                exportData("导出数据", data, columns)
                                this.setState({ exportLoading: false })
                            })
                        }}
                    >
                        导出
                    </Button>
                </Authorized>
            </Fragment>
        )
    }

    /**
     * 渲染操作栏
     * @returns {*}
     */
    renderOperationBar() {
        const { showSelect } = this.meta
        const { selectedRows } = this.state

        return (
            <div className={styles.tableListOperator}>
                <Row
                    type="flex"
                    justify="space-between"
                    className={styles.operationBar}
                >
                    <Col>
                        {this.renderOperationButtons()}
                        {showSelect &&
                        selectedRows.length > 0 &&
                        this.renderOperationMulit()}
                    </Col>
                    <Col>{this.renderOperationExtend()}</Col>
                </Row>
            </div>
        )
    }

    /**
     * create the multi opertaion buttons
     */
    renderOperationMulit() {
        return (
            <span>
                <Popconfirm
                    title="是否要删除选中的数据？"
                    onConfirm={e => {
                        const { dispatch } = this.props
                        const { selectedRows } = this.state
                        this.handleDeleteMulti(selectedRows)
                    }}
                >
                    <Button>批量删除</Button>
                </Popconfirm>
            </span>
        )
    }

    /**
     * 操作栏扩展
     */
    renderOperationExtend() {
    }

    /**
     * 列表扩展
     */
    renderExtend() {
    }

    /**
     * 渲染表格
     * @param inProps
     * @returns {*}
     */
    renderList = (inProps = {}) => {
        let { loading } = this.props
        const { showSelect, scroll, mini } = this.meta
        const { data, listLoading, selectedRows } = this.state

        // judge weather hide select
        let otherProps = {}

        if (!showSelect) {
            otherProps.rowSelection = null
        }

        if (mini) {
            otherProps.pagination = false
        }

        const columns = this.getColumns()

        return (
            <StandardTable
                bordered={true}
                rowKey={this.meta.idKey || "id"}
                selectedRows={selectedRows}
                loading={!data || loading || listLoading}
                data={data}
                columns={columns}
                scroll={scroll}
                size={"small"}
                onSelectRow={this.handleSelectRows}
                onChange={this.handleStandardTableChange}
                {...otherProps}
                {...inProps}
            />
        )
    }

    /**
     * 渲染信息弹出框
     * @param customProps 定制的属性
     * @returns {*}
     */
    renderInfoModal(customProps = {}) {
        if (this.props.renderInfoModal) {
            return this.props.renderInfoModal()
        }
        const { form } = this.props
        const renderForm = this.props.renderForm || this.renderForm
        const { resource, title, addArgs } = this.meta
        const { visibleModal, infoData, action } = this.state
        const updateMethods = {
            handleVisibleModal: this.handleVisibleModal.bind(this),
            handleUpdate: this.handleUpdate.bind(this),
            handleAdd: this.handleAdd.bind(this)
        }

        return (
            visibleModal && (
                <InfoModal
                    renderForm={renderForm}
                    title={title}
                    action={action}
                    resource={resource}
                    {...updateMethods}
                    visible={visibleModal}
                    values={infoData}
                    addArgs={addArgs}
                    meta={this.meta}
                    service={this.service}
                    schema={this.schema}
                    {...this.meta.infoProps}
                    {...customProps}
                />
            )
        )
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true })
        console.log("component error", error)
    }

    /**
     * create the common search bar
     * @param  {Object} filters the schema filed list
     */
    createSearchBar(filters) {
        return (
            <Form onSubmit={this.handleSearch}>
                <Row gutter={8} type="flex">
                    {filters}
                    <Col>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button
                            style={{ marginLeft: 4 }}
                            onClick={this.handleFormReset}
                        >
                            重置
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }

    render() {
        const { visibleModal } = this.state
        let {
            renderOperationBar,
            renderSearchBar,
            renderOperateColumn
        } = this.props

        // 操作栏
        let operationBar = null
        if (renderOperationBar) {
            operationBar = renderOperationBar()
        } else if (this.props.renderOperationBar !== null) {
            operationBar = this.renderOperationBar && this.renderOperationBar()
        }

        // 搜索栏
        let searchBar = null
        if (renderSearchBar) {
            searchBar = renderSearchBar()
        } else if (renderSearchBar !== null) {
            searchBar = this.renderSearchBar && this.renderSearchBar()
        }

        return !this.state.loading? (
            <Fragment>
                <Card bordered={false} style={{ width: "100%" }}>
                    <div className={styles.tableListForm}>{searchBar}</div>
                    <div className={styles.tableList}>
                        {this.renderSearchForm && (
                            <div className={styles.tableListForm}>
                                {this.renderSearchForm()}
                            </div>
                        )}
                        {operationBar}
                        {this.renderList()}
                    </div>
                </Card>
                {visibleModal && this.renderInfoModal()}
                {this.renderExtend && this.renderExtend()}
            </Fragment>
        ) : (
            <Spin/>
        )
    }
}

export default DataList
