import React, { PureComponent } from "react"
import { Form, Modal, Tabs } from "antd"
import { createForm, createInput } from "../../utils/component"

const TabPane = Tabs.TabPane

@Form.create()
class ExtendForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: props.recoord || {},
            updateFlag: !!props.recoord,
            loading: false
        }

        // set column
        this.state.column = this.props.column
    }

    renderContent = data => {
        const { column } = this.state
        const { form } = this.props
        return createForm.bind(this)(column, data, form)
    }

    onSave = () => {
        const { form, onOk } = this.props
        const { data } = this.props

        form.validateFields((err, fieldsValue) => {
            let param = this.state.data ? { ...this.state.data } : {}
            Object.keys(fieldsValue).forEach(key => {
                param[key] =
                    fieldsValue[key] instanceof Array
                        ? fieldsValue[key].join(",")
                        : fieldsValue[key]
            })

            if (err) return

            this.setState({ loading: true }, async () => {
                try {
                    const result = await onOk(fieldsValue, data)
                    if (result !== false) {
                        this.props.onCancel()
                    }
                } finally {
                    this.setState({ loading: false })
                }
            })
        })
    }

    render() {
        const { onCancel, title } = this.props
        const { data, loading } = this.state

        return (
            <Modal
                width={640}
                bodyStyle={{ padding: "32px 40px 48px" }}
                destroyOnClose
                title={title}
                visible={true}
                bodyStyle={{
                    paddingLeft: 0
                }}
                okButtonProps={loading}
                onOk={this.onSave}
                onCancel={() => {
                    onCancel && onCancel()
                }}
                okButtonProps={{ loading }}
            >
                {this.renderContent(data)}
            </Modal>
        )
    }
}

export default class ExtendModal extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible
        }
    }

    show(data) {
        this.setState({ visible: true, data })
    }

    render() {
        const { visible } = this.state
        if (!visible) {
            return null
        }

        return (
            <ExtendForm
                {...this.props}
                onCancel={() => {
                    this.setState({ visible: false })
                    this.props.onCancel && this.props.onCancel()
                }}
            />
        )
    }
}
