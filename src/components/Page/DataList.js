import StandardTable from "../StandardTable"
import { Button, Card, Col, Divider, Dropdown, Icon, Menu, message, Popconfirm, Row } from "antd"
import frSchema, { actions } from "fr-schema"
import isEqual from "lodash.isequal"
import React, { Fragment, PureComponent } from "react"
import { createFilter, getListColumn } from "../../utils/component"
import Authorized from "../Authorized/Authorized"
import styles from "./DataList.less"
import InfoModal from "./InfoModal"

const { schemas } = frSchema
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
 *   resource: schema resource name，
 *   service: remote service,
 *   title: page title,
 *   infoProps: infoForm props
 *   handleChangeCallback: data change call back
 *   queryArgs: fixed query args
 * }
 */
class DataList extends PureComponent {
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
    
    componentWillMount() {
        this.refreshList()
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
            modalVisible: false,
            updateModalVisible: false,
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
        this.schema = this.meta.schema || schemas[this.meta.resource]
        this.service = this.meta.service || this.service
        this.meta.idKey = getPrimaryKey(this.schema)
        
        if (this.meta.authorityKey) {
            this.meta.authority = {
                add: this.meta.authorityKey + "_add",
                update: this.meta.authorityKey + "_upd",
                delete: this.meta.authorityKey + "_del"
            }
        }
    }
    
    /**
     * 获取当前显示的字段列表
     * @returns {Array|null}
     */
    getColumns() {
        const { renderOperateColumn } = this.props
        const { fields } = this.meta
        
        let columns = getListColumn(this.schema, fields)
        const operationBar = renderOperateColumn
            ? renderOperateColumn.bind(this)()
            : this.renderOperateColumn()
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
        return this.columns
    }
    
    /**
     * 表格操作列
     * @returns {{width: string, fixed: (*|string), title: string, render: (function(*, *=): *)}}
     */
    renderOperateColumn() {
        const { scroll } = this.meta
        return (
            !this.props.readOnly && {
                title: "操作",
                fixed: scroll && "right",
                render: (text, record) => (
                    <Fragment>
                        <Authorized
                            authority={
                                this.meta.authority &&
                                this.meta.authority.update
                            }
                            noMatch={null}
                        >
                            <a
                                onClick={() =>
                                    this.handleModalVisible(
                                        true,
                                        record,
                                        actions.update
                                    )
                                }
                            >
                                修改
                            </a>
                        </Authorized>
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
    
    componentDidMount() {
        this._ismounted = true
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.meta && nextProps.meta !== this.props.meta) {
            console.log("DataList componentWillReceiveProps")
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
                    list: (this.state.data && this.state.data.list) || []
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
                data: { ...data, list },
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
        
        let data = await this.service.get({
            ...queryArgs,
            ...(this.state.formValues || {}),
            ...(this.state.pagination || {}),
            ...tempArgs
        })
        
        data = this.dataConvert(data)
        return data
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
            params.sort = `${
                sorter.order == "ascend"? "" : "-"
            }${sorter.field.replace("_remark", "")}`
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
    handleModalVisible = (flag, record, action) => {
        this.setState({
            modalVisible: !!flag,
            infoData: record,
            action
        })
    }
    
    /**
     * 处理数据新增
     * @param data
     * @returns {Promise<void>}
     */
    handleAdd = async (data, schema) => {
        // 修改当前数据
        this.state.data.list.push(decorateItem(data, this.schema))
        this.setState({
            data: this.state.data
        })
        
        // 更新
        if (!this.props.offline) {
            await this.service.post(data, schema)
        }
        this.refreshList()
        message.success("添加成功")
        this.handleModalVisible()
        this.handleChangeCallback && this.handleChangeCallback()
        this.props.handleChangeCallback && this.props.handleChangeCallback()
    }
    
    /**
     * 处理数据更新
     * @param data
     * @returns {Promise<void>}
     */
    handleUpdate = async (data, schema) => {
        // 修改当前数据
        const idKey = getPrimaryKey(this.schema)
        this.state.data.list.some((item, index) => {
            if (data[idKey] == item[idKey]) {
                this.state.data.list[index] = decorateItem(data, this.schema)
                return true
            }
        })
        this.setState({
            data: this.state.data
        })
        
        // 更新
        if (!this.props.offline) {
            await this.service.put(data, schema)
        }
        this.refreshList()
        message.success("修改成功")
        
        this.handleModalVisible()
        this.handleChangeCallback && this.handleChangeCallback()
        this.props.handleChangeCallback && this.props.handleChangeCallback()
    }
    
    /**
     * 处理数据删除
     * @param data
     * @returns {Promise<void>}
     */
    handleDelete = async data => {
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
        
        // 更新
        if (!this.props.offline) {
            await this.service.delete({ id: data[idKey], ...data })
        }
        this.refreshList()
        message.success("删除成功")
        this.handleModalVisible()
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
        console.log("this.meta.authority", this.meta.authority)
        
        return (
            <Authorized
                authority={this.meta.authority && this.meta.authority.add}
                noMatch={null}
            >
                {!this.props.readOnly && (
                    <Button
                        type="primary"
                        onClick={() =>
                            this.handleModalVisible(true, null, actions.add)
                        }
                    >
                        新增
                    </Button>
                )}
            </Authorized>
        )
    }
    
    /**
     * 渲染操作栏
     * @returns {*}
     */
    renderOperationBar() {
        const { showSelect } = this.meta
        const { selectedRows } = this.state
        
        const menu = (
            <Menu
                onClick={e => {
                    const { dispatch } = this.props
                    const { selectedRows } = this.state
                    
                    if (!selectedRows) return
                    switch (e.key) {
                        case "remove":
                            dispatch({
                                type: this.meta.resource + "/remove",
                                payload: {
                                    key: selectedRows.map(row => row.key)
                                },
                                callback: () => {
                                    this.setState({
                                        selectedRows: []
                                    })
                                }
                            })
                            break
                        default:
                            break
                    }
                }}
                selectedKeys={[]}
            >
                <Authorized
                    authority={
                        this.meta.authority && this.meta.authority.delete
                    }
                    noMatch={null}
                >
                    <Menu.Item key="remove">删除</Menu.Item>
                </Authorized>
            </Menu>
        )
        
        return (
            <div className={styles.tableListOperator}>
                <Row type="flex" justify="space-between">
                    <Col>
                        {this.renderOperationButtons()}
                        {showSelect && selectedRows.length > 0 && (
                            <span>
                                <Button>批量操作</Button>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        更多操作 <Icon type="down"/>
                                    </Button>
                                </Dropdown>
                            </span>
                        )}
                    </Col>
                    <Col>{this.renderOperationExtend()}</Col>
                </Row>
            </div>
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
     * render the info modal
     */
    renderInfoModal() {
        if (this.props.renderInfoModal) {
            return this.props.renderInfoModal()
        }
        const { form } = this.props
        const renderForm = this.props.renderForm || this.renderForm
        const { resource, title, addArgs } = this.meta
        const { modalVisible, infoData, action } = this.state
        const updateMethods = {
            handleModalVisible: this.handleModalVisible,
            handleUpdate: this.handleUpdate,
            handleAdd: this.handleAdd
        }
        
        return (
            modalVisible && (
                <InfoModal
                    renderForm={renderForm}
                    title={title}
                    action={action}
                    resource={resource}
                    {...updateMethods}
                    visible={modalVisible}
                    values={infoData}
                    addArgs={addArgs}
                    meta={this.meta}
                    schema={this.schema}
                    {...this.meta.infoProps}
                />
            )
        )
    }
    
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true })
        console.log("component error", error)
    }
    
    render() {
        const { mini } = this.meta
        const { modalVisible } = this.state
        let {
            renderOperationBar,
            renderSearchBar,
            renderOperateColumn
        } = this.props
        
        let operationBar = null
        if (renderOperationBar) {
            operationBar = renderOperationBar()
        } else {
            operationBar = this.renderOperationBar && this.renderOperationBar()
        }
        
        let searchBar = null
        if (renderSearchBar) {
            searchBar = renderSearchBar()
        } else {
            searchBar = this.renderSearchBar && this.renderSearchBar()
        }
        
        return (
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
                {modalVisible && this.renderInfoModal()}
                {this.renderExtend && this.renderExtend()}
            </Fragment>
        )
    }
}

export default DataList
