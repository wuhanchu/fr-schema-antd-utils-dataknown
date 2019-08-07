import React, { PureComponent } from "react"
import { Form, message, Modal } from "antd"
import InfoForm from "./InfoForm"
import frSchema from "@/outter/fr-schema/src"

const { actions, getPrimaryKey } = frSchema
const confirm = Modal.confirm

/**
 * title: null,
 * visible: false,
 * onRef: null,
 * action: null, // the action value
 * values: null, // the record value
 * addArgs:null, // 编辑时带上的固有参数
 * handleModalVisible: null,
 * handleUpdate: null,
 * service:null,当前使用的service
 * schema:null,当前的schema
 * handleAdd: null,
 * componentDidMount: null,
 */
export class PureInfoModal extends PureComponent {
    state = {
        loading: false
    }

    constructor(props) {
        super(props)
        const { addArgs, visible, onRef, values, schema } = props
        this.state.visible = visible
        this.state.values = { ...(addArgs || {}), ...(values || {}) }
        this.schema = schema
        onRef && onRef(this)
    }

    show = values => {
        const { addArgs } = this.props

        this.setState({
            visible: true,
            values: { ...addArgs, ...values }
        })
    }

    hide = () => {
        this.setState({
            visible: false,
            values: null
        })
    }

    componentDidMount() {
        const { componentDidMount } = this.props
        componentDidMount && componentDidMount()
    }

    /**
     * 确认保存
     */
    onSave = () => {
        const { form, handleUpdate, handleAdd, action, addArgs } = this.props
        const { values } = this.state

        this.setState({ loading: true })
        form.validateFields(async (err, fieldsValue) => {
            try {
                let param = addArgs ? { ...addArgs } : {}
                const idKey = getPrimaryKey(this.schema)

                if (values) {
                    const idValue = values[idKey || "id"]
                    param.id = idValue
                    param[idKey] = idValue
                }

                Object.keys(fieldsValue).forEach(key => {
                    param[key] =
                        fieldsValue[key] instanceof Array &&
                        fieldsValue[key][0] instanceof String
                            ? fieldsValue[key].join(",")
                            : fieldsValue[key]
                })

                if (err) {
                    console.log("err", Object.values(err))
                    message.error(
                        "信息填写错误！" +
                            Object.values(err)[0].errors[0].message
                    )
                    return
                }

                if (this.props.convertParam) {
                    param = this.props.convertParam(param)
                }

                if (action === actions.update) {
                    await handleUpdate(param)
                } else {
                    await handleAdd(param)
                }
            } finally {
                this.setState({ loading: false })
            }
        })
    }

    /**
     * 渲染表单
     * @returns {*}
     */
    renderForm() {
        const { values } = this.state
        return this.props.renderForm &&
            typeof this.props.renderForm == "function" ? (
            this.props.renderForm({
                ...this.props,
                values
            })
        ) : (
            <InfoForm {...this.props} values={values} />
        )
    }

    /**
     * 弹出框关闭前调用
     */
    beforeFormClose = () => {
        const { values } = this.state
        const { form, action } = this.props
        const fieldsValue = form.getFieldsValue()
        const flag = Object.keys(fieldsValue).some(key => {
            let result =
                fieldsValue[key] && (!values || values[key] != fieldsValue[key])

            // moment 比较
            if (fieldsValue[key] && fieldsValue[key].isSame && values) {
                result = !fieldsValue[key].isSame(values[key])
            }

            if (result) {
                console.log(`字段${key}被修改为${values}`)
            }
            return result
        })

        if (flag && action !== actions.show) {
            confirm({
                title: "提示",
                content: "数据已做修改，确认关闭对话框？",
                okText: "关闭",
                cancelText: "取消",
                onOk: () => {
                    this.closeModel()
                },
                onCancel: () => {
                    return
                }
            })
        } else {
            this.closeModel()
        }
    }

    /**
     * 关闭弹出框
     */
    closeModel = () => {
        const { handleModalVisible } = this.props
        this.setState({
            visible: false
        })
        handleModalVisible && handleModalVisible()
    }

    render() {
        const { loading } = this.state

        const { title, action, ...otherProps } = this.props
        const { visible, values } = this.state

        if (!visible) {
            return null
        }

        // 查看模式 不需要显示 按钮
        if (action == actions.show) {
            otherProps.footer = null
        }

        return (
            <Modal
                width={700}
                destroyOnClose
                title={title || "" + "信息"}
                visible={true}
                onOk={this.onSave}
                okButtonProps={{ loading }}
                {...otherProps}
                onCancel={() => {
                    return this.beforeFormClose()
                }}
            >
                {this.renderForm()}
            </Modal>
        )
    }
}

export default Form.create()(PureInfoModal)
